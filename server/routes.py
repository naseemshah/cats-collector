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
                "position": result.position,
                "title":    result.title,
                "type":     result.type,
                "imageUrl": result.imageUrl
                }
                for result in stmt
            ]
        print(results)
        return JSONResponse(results)

api_routes=[
    Route('/', api_welcome_message),
    Route('/cats', get_cats),
]