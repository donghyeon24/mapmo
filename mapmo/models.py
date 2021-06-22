from django.db import models

# Create your models here.

class Public(models.Model):
    name = models.CharField(max_length = 10)
    title = models.CharField(max_length = 50)
    img = models.FileField(upload_to="public_img/", null=True, blank=True)
    body = models.TextField(verbose_name='내용')
