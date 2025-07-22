from django.db import models

# Create your models here.

class Blog(models.Model):
    title  = models.CharField(max_length=100)
    content = models.TextField()
    author= models.CharField(max_length=40)
    # slug = models.SlugField(max_length=100, unique=True)
    tags = models.CharField(max_length=20)
    created_at = models.DateTimeField(auto_now_add=True)