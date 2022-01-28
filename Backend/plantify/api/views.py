from django.http import JsonResponse
from django.shortcuts import render
from api.search import Search

# Create your views here.


def apiOverview(request):
	return JsonResponse("API BASE POINT", safe=False)


def search(request):
	"""
	request must be a JSON containing the following:
	{
	shadow: (number between 1 and 5),
	hight: (hight in meters)
	season_to_bloom: (winter, summer, autum, spring)
	}

	:param request:
	:return:
	"""
	search_obj = Search(request)
	return JsonResponse(search_obj.response)