import json
import plants_data


class Search:

	def __init__(self, request):
		self.request = request
		self.response = {
			'error': ''
		}

		self.search_plant()

		self.plant_data = plants_data.plant_data

	def search_plant(self):
		"""
		{
		shadow: (number between 1 and 5),
		height: (hight in meters)
		season_to_bloom: (winter, summer, autum, spring)
		}
		:return:
		"""
		search_json = self.request

		if not search_json.get('shadow'):
			self.response['error'] = 'parameter shadow is missing or empty'
			return
		if not search_json.get('height'):
			self.response['error'] = 'parameter height is missing or empty'
			return
		if not search_json.get('season_to_bloom'):
			self.response['error'] = 'parameter season_to_bloom is missing or empty'
			return
		if not search_json.get('humidity'):
			self.response['error'] = 'parameter season_to_bloom is missing or empty'
			return
		if not search_json.get('altitude'):
			self.response['error'] = 'parameter season_to_bloom is missing or empty'
			return

		# height used to estimate temperature and humidity

		matched_plants = self.match_plant(search_json.get('shadow'),
										 search_json.get('height'),
										 search_json.get('humidity'),
										 search_json.get('season_to_bloom'),
										 search_json.get('altitude'))

		self.response = matched_plants


	def match_plant(self, shadow, height, humidity, season_to_bloom, altitude):
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

		data = self.plant_data

		return data
