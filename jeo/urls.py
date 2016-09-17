from django.conf.urls import include, url, patterns
from django.contrib.auth.views import login, logout_then_login, logout
from django.conf.urls.static import static
from django.conf import settings
from django.contrib.auth.forms import AuthenticationForm


# from django.contrib.auth import views as auth_views
from jeo.models import *
from jeo import views

urlpatterns = [
    url(r'^$', views.index, name='index'),
]

