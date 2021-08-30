from starlette.applications import Starlette
from routes import api_routes
from middlewares import middleware

app = Starlette(
    debug=True,
    routes=api_routes,
    middleware=middleware
)