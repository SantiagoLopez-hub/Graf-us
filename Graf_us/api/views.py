from django.http import HttpResponse
from rest_framework import generics, status
from rest_framework.views import APIView
from rest_framework.response import Response
from .serializers import *


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


class UserMethods(APIView):
    serializer_class = UserSerializer

    def get(self, request):
        current = User.objects.get(email__exact=request.GET.get('email', ''))
        return Response({
            'email': current.email,
            'firstName': current.first_name,
            'lastName': current.last_name
        }, status=status.HTTP_200_OK)

    def post(self, request):
        if not self.request.session.exists(self.request.session.session_key):
            self.request.session.create()

        ser = self.serializer_class(data=request.data)

        if ser.is_valid():
            email = ser.data.get('email')
            first_name = ser.data.get('first_name')
            last_name = ser.data.get('last_name')
            qs = User.objects.filter(email=email)

            if qs.exists():
                user = qs[0]
                user.email = email
                user.first_name = first_name
                user.last_name = last_name
                user.save(update_fields=['email', 'first_name', 'last_name'])
            else:
                user = User(email=email,
                            first_name=first_name,
                            last_name=last_name)
                user.save()

            return Response(status=status.HTTP_201_CREATED)

        return Response(status=status.HTTP_406_NOT_ACCEPTABLE)
