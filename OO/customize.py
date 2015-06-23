Python 3.4.3 (v3.4.3:9b73f1c3e601, Feb 24 2015, 22:43:06) [MSC v.1600 32 bit (Intel)] on win32
Type "copyright", "credits" or "license()" for more information.
>>> hex(255)
'0xff'
>>> a=object()
>>> dir(object)
['__class__', '__delattr__', '__dir__', '__doc__', '__eq__', '__format__', '__ge__', '__getattribute__', '__gt__', '__hash__', '__init__', '__le__', '__lt__', '__ne__', '__new__', '__reduce__', '__reduce_ex__', '__repr__', '__setattr__', '__sizeof__', '__str__', '__subclasshook__']
>>> 

>>> class Student(object):
	def __init__(self,name):
		self.name=name

		
>>> print(Student('Jackie'))
<__main__.Student object at 0x01337FB0>
>>> class Student(object):
	def __init__(self,name):
		self.name=name

		
>>> class Student(object):
	def __init__(self,name):
		self.name=name
	def __str__(self):
		return('Student object (name:%s)'%self.name)

	
>>> print(Student('Jackie')
      )
Student object (name:Jackie)
>>> Student('Jackie')
<__main__.Student object at 0x01337790>
>>> class Student(object):
	def __init__(self,name):
		self.name=name
	def __str__(self):
		return('Student object (name:%s)'%self.name)
	def __repr__(self):
		return __str__

	
>>> Student('Jackie')
Traceback (most recent call last):
  File "<pyshell#22>", line 1, in <module>
    Student('Jackie')
  File "C:\Python34\lib\idlelib\rpc.py", line 614, in displayhook
    text = repr(value)
  File "<pyshell#21>", line 7, in __repr__
    return __str__
NameError: name '__str__' is not defined
>>> class Student(object):
	def __init__(self,name):
		self.name=name
	def __str__(self):
		return('Student object (name:%s)'%self.name)
	__repr__=__str__

	
>>> Student('Jackie')
Student object (name:Jackie)
>>> class Fib(object):
	def __init__(self):
		self._a,self._b=0,1
	def __iter__(self):
		return self
	def __next__(self):
		self._a,self._b=self._b,self._a+self._b
		if self.a >1000:
			raise StopIteration()
		return self._a

	
>>> for x in Fib():
	print(x)

	
Traceback (most recent call last):
  File "<pyshell#39>", line 1, in <module>
    for x in Fib():
  File "<pyshell#36>", line 8, in __next__
    if self.a >1000:
AttributeError: 'Fib' object has no attribute 'a'
>>> class Fib(object):
	def __init__(self):
		self._a,self._b=0,1
	def __iter__(self):
		return self
	def __next__(self):
		self._a,self._b=self._b,self._a+self._b
		if self._a >1000:
			raise StopIteration()
		return self._a

	
>>> class Fib(object):
	def __init__(self):
		self._a,self._b=0,1
	def __iter__(self):
		return self
	def __next__(self):
		self._a,self._b=self._b,self._a+self._b
		if self._a >10:
			raise StopIteration()
		return self._a

	
>>> for x in Fib():
	print(x)

	
1
1
2
3
5
8
>>> class Fib(object):
	def __init__(self):
		self._a,self._b=0,1
	def __iter__(self):
		return self
	def __next__(self):
		self._a,self._b=self._b,self._a+self._b
		if self._a >100:
			raise StopIteration()
		return self._a

	
>>> 
>>> for x in Fib():
	print(x)

	
1
1
2
3
5
8
13
21
34
55
89
>>> Fib()[5]
Traceback (most recent call last):
  File "<pyshell#51>", line 1, in <module>
    Fib()[5]
TypeError: 'Fib' object does not support indexing
>>> class Fib(object):
	def __init__(self):
		self._a,self._b=0,1
	def __iter__(self):
		return self
	def __next__(self):
		self._a,self._b=self._b,self._a+self._b
		if self._a >100:
			raise StopIteration()
		return self._a
	def __getitem__(sefl,n):
		a,b=1,1
		for x in range(n):
			a,b=b,a+b
		return a

	
>>> f=Fib()
>>> f[0]
1
>>> f[1]
1
>>> f[2]
2
>>> f[3]
3
>>> f[4]
5
>>> f[5]
8
>>> class Fib(object):
	def __init__(self):
		self._a,self._b=0,1
	def __iter__(self):
		return self
	def __next__(self):
		self._a,self._b=self._b,self._a+self._b
		if self._a >100:
			raise StopIteration()
		return self._a
	def __getitem__(sefl,n):
		if isinstance(n,int):
			a,b=1,1
			for x in range(n):
				a,b=b,a+b
			return a
		if isinstance(n,slice):
			start = n.start
			stop = n.stop
			if start==None:
				start=0
			a,b=1,1
			L=[]
			for x in range(stop):
				if x >= start:
					L.append(a)
				a,b=b,a+b
			return L

		
>>> f[5:10]
Traceback (most recent call last):
  File "<pyshell#81>", line 1, in <module>
    f[5:10]
  File "<pyshell#58>", line 13, in __getitem__
    for x in range(n):
TypeError: 'slice' object cannot be interpreted as an integer
>>> f=Fib()
>>> f[5:10]
[8, 13, 21, 34, 55]
>>> f[-10:-5]
[]
>>> range(-5)
range(0, -5)
>>> range(0,-5)
range(0, -5)
>>> range(0,-5)[0]
Traceback (most recent call last):
  File "<pyshell#87>", line 1, in <module>
    range(0,-5)[0]
IndexError: range object index out of range
>>> range(0)
range(0, 0)
>>> range
<class 'range'>
>>> l=range(0)
>>> l
range(0, 0)
>>> l=range(10)
>>> l
range(0, 10)
>>> [-0:-5].start
SyntaxError: invalid syntax
>>> [-10:-5].start
SyntaxError: invalid syntax
>>> dir(Student)
['__class__', '__delattr__', '__dict__', '__dir__', '__doc__', '__eq__', '__format__', '__ge__', '__getattribute__', '__gt__', '__hash__', '__init__', '__le__', '__lt__', '__module__', '__ne__', '__new__', '__reduce__', '__reduce_ex__', '__repr__', '__setattr__', '__sizeof__', '__str__', '__subclasshook__', '__weakref__']
>>> def Student(object):
	def __init__(self):
		self.name='Micheal'

		
>>> def Student(object):
	def __init__(self):
		self.name='Micheal'
	def __getattr__(self,attr):
		if attr=='score':
			return 99

		
>>> s=Student()
Traceback (most recent call last):
  File "<pyshell#106>", line 1, in <module>
    s=Student()
TypeError: Student() missing 1 required positional argument: 'object'
>>> class Student(object):
	def __init__(self):
		self.name='Micheal'
	def __getattr__(self,attr):
		if attr=='score':
			return 99

		
>>> s=Student()
>>> s.score
99
>>> class Student(object):
	def __init__(self):
		self.name='Micheal'
	def __getattr__(self,attr):
		if attr=='score':
			return 99
		raise Attributeerror('Student class has no attribute named:%s'%attr)

	
>>> s=Student()
>>> s.age
Traceback (most recent call last):
  File "<pyshell#115>", line 1, in <module>
    s.age
  File "<pyshell#113>", line 7, in __getattr__
    raise Attributeerror('Student class has no attribute named:%s'%attr)
NameError: name 'Attributeerror' is not defined
>>> class Student(object):
	def __init__(self):
		self.name='Micheal'
	def __getattr__(self,attr):
		if attr=='score':
			return 99
		raise AttributeError('Student class has no attribute named:%s'%attr)

	
>>> s.age
Traceback (most recent call last):
  File "<pyshell#118>", line 1, in <module>
    s.age
  File "<pyshell#113>", line 7, in __getattr__
    raise Attributeerror('Student class has no attribute named:%s'%attr)
NameError: name 'Attributeerror' is not defined
>>> s=Student()
>>> s.age
Traceback (most recent call last):
  File "<pyshell#120>", line 1, in <module>
    s.age
  File "<pyshell#117>", line 7, in __getattr__
    raise AttributeError('Student class has no attribute named:%s'%attr)
AttributeError: Student class has no attribute named:age
>>> s.score
99
>>> class Student(object):
	def __init__(self):
		self.name='Micheal'
	def __getattr__(self,attr):
		if attr=='score':
			return 99
		if attr=='age':
			return 29
		raise AttributeError('Student class has no attribute named:%s'%attr)

	
>>> s=Student()
>>> s.age
29
>>> class Chain(object):
	def __init__(self,path=''):
		self._path=path

		
>>> class Chain(object):
	def __init__(self,path=''):
		self._path=path
	def __getattr__(self,path):
		return Chain('%s%s'%(self._path,path)):
			
SyntaxError: invalid syntax
>>> 
>>> class Chain(object):
	def __init__(self,path=''):
		self._path=path
	def __getattr__(self,path):
		return Chain('%s%s'%(self._path,path))

	
>>> Chain().status.user.timelines.list
<__main__.Chain object at 0x017564D0>
>>> Chain().status.user.timelines.list
<__main__.Chain object at 0x017565D0>
>>> 
