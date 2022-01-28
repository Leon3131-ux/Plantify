import json


class Search:

	def __init__(self, request):
		self.request = request
		self.response = {
			'error': ''
		}

		self.search_plant()

	def search_plant(self):
		"""
		{
		shadow: (number between 1 and 5),
		height: (hight in meters)
		season_to_bloom: (winter, summer, autum, spring)
		}
		:return:
		"""
		search_json = json.loads(search_plant)

		if not search_json.get('shadow'):
			self.response['error'] = 'parameter shadow is missing or empty'
			return
		if not search_json.get('height'):
			self.response['error'] = 'parameter height is missing or empty'
			return
		if not search_json.get('season_to_bloom'):
			self.response['error'] = 'parameter season_to_bloom is missing or empty'

		# height used to estimate temperature and humidity

		height = 500  # height in meters
		humidity = 3  # still unknown

		matched_plant = self.match_plant(search_json.get('shadow'),
										 height,
										 humidity,
										 search_json.get('season_to_bloom'))

		self.response = {
			"name": matched_plant.get('name'),
			"soil": matched_plant.get('soil')
		}

	def match_plant(self, shadow, height, humidity, season_to_bloom):
		"""
		returns dict in this format:
		{
		"name": name of the plant
		"soil": sourness of soil
		}

		:param shadow:
		:param height:
		:param humidity:
		:param season_to_bloom:
		:return:
		"""
		print('mathing stuff to plant')

		data = {
			"name": "tomato",
			"soil": "some stuff"
		}

		return data
