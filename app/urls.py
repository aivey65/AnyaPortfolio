from django.urls import path
from . import views

urlpatterns = [
    path('all-projects', views.ProjectView.as_view()),
    # path('create-project', views.ProjectCreate.as_view()),
    path('profile', views.ProfileView.as_view()),
]