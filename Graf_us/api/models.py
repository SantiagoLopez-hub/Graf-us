from django.db import models


# https://docs.djangoproject.com/en/4.0/topics/db/examples/
class User(models.Model):
    email = models.EmailField(unique=True, blank=False, default=None)
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
    user = models.OneToOneField(
        User,
        on_delete=models.CASCADE,
        primary_key=True
    )
    description = models.TextField()
    college = models.CharField(max_length=255, null=True)
    university = models.CharField(max_length=255, null=True)
    current_company = models.CharField(max_length=255, null=True)
    hobbies = models.TextField()


# Many-to-one Relationship with User
class Connection(models.Model):
    from_user = models.ForeignKey(
        User,
        related_name='%(class)s_from_user',
        on_delete=models.CASCADE
    )
    to_user = models.ForeignKey(User, on_delete=models.CASCADE)
    approval_status = models.BooleanField(default=False)
