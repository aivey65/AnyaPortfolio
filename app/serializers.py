from rest_framework import serializers
from . import models

class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Project
        fields = ('id', 'name', 'description', 'date', 'skills', 'links')

class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Profile
        fields = ("blurb", "skills", "hobbies", "location", "LinkedIn", "Instagram", "Behance")