FROM python:3.7.5-alpine

WORKDIR /app

# set environment variables
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

RUN apk add --no-cache gcc musl-dev postgresql-dev python3-dev
RUN pip3 install --upgrade pip

COPY requirements.txt /app/requirements.txt
RUN pip3 install -r requirements.txt

COPY . ./
# RUN python /app/manage.py db upgrade 
EXPOSE 5000
CMD ["python", "run.py"]
