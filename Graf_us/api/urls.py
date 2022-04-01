from django.urls import path
from .views import *

urlpatterns = [
    path('user', UserView.as_view()),
    path('connection', ConnectionView.as_view()),
    path('profile', ProfileView.as_view()),
    path('post', PostView.as_view()),
    path('save-user', UserMethods().as_view()),
    path('get-user', UserMethods().as_view())
]
