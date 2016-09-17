from django.shortcuts import render
from jeo.models import *
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
from pprint import pprint
import json 

import sys

def index(request):
  event_list = Event.objects.order_by('event_name')
  context = {}#event_list}
  return render(request, 'index.html', context)

@csrf_exempt
def processData(request):
	#print("Let's see")
	#print(request.POST)
	eventData = request.POST['eventData']
	decoded = json.loads(eventData)
	pprint(decoded)
	for elem in decoded:
			temp = Event(event_name=elem['name'], event_location_latitude=(float)(elem['location_latitude']), 
					 	  event_location_longitude=(float)(elem['location_longitude']), event_start_time=elem['start_time'],
					      event_end_time=elem['end_time'], event_category=elem['category']);
			temp.save()
	return HttpResponse("hello!")

def example(request):
  context = {}
  return render(request, 'example.html', context)
