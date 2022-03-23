from django.test import TestCase
from api.models import User, Connection
from faker import Faker
fake = Faker()


# Test users
class UserTestCase(TestCase):
    # Generate fake data
    email1 = fake.name().split()[0].lower() + '@gmail.com'
    email2 = fake.name().split()[0].lower() + '@gmail.com'
    password1 = fake.text(8)
    password2 = fake.text(8)

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
