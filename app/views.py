from django.shortcuts import render
from rest_framework import generics
from . import serializers, models

class ProjectView(generics.ListAPIView):
    queryset = models.Project.objects.all()
    serializer_class = serializers.ProjectSerializer