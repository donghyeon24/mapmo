from django.contrib import admin
from .models import Public, Friends, Private

# Register your models here.
admin.site.register(Public)
admin.site.register(Friends)
admin.site.register(Private)