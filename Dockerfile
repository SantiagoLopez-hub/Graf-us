FROM alpine:latest

RUN apt-get update
RUN apt-get install python

RUN pip install flask
# RUN pip install Flask-GraphQL
RUN pip install "graphene>=2.0"

###############################################

FROM ubuntu:latest
FROM mongo:latest
FROM python:latest

RUN python -m pip install Django
RUN pip install "graphene>=2.0"
RUN pip install graphene-django

COPY . /SoftwareProject2
WORKDIR /SoftwareProject2

CMD python -u test.py