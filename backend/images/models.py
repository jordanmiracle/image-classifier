from django.db import models
from django.utils import timezone
from django.template import defaultfilters
from datetime import datetime


class Image(models.Model):
    objects = None
    picture = models.ImageField()
    classified = models.CharField(max_length=200, blank=True)
    uploaded = models.DateTimeField(auto_now_add=True)
    name = models.CharField(max_length=100, blank=True)

    def __str__(self):
        return "Image classified at {}".format(self.uploaded.strftime('%Y-%m-%d %H:%M'))
