from django.shortcuts import render
from django.http import HttpResponse
from .models import Allergies

# Create your views here.

def index(request):
    allergies_list = Allergies.objects.all()
    output = '## '.join([str(a.clientAllergyId) + ', ' + str(a.clientId) + ', ' + str(a.allergyName) + ', ' + str(a.additionalText) + ', ' + str(a.reaction) + ', ' + str(a.severity) + ', ' + str(a.createdByEmployeeId) + ', ' + str(a.updatedByEmployeeId) + ', ' + str(a.isDiscontinued) + ', ' + str(a.discontinuedReason) + ', ' + str(a.dateDiscontinued) + ', ' + str(a.discontinuedByEmployeeId) + ', ' + str(a.fdbConceptId) + ', ' + str(a.fdbConceptTypeId) + ', ' + str(a.isMedAllergy) + ', ' + str(a.source) + ', ' + str(a.rxNormId) + ', ' + str(a.isReconciledCDA) + ', ' + str(a.dateCreated) + ', ' + str(a.dateUpdated) + ', ' + str(a.state) + ', ' + str(a.date) for a in allergies_list])
    return HttpResponse(output)
