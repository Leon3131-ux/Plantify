from django.contrib.auth.models import User
from rest_framework import serializers
from finder.models import *


class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'email', 'password')
        extra_kwargs = {'password': {'write_only': True, 'required': True}}

        def create(self, validated_data):
            user = User.objects.create_user(**validated_data)
            return user


class LocationSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Location
        fields = ()

        def create(self, validated_data):
            location = Location.objects.create_user(**validated_data)
            return location