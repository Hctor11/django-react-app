# Generated by Django 4.2.7 on 2023-11-20 03:19

import api.models
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='room',
            name='code',
            field=models.CharField(default=api.models.code_generator, max_length=10, unique=True),
        ),
    ]
