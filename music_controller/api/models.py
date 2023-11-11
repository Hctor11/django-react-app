from django.db import models
import string
import random

def code_generator():
    length = 8
    
    while True:
        code = ''.join(random.choices(string.ascii_uppercase, k=length))
        
        if Room.objects.filter(code=code).count() == 0:
            break


# Create your models here.
"""
Cuando se hace un modelo, lo hacemos a partir de codigo de python y ese codigo se 
traduce a SQL cuando lo ejecutamos, asi solo tenemos que usar codigo de python y no tener que hacer
nada en SQL
"""
class Room(models.Model):
    code = models.CharField(max_length=10, default="", unique=True)
    host = models.CharField(max_length=50, unique=True)
    guest_can_pause = models.BooleanField(null=False,default=False)
    votes_to_skip = models.IntegerField(null=False,default=1)
    created_at = models.DateTimeField(auto_now_add=True)
    
     