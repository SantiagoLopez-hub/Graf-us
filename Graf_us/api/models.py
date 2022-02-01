from django.db import models


class User(models.Model):
    country = models.CharField(max_length=50)
    state = models.CharField(max_length=50)
    city = models.CharField(max_length=50)
    contact_number = models.CharField(max_length=20)
    password = models.CharField(max_length=20)
    email = models.CharField(max_length=8, default="", unique=True)
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    age = models.IntegerField(max_length=3)
    date_of_birth = models.DateTimeField(auto_now_add=True)
    gender = models.CharField(max_length=1)
    created_at = models.DateTimeField(auto_now_add=True)
