from django.db import models


class User(models.Model):
    email = models.CharField(max_length=320, unique=True, blank=False, default=None)
    password = models.CharField(max_length=256, blank=False, default=None)
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    age = models.IntegerField(max_length=3)
    date_of_birth = models.DateTimeField()
    gender = models.CharField(max_length=1)
    country = models.CharField(max_length=50)
    state = models.CharField(max_length=50)
    city = models.CharField(max_length=50)
    contact_number = models.CharField(max_length=20)
    created_at = models.DateTimeField(auto_now_add=True)
