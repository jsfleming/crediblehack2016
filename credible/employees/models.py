from __future__ import unicode_literals

from django.db import models

# Create your models here.

class Profile(models.Model):
    AddressLine1 = models.CharField(max_length=200, null=True)
    AddressLine2 = models.CharField(max_length=200, null=True)
    City = models.CharField(max_length=200, null=True)
    EmergencyPhone = models.CharField(max_length=200, null=True)
    EmployeeId = models.IntegerField(null=True)
    EmployeeImage = models.CharField(max_length=4096, null=True)
    Name = models.CharField(max_length=200, null=True)
    OfficePhone = models.CharField(max_length=200, null=True)
    State = models.CharField(max_length=2, null=True)
    Title = models.CharField(max_length=200, null=True)
    Zip = models.CharField(max_length=10, null=True)

class Schedules(models.Model):
    DateAndTimePlanned = models.DateTimeField(null=True)
    clientId = models.IntegerField(null=True)
    datePlanned = models.DateTimeField(null=True)
    duration = models.IntegerField(null=True)
    employeeId = models.IntegerField(null=True)
    formGroupId = models.IntegerField(null=True)
    groupId = models.IntegerField(null=True)
    locationCode = models.CharField(max_length=200, null=True)
    locationDescription = models.CharField(max_length=200, null=True)
    locationId = models.IntegerField(null=True)
    note = models.CharField(max_length=200, null=True)
    plannerGroupId = models.IntegerField(null=True)
    plannerId = models.IntegerField(null=True)
    programCode = models.CharField(max_length=200, null=True)
    programDescription = models.CharField(max_length=200, null=True)
    programId = models.IntegerField(null=True)
    timePlanned = models.DateTimeField(null=True)
    visitStatus = models.CharField(max_length=200, null=True)
    visitTypeDescription = models.CharField(max_length=200, null=True)
    visitTypeFormId = models.IntegerField(null=True)
    visitTypeId = models.IntegerField(null=True)
    visitTypeLabel = models.CharField(max_length=200, null=True)
    weekOfTime = models.DateTimeField(null=True)
