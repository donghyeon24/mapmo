from django.shortcuts import render
from .models import Public

# Create your views here.
def index(request):
  return render(request, 'index.html')

def main_public(request):
  return render(request,'main_public.html')

def write_public(request):
  PublicPost = Public()
  PublicPost.name = request.GET['name']
  PublicPost.title = request.GET['title']
  PublicPost.img = request.GET['img']
  PublicPost.body = request.GET['body']
  PublicPost.save()
  return render(request,"main_public.html")