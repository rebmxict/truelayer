import os
import sys
import django

path='/home/ubuntu/back-end/backend'

if path not in sys.path:
  sys.path.append(path)

os.environ['DJANGO_SETTINGS_MODULE'] = 'backend.settings'

django.setup()

import django.core.handlers.wsgi
application = django.core.handlers.wsgi.WSGIHandler()