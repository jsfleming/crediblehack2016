from django.shortcuts import render
from django.http import HttpResponse
from django.template import loader
from django.template import RequestContext
import datetime
import requests
import json
from gettext import lngettext

import json
from .models import Profile
from .models import Schedules
import Generate_Link

# Create your views here.

def index(request):

    template = loader.get_template('template-main.html')


    data = Generate_Link.get_link()
    data2 = json.dumps({'a': 234234})
    c = RequestContext(request, {'map_link': data})

#    return HttpResponse(request, 'employees/main.html', context)
    return HttpResponse(template.render(c))
