from django.test import TestCase
from api.models import User, Connection


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

    def test_users_can_connect(self):
        """Check users can connect correctly"""
        user1 = User.objects.get(email=self.email1)
        user2 = User.objects.get(email=self.email2)
        connection = Connection.objects.create(
            from_user=user1,
            to_user=user2)

        self.assertEqual(user1, connection.from_user)
        self.assertEqual(user2, connection.to_user)
