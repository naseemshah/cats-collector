from starlette.applications import Starlette
from starlette.responses import PlainTextResponse
from starlette.responses import JSONResponse
from starlette.config import Config
from starlette.routing import Route


async def api_welcome_message(request):
    return PlainTextResponse('Welcome to Cats Explorer API')

async def get_cats(request):
    return PlainTextResponse('get cats')

api_routes=[
    Route('/', api_welcome_message),
    Route('/cats', get_cats),
]


app = Starlette(debug=True, routes=api_routes)