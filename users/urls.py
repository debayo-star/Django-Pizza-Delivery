from django.urls import path
from . import views
from django.conf.urls.static import static

app_name = 'users'

urlpatterns = [
    path('register/', views.SignUpView.as_view(), name='register'),
    path('login/', views.MyLoginView.as_view(), name='login'),
    path('logout/', views.logout_view, name='logout'),
]
