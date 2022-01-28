from django.http import JsonResponse
from django.shortcuts import render
from api.search import Search

# Create your views here.


def apiOverview(request):
	return JsonResponse("API BASE POINT", safe=False)


def search(request):
	search_obj = Search(request)
	return JsonResponse(search_obj.response)