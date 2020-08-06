#!/bin/env python3
from api import create_app

app = create_app(True)

if __name__ == '__main__':
    app.run(host='0.0.0.0', debug=True)
