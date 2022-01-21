from django.contrib import admin
from .models import Country, Place, Location

# Register your models here.

admin.site.register(Country)
admin.site.register(Place)
admin.site.register(Location)