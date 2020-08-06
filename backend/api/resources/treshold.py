from api.utils.utils import treshold_checker
from api.utils.globals import TRESHOLD_VALUE

from flask_restful import Resource
from flask import request, jsonify
import numpy as np


FUNCTION = {
    "SIN": np.sin,
    "COS": np.cos,
    "LOG": np.log,
}

class Treshold(Resource):

    def post(self):
        """Treshold checker"""

        data = request.get_json()
        number_1 = data["number_1"]
        number_2 = data["number_2"]
        function = FUNCTION.setdefault(data["function"])

        if not function:
            return {"message": "Invalid function"}

        return {
            "number_1": treshold_checker(function, number_1),
            "number_2": treshold_checker(function, number_2)
        }
    
    def get(self):
        """Get the global treshold"""
        return {"treshold": str(TRESHOLD_VALUE)}
