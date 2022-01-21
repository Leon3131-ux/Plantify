from django.db import models
from django.contrib.auth.models import User


# Create your models here.


class Country(models.Model):
    country = models.CharField(max_length=100, null=False)

    def __str__(self):
        return self.country


class Place(models.Model):
    place_name = models.CharField(max_length=100, null=False)
    zip_code = models.CharField(max_length=10, null=False)

    def __str__(self):
        return self.place_name


class Location(models.Model):
    address = models.CharField(max_length=100, null=False)
    country = models.ForeignKey(Country, on_delete=models.CASCADE)
    place = models.ForeignKey(Place, on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE)

    def __str__(self):
        return self.address
