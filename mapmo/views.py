from django.shortcuts import render
from .models import Public, Friends, Private

# Create your views here.
def index(request):
  return render(request, 'index.html')

def choice(request):
  return render(request, 'choice.html')

# 위치정보와 홈페이지 정보 받아오기
def main_public(request):
  locations=Public.objects.all()
  locations=[location.get_latlng() for location in locations]
  return render(request, 'main_public.html',{'locations':locations})

def main_friends(request):
  locations=Friends.objects.all()
  locations=[location.get_latlng() for location in locations]
  return render(request, 'main_friends.html',{'locations':locations})

def main_private(request):
  locations=Private.objects.all()
  locations=[location.get_latlng() for location in locations]
  return render(request, 'main_private.html',{'locations':locations})

# 글쓰기 기능 구현
def write_public(request):
  if request.method == 'POST':
    PublicPost = Public()
    PublicPost.name = request.POST['name']
    PublicPost.title = request.POST['title']
    if request.FILES.get('img') is not None:
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
    FriendsPost = Friends()
    FriendsPost.title = request.POST['title']
    if request.FILES.get('img') is not None:
      FriendsPost.img = request.FILES['img']
    FriendsPost.body = request.POST['body']
    FriendsPost.lat = request.POST['lat']
    FriendsPost.lng = request.POST['lng']
    FriendsPost.save()
    return render(request,"main_friends.html")
  else:
    return render(request,"index.html")

def write_private(request):
  if request.method == 'POST':
    PrivatePost = Private()
    PrivatePost.title = request.POST['title']
    if request.FILES.get('img') is not None:
      PrivatePost.img = request.FILES['img']
    PrivatePost.body = request.POST['body']
    PrivatePost.lat = request.POST['lat']
    PrivatePost.lng = request.POST['lng']
    PrivatePost.save()
    return render(request,"main_private.html")
  else:
    return render(request,"index.html")