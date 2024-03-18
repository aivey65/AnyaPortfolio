from rest_framework import generics
from . import serializers, models
from django.contrib.auth.decorators import login_required

class ProjectView(generics.ListAPIView):
    queryset = models.Project.objects.all()
    serializer_class = serializers.ProjectSerializer

# @login_required
# class ProjectCreate(generics.CreateAPIView):
#     queryset = models.Project.objects.all()
#     serializer_class = serializers.ProjectSerializer

class ProfileView(generics.ListAPIView):
    queryset = models.Profile.objects.all()
    serializer_class = serializers.ProfileSerializer