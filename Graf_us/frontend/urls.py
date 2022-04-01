from django.urls import path
from .views import index


urlpatterns = [
    path('', index),
    path('graf/', index),
    path('jobs/', index),
    path('connect/', index),
    path('contact-us/', index),
    path('about-us/', index),
    path('auth/linkedin/callback/', index)
]
