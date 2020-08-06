from api.resources.treshold import Treshold

def init_api(api, app):

    # Add resources
    api.add_resource(Treshold, '/treshold/')

