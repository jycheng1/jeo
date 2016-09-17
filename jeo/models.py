from django.db import models

# Create your models here.
class Event(models.Model):
    event_name = models.CharField(max_length=100)
    event_location_latitude = models.FloatField()
    event_location_longitude = models.FloatField()
    event_start_time = models.DateTimeField('Start Time')
    event_end_time = models.DateTimeField('End Time')
    event_category = models.CharField(max_length=20)

    def __str__(self):
        return (self.event_name + ' - ' + str(self.event_location_latitude) + 
            ' - ' + str(self.event_location_longitude) + ' - ' + 
                str(self.event_start_time) + ' - ' + 
                str(self.event_end_time) + ' - ' + self.event_category)