
# Create your models here.
from django.db import models

class Course(models.Model):
    department = models.CharField(max_length=100)  # 開課單位
    course_title = models.CharField(max_length=200)  # 課程名稱
    instructor = models.CharField(max_length=100)  # 授課老師

    def __str__(self):
        return f"{self.course_title} ({self.department}) - {self.instructor}"
