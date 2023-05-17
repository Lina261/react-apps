# Create your views here.
from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.generics import ListCreateAPIView, \
    RetrieveUpdateDestroyAPIView

from api.models import Department, Employee
from api.serializers import DepartmentSerializer, EmployeeSerializer


class DepartmentViewSet(viewsets.ModelViewSet):
    """
    A simple ViewSet for viewing and editing accounts.
    """
    queryset = Department.objects.all()
    serializer_class = DepartmentSerializer


class EmployeeList(ListCreateAPIView):
    queryset = Employee.objects.all()
    serializer_class = EmployeeSerializer


class DepartmentList(ListCreateAPIView, RetrieveUpdateDestroyAPIView):
    queryset = Department.objects.all()
    serializer_class = DepartmentSerializer


class EmployeeView(RetrieveUpdateDestroyAPIView):
    queryset = Employee.objects.all()
    serializer_class = EmployeeSerializer


class VacationView(APIView):

    def get(self, request, pk):
        employees = Employee.objects.filter(
            department=pk,
            in_vacation=True
        )
        serializer = EmployeeSerializer(employees, many=True)
        return Response(serializer.data)

    def patch(self, request, pk):
        employee = Employee.objects.get(id=request.data.get('id'))
        employee.in_vacation = False
        employee.save()
        return Response(status='200')
