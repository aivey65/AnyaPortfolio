from django.urls import path
from . import views

urlpatterns = [
    path('all-projects', views.ProjectView.as_view())
]