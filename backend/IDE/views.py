from django.shortcuts import render
import json
from django.http import JsonResponse
from . import mongoDB


# Create your views here.

def index():
    JsonResponse({"index": "index JSON response"}, status=201)