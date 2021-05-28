from django.shortcuts import render

# Create your views here.
def index(request):
  return render(request, 'index.html')

def main_public(request):
  return render(request,'main_public.html')