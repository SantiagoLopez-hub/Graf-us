# Generated by Django 4.0 on 2022-01-04 13:21

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='room',
            old_name='votes_to_skipe',
            new_name='votes_to_skip',
        ),
    ]
