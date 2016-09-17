# -*- coding: utf-8 -*-
# Generated by Django 1.9.1 on 2016-09-17 15:00
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Event',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('event_name', models.CharField(max_length=100)),
                ('event_location_latitude', models.FloatField()),
                ('event_location_longitude', models.FloatField()),
                ('event_start_time', models.DateTimeField(verbose_name=b'Start Time')),
                ('event_end_time', models.DateTimeField(verbose_name=b'End Time')),
                ('event_category', models.CharField(max_length=20)),
            ],
        ),
    ]