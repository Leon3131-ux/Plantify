from django.contrib.auth import views as auth_views
from django.conf.urls import url, include
from rest_framework import routers
from users import views as user_views

router = routers.DefaultRouter()
router.register(r'users', user_views.UserViewSet)


urlpatterns = [
    url(r'^', include(router.urls)),
    url(r'^api-auth/', include('rest_framework.urls', namespace='rest_framework1')),
]
