from django.db import models

# Create your models here.

class Public(models.Model):
    name = models.CharField(max_length = 10, blank=False)
    title = models.CharField(max_length = 50, blank=False)
    img = models.FileField(upload_to="public_img/", null=True, blank=True)
    body = models.TextField(verbose_name='내용', blank=False)
    lat = models.FloatField(null=True)
    lng = models.FloatField(null=True)
    
    def get_latlng(self):
        return {'lat':self.lat, 'lng':self.lng}
    
