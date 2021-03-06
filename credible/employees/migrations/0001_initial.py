# -*- coding: utf-8 -*-
# Generated by Django 1.10.dev20160409145743 on 2016-04-10 06:40
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Profile',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('AddressLine1', models.CharField(max_length=200, null=True)),
                ('AddressLine2', models.CharField(max_length=200, null=True)),
                ('City', models.CharField(max_length=200, null=True)),
                ('EmergencyPhone', models.CharField(max_length=200, null=True)),
                ('EmployeeId', models.IntegerField(null=True)),
                ('EmployeeImage', models.CharField(max_length=4096, null=True)),
                ('Name', models.CharField(max_length=200, null=True)),
                ('OfficePhone', models.CharField(max_length=200, null=True)),
                ('State', models.CharField(max_length=2, null=True)),
                ('Title', models.CharField(max_length=200, null=True)),
                ('Zip', models.CharField(max_length=10, null=True)),
            ],
        ),
    ]
