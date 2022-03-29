from django.shortcuts import render
from rest_framework import generics, status
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import User, Connection, Profile, Post
from .serializers import UserSerializer, ConnectionSerializer, ProfileSerializer, PostSerializer


class UserView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer


class ConnectionView(generics.CreateAPIView):
    queryset = Connection.objects.all()
    serializer_class = ConnectionSerializer


class ProfileView(generics.CreateAPIView):
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer


class PostView(generics.CreateAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer


class CreateUserView(APIView):
    serializer_class = UserSerializer

    def post(self, request):
        if not self.request.session.exists(self.request.session.session_key):
            self.request.session.create()
        ser = self.serializer_class(data=request.data)

        if ser.is_valid():
            email = ser.data.get('email')
            password = ser.data.get('password')
            first_name = ser.data.get('first_name')
            last_name = ser.data.get('last_name')
            date_of_birth = ser.data.get('date_of_birth')
            created_at = ser.data.get('created_at')
            host = self.request.session.session_key
            qs = User.objects.filter(host=host)

            if qs.exists():
                user = qs[0]
                user.email = email
                user.password = password
                user.first_name = first_name
                user.last_name = last_name
                user.date_of_birth = date_of_birth
                user.created_at = created_at
                user.save(update_fields=['email', 'password', 'first_name', 'last_name', 'date_of_birth', 'created_at'])
            else:
                user = User(host=host,
                            email=email,
                            password=password,
                            first_name=first_name,
                            last_name=last_name,
                            date_of_birth=date_of_birth,
                            created_at=created_at)
                user.save()

            return Response(UserSerializer(user).data, status=status.HTTP_201_CREATED)
