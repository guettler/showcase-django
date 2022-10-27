from django.contrib import admin
from django.urls import include, path, re_path
from . import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/v1/images/', include('images.urls')),
    re_path(r'', views.catchall),
]
