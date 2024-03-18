from django.contrib import admin
from .models import Profile, Project, ProjectImage, AboutImage

admin.site.register(Profile)
admin.site.register(Project)
admin.site.register(ProjectImage)
admin.site.register(AboutImage)