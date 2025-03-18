# from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import api_view
from django.http import JsonResponse
import json
import logging
from .models import Course

logger = logging.getLogger('django')

# ✅ 查詢所有課程 (GET)
@api_view(['GET'])
def courselist(request):
    courses = Course.objects.all().values('id', 'department', 'course_title', 'instructor')
    return JsonResponse(list(courses), safe=False)

# ✅ 新增課程 (POST)
@api_view(['POST'])
def addcourse(request):
    try:
        data = request.data  # Rest Framework 提供的方法，避免手動解析 JSON
        department = data.get('department')
        course_title = data.get('course_title')
        instructor = data.get('instructor')

        if not department or not course_title or not instructor:
            return JsonResponse({'error': '缺少必要欄位'}, status=400)

        Course.objects.create(department=department, course_title=course_title, instructor=instructor)
        return JsonResponse({'message': '課程已新增'}, status=201)

    except Exception as e:
        logger.error(f"Error adding course: {e}")
        return JsonResponse({'error': '內部錯誤'}, status=500)
  # return Response({"data":
  #                  json.dumps(
  #                       list(posts),
  #                       sort_key = True, 
  #                       indent = 1, 
  #                       cls = DjangoJSONEncoder)},
  #                  status=status.HTTP_200_OK)
  