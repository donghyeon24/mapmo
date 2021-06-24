from django.shortcuts import render
from .models import Public

# Create your views here.
def index(request):
  return render(request, 'index.html')

def choice(request):
  return render(request, 'choice.html')

def main_public(request):
  locations=Public.objects.all()
  locations=[location.get_latlng() for location in locations]

  return render(request, 'main_public.html',{'locations':locations})

def main_friends(request):
  return render(request, 'main_friends.html')

def main_private(request):
  return render(request, 'main_private.html')

def write_public(request):
  if request.method == 'POST':
    PublicPost = Public()
    PublicPost.name = request.POST['name']
    PublicPost.title = request.POST['title']
    PublicPost.img = request.FILES['img']
    PublicPost.body = request.POST['body']
    PublicPost.lat = request.POST['lat']
    PublicPost.lng = request.POST['lng']

    PublicPost.save()
    return render(request,"main_public.html")
  else:
    return render(request,"index.html")

def write_friends(request):
  if request.method == 'POST':
    PublicPost = Public()
    PublicPost.name = 'friends'
    PublicPost.title = request.POST['title']
    PublicPost.img = request.FILES['img']
    PublicPost.body = request.POST['body']
    PublicPost.lat = request.POST['lat']
    PublicPost.lng = request.POST['lng']

    PublicPost.save()
    return render(request,"main_friends.html")
  else:
    return render(request,"index.html")