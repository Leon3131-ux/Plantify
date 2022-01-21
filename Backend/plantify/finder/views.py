from django.shortcuts import render
from django.http import HttpResponse


def home(request):
    return render(request, 'finder/home.html')


def search(request):
    return {'some': 'shit'}