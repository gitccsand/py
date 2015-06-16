Python 2.7.9 (default, Dec 10 2014, 12:24:55) [MSC v.1500 32 bit (Intel)] on win32
Type "copyright", "credits" or "license()" for more information.
>>> def log(func):
	def wrapper(*args,**kw):
		print('call %s()' % func.__name__)
		return func(*args,**kw)
	return wrapper

>>> @log
def now():
	print('20150615')

	
>>> now()
call now()
20150615
>>> 

>>> print(input())
alskjdf

Traceback (most recent call last):
  File "<pyshell#12>", line 1, in <module>
    print(input())
  File "<string>", line 1, in <module>
NameError: name 'alskjdf' is not defined
>>> print(input())
12
12
>>> print(input(),'+',input,'=')
12
(12, '+', <built-in function input>, '=')
>>> print(input(),'+',input(),'=')
12
23
(12, '+', 23, '=')
>>> print(input()+input()=)
SyntaxError: invalid syntax
>>> a=input('input a number:')
input a number:

Traceback (most recent call last):
  File "<pyshell#17>", line 1, in <module>
    a=input('input a number:')
  File "<string>", line 0
    
    ^
SyntaxError: unexpected EOF while parsing
>>> def fn():
	a=input('input a number:')
	b=input('input a number:')
	print(a,'+',b,'=',a+b)

	
>>> fn()
input a number:12
input a number:23
(12, '+', 23, '=', 35)
>>> def fn():
	a=input('input a number:')
	b=input('input a number:')
	print(a'+'b'=',a+b)
	
SyntaxError: invalid syntax
>>> def fn():
	a=input('input a number:')
	b=input('input a number:')
	print(a+'+'+b+'=',a+b)

	
>>> fn()
input a number:23
input a number:45

Traceback (most recent call last):
  File "<pyshell#27>", line 1, in <module>
    fn()
  File "<pyshell#26>", line 4, in fn
    print(a+'+'+b+'=',a+b)
TypeError: unsupported operand type(s) for +: 'int' and 'str'
>>> def fn():
	a=input('input a number:')
	b=input('input a number:')
	print('%d+%d=%d' %(a,b,a+b))

	
>>> fn()
input a number:23
input a number:54
23+54=77
>>> 
>>> def log(text):
	def decorator(func):
		def wrapper(*args,**kw):
			print('%s %s():' %(text,func.__name__))
			return func(*args,**kw)
		return wrapper
	return decorator

>>> @log('excecute')
def now():
	print('20150615')

	
>>> now()
excecute now():
20150615
>>> now.__name__
'wrapper'
>>> import functools
>>> def log(func):
	@functools.wraps(func)
	def wrapper(*args,**kw):
		print('call %s()' % func.__name__)
		return func(*args,**kw)
	return wrapper

>>> @log
def now()
SyntaxError: invalid syntax
>>> @log
def now():
	print('20150615')

	
>>> n=now()
call now()
20150615
>>> n()

Traceback (most recent call last):
  File "<pyshell#61>", line 1, in <module>
    n()
TypeError: 'NoneType' object is not callable
>>> def log(text)"
SyntaxError: EOL while scanning string literal
>>> def log(text):
	def decorator(func):
		@functools.wrap(func)
		def wrapper(*arg,**kw):
			print('%s %s()' %(text,func.__name__))
			return func(*arg,**kw)
		return wrapper
	return decorator

>>> @log('execute')
def now():
	print('20150610')

	

Traceback (most recent call last):
  File "<pyshell#74>", line 1, in <module>
    @log('execute')
  File "<pyshell#70>", line 3, in decorator
    @functools.wrap(func)
AttributeError: 'module' object has no attribute 'wrap'
>>> def log(text):
	def decorator(func):
		@functools.wraps(func)
		def wrapper(*arg,**kw):
			print('%s %s()' %(text,func.__name__))
			return func(*arg,**kw)
		return wrapper
	return decorator

>>>  @log('execute')
def now():
	print('20150610')
	
  File "<pyshell#77>", line 1
    @log('execute')
    ^
IndentationError: unexpected indent
>>> @log('execute')
def now():
	print('20150610')

	
>>> now()
execute now()
20150610
>>> n=now()
execute now()
20150610
>>> now.__na

Traceback (most recent call last):
  File "<pyshell#82>", line 1, in <module>
    now.__na
AttributeError: 'function' object has no attribute '__na'
>>> now.__name__
'now'
>>> 
>>> 
>>> def log(text):
	def wrapper(*args,**kw):
		print('%s %s()'%(text,func.__name__))
		return func(*args,**kw)
	return wrapper

>>> @log('exe')
def now():
	print('20150610')

	

Traceback (most recent call last):
  File "<pyshell#95>", line 1, in <module>
    @log('exe')
  File "<pyshell#91>", line 3, in wrapper
    print('%s %s()'%(text,func.__name__))
NameError: global name 'func' is not defined
>>> def log(text):
	def decorator(func):
		def wrapper(*args,**kw):
			print('%s %s()'%(text,func.__name__))
			return func(*args,**kw)
		return wrapper
	return decorator

>>> @log('exe')
def now():
	print('20150610')

	
>>> now()
exe now()
20150610
>>> now.__name__
'wrapper'
>>> def log(func):
	def wrapper(*args,**kw):
		print('running $s()'%(func.__name__))
		return func(*args,**kw)
	return wrapper

>>> @log
def now(a,b):
	for i in a:
		print(i+b)

		
>>> now(range(1,10),20)

Traceback (most recent call last):
  File "<pyshell#114>", line 1, in <module>
    now(range(1,10),20)
  File "<pyshell#108>", line 3, in wrapper
    print('running $s()'%(func.__name__))
TypeError: not all arguments converted during string formatting
>>> now()

Traceback (most recent call last):
  File "<pyshell#115>", line 1, in <module>
    now()
  File "<pyshell#108>", line 3, in wrapper
    print('running $s()'%(func.__name__))
TypeError: not all arguments converted during string formatting
>>> def log(func):
	def wrapper(*args,**kw):
		print('running $s()'% func.__name__)
		return func(*args,**kw)
	return wrapper

>>> @log
def now(a,b):
	print(a+b)

	
>>> now(3,5)

Traceback (most recent call last):
  File "<pyshell#121>", line 1, in <module>
    now(3,5)
  File "<pyshell#116>", line 3, in wrapper
    print('running $s()'% func.__name__)
TypeError: not all arguments converted during string formatting
>>> @log
def now():
	print('asdf')

	
>>> now()

Traceback (most recent call last):
  File "<pyshell#126>", line 1, in <module>
    now()
  File "<pyshell#116>", line 3, in wrapper
    print('running $s()'% func.__name__)
TypeError: not all arguments converted during string formatting
>>> def log(func):
	def wrapper(*args,**kw):
		print('call %s()' % func.__name__)
		return func(*args,**kw)
	return wrapper

>>> @log
def now():
	print('asdf')

	
>>> now()
call now()
asdf
>>> @log
def cal(a,b):
	print(a+b)

	
>>> now(12,43)
call now()

Traceback (most recent call last):
  File "<pyshell#138>", line 1, in <module>
    now(12,43)
  File "<pyshell#128>", line 4, in wrapper
    return func(*args,**kw)
TypeError: now() takes no arguments (2 given)
>>> cal(12,34)
call cal()
46
>>> @log
def cal(L,add):
	for i in L:
		print(i+add)

		
>>> cal(range(1,10),5)
call cal()
6
7
8
9
10
11
12
13
14
>>> @log
def cal(a):
	print (a)

	
>>> cal('asdf')
call cal()
asdf
>>> @log
def cal(x,y,z)
SyntaxError: invalid syntax
>>> @log
def cal(x,y,z):
	print(x+y+z)

	
>>> cal(12,34,54)
call cal()
100
>>> 
