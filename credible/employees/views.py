from django.shortcuts import render
from django.http import HttpResponse
from django.template import loader
from django.template import RequestContext

import json
from .models import Profile

# Create your views here.

def index(request):
#    employee_address_list = Profile.objects.get(pk=1)
    template = loader.get_template('template-main.html')


    data = json.dumps({'a': 234234})
    c = RequestContext(request, {'foo': 234234})

#    return HttpResponse(request, 'employees/main.html', context)
    return HttpResponse(template.render(c))
