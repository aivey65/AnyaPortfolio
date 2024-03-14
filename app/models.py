from django.db import models

class Project(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField(blank=True, null=True)
    date = models.DateField(blank=True, null=True)
    skills = models.TextField(blank=True, null=True)
    links = models.TextField(blank=True, null=True)

class Image(models.Model):
    imageName = models.CharField(max_length=100)
    project = models.ForeignKey('Project', on_delete=models.CASCADE, blank=False, null=False)