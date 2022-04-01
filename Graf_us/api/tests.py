from django.test import TestCase
from api.models import *
from faker import Faker
# Generate fake data to test with
fake = Faker()


# Users unit tests
class UserTestCase(TestCase):
    # Generate fake, temporary data
    email1 = fake.name().split()[0].lower() + '@gmail.com'
    email2 = fake.name().split()[0].lower() + '@gmail.com'
    password1 = fake.text(8)
    password2 = fake.text(8)

    def setUp(self):
        """Set up users unit tests"""
        User.objects.create(
            email=self.email1,
            password=self.password1
        )
        User.objects.create(
            email=self.email2,
            password=self.password2
        )

    def test_users_can_create_profile(self):
        """Check users can create a profile correctly"""
        user1 = User.objects.get(email=self.email1)
        profile1 = Profile.objects.create(
            user_id=user1.pk,
            description=fake.text(255),
            college=fake.name(),
            university=fake.name(),
            current_company=fake.name(),
            hobbies=fake.text(255)
        )

        # Make sure that user1's primary key matches profile1's user id
        self.assertEqual(user1.pk, profile1.user_id)

    def test_users_can_post(self):
        """Check users can post correctly"""
        user2 = User.objects.get(email=self.email1)
        post2 = Post.objects.create(
            user=user2,
            title=fake.text(255),
            caption=fake.text(255),
            likes=fake.random.getstate()[1][0]
        )

        # Make sure that user2 is the same object as post2's user
        self.assertEqual(user2, post2.user)

    def test_users_can_connect(self):
        """Check users can connect correctly"""
        user1 = User.objects.get(email=self.email1)
        user2 = User.objects.get(email=self.email2)
        connection = Connection.objects.create(
            from_user=user1,
            to_user=user2
        )

        # Check that user1 has requested to connect to user2
        self.assertEqual(user1, connection.from_user)
        self.assertEqual(user2, connection.to_user)
