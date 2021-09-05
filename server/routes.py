from starlette.routing import Route
from starlette.responses import PlainTextResponse
from starlette.responses import JSONResponse
from sqlmodel import Session, select
from database import engine
from models import Cats
import json


async def api_welcome_message(request):
    return PlainTextResponse('Welcome to Cats Explorer API')

async def get_cats(request):
    with Session(engine) as session:
        stmt = session.exec(select(Cats)).all()
        results = [
                {
                "id": result.id,
                "position": result.position,
                "title":    result.title,
                "type":     result.type,
                "imageUrl": result.imageUrl
                }
                for result in stmt
            ]
        return JSONResponse(results)


async def update_cats(request):
    response = await request.json()
    try:
        with Session(engine) as session:
            for updated_cat in response:
                stmt = select(Cats).where(Cats.id == updated_cat['id'])
                results = session.exec(stmt)
                cat = results.one()
                cat.position = updated_cat['position']
                cat.title = updated_cat['title']
                cat.type = updated_cat['type']
                cat.imageUrl = updated_cat['imageUrl']
                session.add(cat)
                session.commit()
                session.refresh(cat)
    except Exception as e:
        print("Error", e)
        return PlainTextResponse("Error")
    return PlainTextResponse("results")

api_routes=[
    Route('/', api_welcome_message),
    Route('/cats', get_cats),
    Route('/updateCats', update_cats, methods=['POST']),
]