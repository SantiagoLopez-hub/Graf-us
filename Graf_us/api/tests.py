from django.test import TestCase
from api.models import User


# Test users
class UserTestCase(TestCase):
    email1 = 'a'
    email2 = 'b'
    password1 = ''
    password2 = ''

    def setUp(self):
        User.objects.create(
            email=self.email1,
            password=self.password1)
        User.objects.create(
            email=self.email2,
            password=self.password2)
