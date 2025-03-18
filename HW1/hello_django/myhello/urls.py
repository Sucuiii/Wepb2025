from django.urls import path
from . import views

urlpatterns = [
    path('courselist/', views.courselist, name='courselist'),  # 取得課程列表
    path('addcourse/', views.addcourse, name='addcourse'),  # 新增課程
]

