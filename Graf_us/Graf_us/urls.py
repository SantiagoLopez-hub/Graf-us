from django.contrib import admin
from django.urls import path, include
from django.conf.urls import url
from pyping.core import *
# from coreapi import *
from Graf_us.views import ReactView
# pip install coreapi
urlpatterns = [
    path('admin/', admin.site.urls),
    path('wel/', ReactView.as_view(), name="something"),
]
