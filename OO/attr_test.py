Python 2.7.9 (default, Dec 10 2014, 12:24:55) [MSC v.1500 32 bit (Intel)] on win32
Type "copyright", "credits" or "license()" for more information.
>>> ================================ RESTART ================================
>>> 
>>> tom = student('tom',13,70)
>>> lisa = student('lisa',14,90)
>>> tom.age=8
>>> tom.age
8
>>> lisa.age
14
>>> tom.age
8
>>> lisa.age
14
>>> lisa.score
90
>>> tom.tittle='M'
>>> lisa.tittle

Traceback (most recent call last):
  File "<pyshell#9>", line 1, in <module>
    lisa.tittle
AttributeError: 'student' object has no attribute 'tittle'
>>> 
