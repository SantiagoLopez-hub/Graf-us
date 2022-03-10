from django.urls import path
from .views import UserView, ConnectionView

urlpatterns = [
    path('user', UserView.as_view()),
    path('connection', ConnectionView.as_view())
]
