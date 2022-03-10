from django.shortcuts import render
from rest_framework import generics
from .models import User, Connection
from .serializers import UserSerializer, ConnectionSerializer


class UserView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer


class ConnectionView(generics.CreateAPIView):
    queryset = Connection.objects.all()
    serializer_class = ConnectionSerializer
