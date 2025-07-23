from django.urls import path
from .views import viewBlog

urlpatterns = [
    path('',viewBlog,name="blogapi")
]
