from django.shortcuts import render
from jeo.models import *

import sys

def index(request):
  context = {}
  return render(request, 'index.html', context)

def example(request):
  context = {}
  return render(request, 'example.html', context)