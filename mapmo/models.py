from django.db import models

# Create your models here.

class Public(models.Model):
    name = models.CharField(max_length = 10)
    title = models.CharField(max_length = 50)
    img = models.FileField(upload_to="public_img/", null=True, blank=True)
    body = models.TextField(verbose_name='내용', blank=False)
    lat = models.FloatField(null=True)
    lng = models.FloatField(null=True)
    
    def get_latlng(self):
        return {'lat':self.lat, 'lng':self.lng}

class Friends(models.Model):
    title = models.CharField(max_length = 50, blank=False)
    img = models.FileField(upload_to="Friends_img/", null=True, blank=True)
    body = models.TextField(verbose_name='내용', blank=False)
    lat = models.FloatField(null=True)
    lng = models.FloatField(null=True)
    
    def get_latlng(self):
        return {'lat':self.lat, 'lng':self.lng}

class Private(models.Model):
    title = models.CharField(max_length = 50, blank=False)
    img = models.FileField(upload_to="Private_img/", null=True, blank=True)
    body = models.TextField(verbose_name='내용', blank=False)
    lat = models.FloatField(null=True)
    lng = models.FloatField(null=True)
    
    def get_latlng(self):
        return {'lat':self.lat, 'lng':self.lng}
    
