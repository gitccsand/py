Python 3.4.3 (v3.4.3:9b73f1c3e601, Feb 24 2015, 22:43:06) [MSC v.1600 32 bit (Intel)] on win32
Type "copyright", "credits" or "license()" for more information.
>>> der Student(object):
	
SyntaxError: invalid syntax
>>> def Student(object):
	__slots__=('name','age')

	
>>> s=Student()
Traceback (most recent call last):
  File "<pyshell#4>", line 1, in <module>
    s=Student()
TypeError: Student() missing 1 required positional argument: 'object'
>>> def Student(object):
	__slots__=('name','age')
	def __init__(self):
		pass

	
>>> s=Student()
Traceback (most recent call last):
  File "<pyshell#9>", line 1, in <module>
    s=Student()
TypeError: Student() missing 1 required positional argument: 'object'
>>> class Student(object):
	__slots__=('name','age')
	def __init__(self):
		pass

	
>>> class Student(object):
	__slots__=('name','age')

	
>>> s=Student()
>>> s.name='lhw'
>>> s.name
'lhw'
>>> s.score=234
Traceback (most recent call last):
  File "<pyshell#17>", line 1, in <module>
    s.score=234
AttributeError: 'Student' object has no attribute 'score'
>>> def get_age(self):
	return self.age

>>> import types
>>> s.set_age=MethodType(get_age,s)
Traceback (most recent call last):
  File "<pyshell#22>", line 1, in <module>
    s.set_age=MethodType(get_age,s)
NameError: name 'MethodType' is not defined
>>> from types import MethodType
>>> def set_age(self,age):
	sefl.age=age

	
>>> s.set_age=MethodType(set_age,s)
Traceback (most recent call last):
  File "<pyshell#27>", line 1, in <module>
    s.set_age=MethodType(set_age,s)
AttributeError: 'Student' object has no attribute 'set_age'
>>> s.age=9
>>> s.set_age=MethodType(set_age,s)
Traceback (most recent call last):
  File "<pyshell#29>", line 1, in <module>
    s.set_age=MethodType(set_age,s)
AttributeError: 'Student' object has no attribute 'set_age'
>>> class Student(object):
	pass

>>> s=Student()
>>> s.name='lhw'
>>> s.name
'lhw'
>>> s.age
Traceback (most recent call last):
  File "<pyshell#35>", line 1, in <module>
    s.age
AttributeError: 'Student' object has no attribute 'age'
>>> s.set_age=MethodType(set_age,s)
>>> s.set_age(123)
Traceback (most recent call last):
  File "<pyshell#37>", line 1, in <module>
    s.set_age(123)
  File "<pyshell#26>", line 2, in set_age
    sefl.age=age
NameError: name 'sefl' is not defined
>>> s=Student()
>>> s.set_age(234)
Traceback (most recent call last):
  File "<pyshell#39>", line 1, in <module>
    s.set_age(234)
AttributeError: 'Student' object has no attribute 'set_age'
>>> def set_age(self,age):
	self.age=age

	
>>> s.set_age=MethodType(set_age,s)
>>> s.set_age(23)
>>> s.age
23
>>> def set_name(self,name):
	self.name=name

	
>>> Student.set_name=MethodType(set_name,Student)
>>> s.set_name('lwh')
>>> s.name
'lwh'
>>> ================================ RESTART ================================
>>> class Student(object):
	__slots__=('name','age')

	
>>> class Student(object):
	pass

>>> s=Student()
>>> def set_age(self,age):
	sefl.age=age

	
>>> s2=Student()
>>> s.set_age=MethodType(set_age,s)
Traceback (most recent call last):
  File "<pyshell#59>", line 1, in <module>
    s.set_age=MethodType(set_age,s)
NameError: name 'MethodType' is not defined
>>> from types import MethodType
>>> s.set_age=MethodType(set_age,s)
>>> s.set_age(32)
Traceback (most recent call last):
  File "<pyshell#62>", line 1, in <module>
    s.set_age(32)
  File "<pyshell#57>", line 2, in set_age
    sefl.age=age
NameError: name 'sefl' is not defined
>>> ================================ RESTART ================================
>>> class Student(object):
	pass

>>> def set_age(self,age):
	self.age=age

	
>>> s=Student()
>>> from types import MethodType
>>> s.set_age=MethodType(set_age,s)
>>> ================================ RESTART ================================
>>> class Student(object):
	pass

>>> def set_age(self,age):
	self.age=age

	
>>> s=Student()
>>> s1=Student()
>>> from types import MethodType
>>> s.set_age=MethodType(set_age,s)
>>> s.set_age(44)
>>> s.age
44
>>> s1.set_age(4)
Traceback (most recent call last):
  File "<pyshell#80>", line 1, in <module>
    s1.set_age(4)
AttributeError: 'Student' object has no attribute 'set_age'
>>> s1.age
Traceback (most recent call last):
  File "<pyshell#81>", line 1, in <module>
    s1.age
AttributeError: 'Student' object has no attribute 'age'
>>> Student.set_age=MethodType(set_age,Student)
>>> s1.set_age(34)
>>> s1.age
34
>>> s.age
44
>>> 
