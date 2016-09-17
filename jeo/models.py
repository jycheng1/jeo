from django.db import models

# Create your models here.
class Event(models.Model):
	event_name = models.CharField(max_length=100)
	event_location_latitude = models.FloatField()
	event_location_longitude = models.FloatField()
	event_start_time = models.DateTimeField('Start Time')
	event_end_time = models.DateTimeField('End Time')
	event_category = models.CharField(max_length=20)