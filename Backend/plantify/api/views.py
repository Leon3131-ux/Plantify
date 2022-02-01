from django.http import JsonResponse
from django.shortcuts import render
from .search import Search
from django.views.decorators.csrf import csrf_exempt

# Create your views here.


def apiOverview(request):
	return JsonResponse("API BASE POINT", safe=False)

@csrf_exempt
def search(request):
	search_obj = Search(request)
	return JsonResponse(search_obj.response)