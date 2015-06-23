Python 3.4.3 (v3.4.3:9b73f1c3e601, Feb 24 2015, 22:43:06) [MSC v.1600 32 bit (Intel)] on win32
Type "copyright", "credits" or "license()" for more information.
>>> dir(object)
['__class__', '__delattr__', '__dir__', '__doc__', '__eq__', '__format__', '__ge__', '__getattribute__', '__gt__', '__hash__', '__init__', '__le__', '__lt__', '__ne__', '__new__', '__reduce__', '__reduce_ex__', '__repr__', '__setattr__', '__sizeof__', '__str__', '__subclasshook__']
>>> class Student(object):
	def _aaa(self):
		print ('aaa')

		
>>> s=Student()
>>> s._aaa()
aaa
>>> class Student(object):
	def _aaa(self):
		print ('aaa')
	def __init__(self,a1,a2):
		self._a1=a1
		self._a2=a2

		
>>> s=Student()
Traceback (most recent call last):
  File "<pyshell#12>", line 1, in <module>
    s=Student()
TypeError: __init__() missing 2 required positional arguments: 'a1' and 'a2'
>>> s=Student(12,34)
>>> s._a1
12
>>> class Student(object):
	def __aaa(self):
		print ('aaa')
	def __init__(self,a1,a2):
		self.__a1=a1
		self.__a2=a2

		
>>> s=Student(12,12)
>>> s.__a1
Traceback (most recent call last):
  File "<pyshell#18>", line 1, in <module>
    s.__a1
AttributeError: 'Student' object has no attribute '__a1'
>>> s.__aaa()
Traceback (most recent call last):
  File "<pyshell#19>", line 1, in <module>
    s.__aaa()
AttributeError: 'Student' object has no attribute '__aaa'
>>> 
