Python 2.7.9 (default, Dec 10 2014, 12:24:55) [MSC v.1500 32 bit (Intel)] on win32
Type "copyright", "credits" or "license()" for more information.
>>> ================================ RESTART ================================
>>> 
bart.name =Bart Simpson
bart.score =59
Bart Simpson: 59
grade of Bart:C
grade of Lisa:B
>>> dir bart
SyntaxError: invalid syntax
>>> dir(bart)
['__class__', '__delattr__', '__dict__', '__doc__', '__format__', '__getattribute__', '__hash__', '__init__', '__module__', '__new__', '__reduce__', '__reduce_ex__', '__repr__', '__setattr__', '__sizeof__', '__str__', '__subclasshook__', '__weakref__', 'get_grade', 'name', 'print_score', 'score']
>>> type(bart)
<class '__main__.Student'>
>>> dir(Student)
['__class__', '__delattr__', '__dict__', '__doc__', '__format__', '__getattribute__', '__hash__', '__init__', '__module__', '__new__', '__reduce__', '__reduce_ex__', '__repr__', '__setattr__', '__sizeof__', '__str__', '__subclasshook__', '__weakref__', 'get_grade', 'print_score']
>>> bart=Student('Bart Simpson',98)
>>> bart.score
98
>>> bart.score=59
>>> bart.score
59
>>> class Student(object):
	def __init__(self,name,score):
		self.__name=name
		self.__score=socre
	def print_score(self):
		print('%s %d'%(self.__name,self.__score))

		
>>> bart=Student('Bart Simpson',98)

Traceback (most recent call last):
  File "<pyshell#15>", line 1, in <module>
    bart=Student('Bart Simpson',98)
  File "<pyshell#14>", line 4, in __init__
    self.__score=socre
NameError: global name 'socre' is not defined
>>> class Student(object):
	def __init__(self,name,score):
		self.__name=name
		self.__score=score
	def print_score(self):
		print('%s %d'%(self.__name,self.__score))

		
>>> bart=Student('Bart Simpson',98)
>>> bart.__name

Traceback (most recent call last):
  File "<pyshell#19>", line 1, in <module>
    bart.__name
AttributeError: 'Student' object has no attribute '__name'
>>> bart._Student__name
'Bart Simpson'
>>> class Student(object):
	def __init__(self,name,score):
		self.__name=name
		self.__score=score
	def print_score(self):
		print('%s %d'%(self.__name,self.__score))
	def get_name(self):
		return self.__name

	
>>> bart=Student('Bart Simpson',98)
>>> bart.get_name()
'Bart Simpson'
>>> 
