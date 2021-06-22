from django.shortcuts import render

# Create your views here.
def setting_profile(request):
  return render(request, 'setting_profile.html')

def setting_friends(request):
  return render(request, 'setting_friends.html')