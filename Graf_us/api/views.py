from django.shortcuts import render
from rest_framework import generics
from .models import User#, Connection, Profile, Post
from .serializers import UserSerializer#, ConnectionSerializer, ProfileSerializer, PostSerializer


class UserView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
#
#
# class ConnectionView(generics.CreateAPIView):
#     queryset = Connection.objects.all()
#     serializer_class = ConnectionSerializer
#
#
# class ProfileView(generics.CreateAPIView):
#     queryset = Profile.objects.all()
#     serializer_class = ProfileSerializer
#
#
# class PostView(generics.CreateAPIView):
#     queryset = Post.objects.all()
#     serializer_class = PostSerializer
#
