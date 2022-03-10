from django.urls import path
from .views import UserView, ConnectionView, ProfileView

urlpatterns = [
    path('user', UserView.as_view()),
    path('connection', ConnectionView.as_view()),
    path('profile', ProfileView.as_view())
]
