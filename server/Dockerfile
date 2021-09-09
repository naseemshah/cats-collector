FROM tiangolo/uvicorn-gunicorn:python3.6

WORKDIR /app

LABEL maintainer="Sebastian Ramirez <tiangolo@gmail.com>"

COPY . .

RUN pip install --no-cache-dir -r requirements.txt
