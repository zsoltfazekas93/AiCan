from flask import Flask
from flask_restful import Api
from flask_cors import CORS
from api.api import init_api


def create_app(debug):
    """Create an application."""
    app = Flask(__name__)
    CORS(app)
    api = Api(app)
    init_api(api, app)
    return app