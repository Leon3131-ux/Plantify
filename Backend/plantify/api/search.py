import json
from . import plants_data


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
		body_unicode = self.request.body.decode('utf-8')
		search_json = json.loads(body_unicode)
		self.response['error'] = str(search_json)

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
		data = {}
		for plant_name, plant_info in plants_data.plant_data.items():
			if season_to_bloom not in plant_info.get('season'):
				continue
			if not humidity == plant_info.get('humidity'):
				continue
			if not shadow == plant_info.get('shadow'):
				continue
			if height not in range(plant_info.get('height')[0], plant_info.get('height')[1]):
				continue
			if altitude not in range(plant_info.get('altitude')[0], plant_info.get('altitude')[1]):
				continue

			data[plant_name] = {
				"colors": plant_info.get('color')
			}
		if data == {}:
			data = {
				'error': 'No plant found for your circumstances'
			}

		return data
