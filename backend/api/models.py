from django.db import models


class Department(models.Model):
    name = models.CharField(max_length=50)

    def __str__(self):
        return f'Department {self.name}'


class Employee(models.Model):
    firstname = models.CharField(max_length=20)
    lastname = models.CharField(max_length=20)
    position = models.CharField(max_length=20)
    email = models.EmailField(max_length=20, blank=True, null=True)
    department = models.ForeignKey('Department', on_delete=models.CASCADE)
    in_vacation = models.BooleanField(default=False)
