class Search:

	def __init__(self, request):
		self.request = request

		self.response = {'default': 'shit'}

		self.search_plant()

	def search_plant(self):
		self.get_pos()

	def get_pos(self):
		self.response['request'] = str(self.request)

	def search_temp(self):
		pass

	def get_soil(self):
		pass
