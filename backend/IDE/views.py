from django.shortcuts import render
import json
from django.http import JsonResponse
from . import mongoDB


# Create your views here.

def index(request):
    return JsonResponse({"index": "index JSON response"}, status=201)

def sign_up(request):
    data = json.loads(request.body)
    email = data.get("email", "")
    username = data.get("username", "")
    password = data.get("password", "")
    mongoDB.addAccount(email, username, password)
    return JsonResponse({"result": "account created"}, status=201)