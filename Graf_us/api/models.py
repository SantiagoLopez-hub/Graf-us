import uuid
from django.db import models


# https://docs.djangoproject.com/en/4.0/topics/db/examples/
class User(models.Model):
    email = models.EmailField(unique=True, blank=False, default=uuid.uuid1)
    password = models.CharField(max_length=256, blank=False, default=None)
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    date_of_birth = models.DateTimeField(null=True)
    gender = models.CharField(max_length=1, null=True)
    country = models.CharField(max_length=50, null=True)
    state = models.CharField(max_length=50, null=True)
    city = models.CharField(max_length=50, null=True)
    contact_number = models.CharField(max_length=20, null=True)
    created_at = models.DateTimeField(auto_now_add=True)


# One to one Relationship with User
class Profile(models.Model):
    id = models.AutoField(primary_key=True)
    user = models.OneToOneField(
        User,
        on_delete=models.CASCADE
    )
    description = models.TextField()
    college = models.CharField(max_length=255, null=True)
    university = models.CharField(max_length=255, null=True)
    current_company = models.CharField(max_length=255, null=True)
    hobbies = models.TextField(null=True)


# Many-to-one Relationship with User
class Post(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    title = models.CharField(max_length=255, null=False)
    caption = models.TextField()
    likes = models.IntegerField(default=0)
    created_at = models.DateTimeField(auto_now_add=True)


# Many-to-one Relationship with User
class Connection(models.Model):
    from_user = models.ForeignKey(
        User,
        related_name='%(class)s_from_user',
        on_delete=models.CASCADE
    )
    to_user = models.ForeignKey(User, on_delete=models.CASCADE)
    approval_status = models.BooleanField(default=False)

    class Meta:
        unique_together = ('from_user', 'to_user')

