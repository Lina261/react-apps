from django.urls import path

from api.views import EmployeeList, DepartmentList, EmployeeView, VacationView

urlpatterns = [
    path('employee', EmployeeList.as_view()),
    path('employee/<int:pk>/', EmployeeView.as_view()),
    path('department', DepartmentList.as_view()),
    path('department/<int:pk>/', DepartmentList.as_view()),
    path('vacations/<int:pk>/', VacationView.as_view()),

]
