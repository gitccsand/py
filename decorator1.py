Python 2.7.9 (default, Dec 10 2014, 12:24:55) [MSC v.1500 32 bit (Intel)] on win32
Type "copyright", "credits" or "license()" for more information.
>>> 
>>> def log(*args):
	def wrapper(func):
		print('%s %s()'%(args,func.__name__))
		return func(*args,**kw)
	return wrapper

>>> @log():
	
SyntaxError: invalid syntax
>>> @log
def now():
	print('sdfsf')

	
>>> now()

Traceback (most recent call last):
  File "<pyshell#12>", line 1, in <module>
    now()
TypeError: wrapper() takes exactly 1 argument (0 given)
>>> @log('asdfad')
def now():
	print('asdfa')

	
('asdfad',) now()

Traceback (most recent call last):
  File "<pyshell#16>", line 1, in <module>
    @log('asdfad')
  File "<pyshell#6>", line 4, in wrapper
    return func(*args,**kw)
NameError: global name 'kw' is not defined
>>> def log():
	def warpper(func):
		print('starting %s()'%func.__name__)
		return func(*args,**kw)
	return warpper

>>> def log(func):
	def warpper(func):
		print('starting %s()'%func.__name__)
		return func(*args,**kw)
	return warpper

>>> @log
def now():
	pring('2343')

	
>>> now
<function warpper at 0x013A5470>
>>> now()

Traceback (most recent call last):
  File "<pyshell#31>", line 1, in <module>
    now()
TypeError: warpper() takes exactly 1 argument (0 given)
>>> now()

Traceback (most recent call last):
  File "<pyshell#32>", line 1, in <module>
    now()
TypeError: warpper() takes exactly 1 argument (0 given)
>>> def log():
	def warpper(*args,**kw):
		print('starting %s()'%func.__name__)
		return func(*args,**kw)
	return warpper

>>> @log
def now():
	print('23423423')

	

Traceback (most recent call last):
  File "<pyshell#38>", line 1, in <module>
    @log
TypeError: log() takes no arguments (1 given)
>>> def log(func):
	def warpper(*args,**kw):
		print('starting %s()'%func.__name__)
		return func(*args,**kw)
	return warpper

>>> 
>>> 
>>> @log
def now():
	print ('sdfa')

	
>>> now()
starting now()
sdfa
>>> def log(func,text='running'):
	def wrapper(*args,**kw):
		print('%s %s()'%(text func.__name__)
		      
SyntaxError: invalid syntax
>>> def log(func,text='running'):
	def wrapper(*args,**kw):
		print('%s %s()'%(text,func.__name__)
		return func(*args,**kw)
		      
SyntaxError: invalid syntax
>>> def log(func,text='running'):
	def wrapper(*args,**kw):
		print('%s %s()'%(text func.__name__))
		
SyntaxError: invalid syntax
>>> def log(func,text='running'):
	def wrapper(*args,**kw):
		print('%s %s()'%(text, func.__name__))
		return func(*args,**kw)
	return wrapper

>>> @log(text='execute')
def now():
	print('2341234')

	

Traceback (most recent call last):
  File "<pyshell#60>", line 1, in <module>
    @log(text='execute')
TypeError: log() takes at least 1 argument (1 given)
>>> @log
def now():
	print('23423')

	
>>> now()
running now()
23423
>>> @log('asdf')
def now()
SyntaxError: invalid syntax
>>> @log('exe')
def now():
	print('234')

	

Traceback (most recent call last):
  File "<pyshell#71>", line 1, in <module>
    @log('exe')
  File "<pyshell#56>", line 3, in wrapper
    print('%s %s()'%(text, func.__name__))
AttributeError: 'str' object has no attribute '__name__'
>>> def log(text='running'):
	def decorator(func):
		def wrapper(*args,**kw):
			print('%s %s()'%(text,func.__name__name))
			return func(**args,**kw)
		
SyntaxError: invalid syntax
>>> def log(text='running'):
	def decorator(func):
		def wrapper(*args,**kw):
			print('%s %s()'%(text,func.__name__name))
			return func(*args,**kw)
		return wrapper
	return decorator

>>> @log('exe')
def now():
	print('123123')

	
>>> now()

Traceback (most recent call last):
  File "<pyshell#85>", line 1, in <module>
    now()
  File "<pyshell#80>", line 4, in wrapper
    print('%s %s()'%(text,func.__name__name))
AttributeError: 'function' object has no attribute '__name__name'
>>> def log(text='running'):
	def decorator(func):
		def wrapper(*args,**kw):
			print('%s %s()'%(text,func.__name__))
			return func(*args,**kw)
		return wrapper
	return decorator

>>> @log('exe')
def now():
	print('123123')

	
>>> now()
exe now()
123123
>>> @log
def now()
SyntaxError: invalid syntax
>>> @log
def now():
	print('234234')

	
>>> now()

Traceback (most recent call last):
  File "<pyshell#98>", line 1, in <module>
    now()
TypeError: decorator() takes exactly 1 argument (0 given)
>>> def f(a='sdf'):
	print('asdf')

	
>>> f()
asdf
>>> @log()
def now():
	print('3434')

	
>>> now()
running now()
3434
>>> def log(*arg):
	for x in args:
		if isinstance(x,str):
			else:
				
SyntaxError: invalid syntax
>>> def log(*arg):
	for x in args:
		if isinstance(x,str):
			def decorator(func):
				def wrapper(*args,**kw):
					print('%s %s()'%(x,func.__name__))
					return func(*args,**kw)
				return wrapper
			return decorator
		else:
			def wrapper(*args,**kw):
				print('%s %s()'%(text,x.__name__))
				return x(*args,**kw)
			return wrapper

		
>>> @log
def now():
	print('3124234')

	

Traceback (most recent call last):
  File "<pyshell#119>", line 1, in <module>
    @log
  File "<pyshell#115>", line 2, in log
    for x in args:
NameError: global name 'args' is not defined
>>> def log(*args):
	for x in args:
		if isinstance(x,str):
			def decorator(func):
				def wrapper(*args,**kw):
					print('%s %s()'%(x,func.__name__))
					return func(*args,**kw)
				return wrapper
			return decorator
		else:
			def wrapper(*args,**kw):
				print('%s %s()'%(text,x.__name__))
				return x(*args,**kw)
			return wrapper

		
>>> @log
def now():
	print('234234')

	
>>> now()

Traceback (most recent call last):
  File "<pyshell#126>", line 1, in <module>
    now()
  File "<pyshell#121>", line 12, in wrapper
    print('%s %s()'%(text,x.__name__))
NameError: global name 'text' is not defined
>>> def log(*args):
	for x in args:
		if isinstance(x,str):
			def decorator(func):
				def wrapper(*args,**kw):
					print('%s %s()'%(x,func.__name__))
					return func(*args,**kw)
				return wrapper
			return decorator
		else:
			def wrapper(*args,**kw):
				print('execute %s()'%x.__name__)
				return x(*args,**kw)
			return wrapper

		
>>> @log
def now():
	print('23423')

	
>>> now()
execute now()
23423
>>> @log('starting')
def now():
	print('23423')

	
>>> now()
starting now()
23423
>>> def log(*args):
	for x in args:
		if isinstance(x,str):
			def decorator(func):
				def wrapper(*args,**kw):
					print('%s %s()'%(x,func.__name__))
					func(*args,**kw)
					print('%s() finished')
				return wrapper
			return decorator
		else:
			def wrapper(*args,**kw):
				print('execute %s()'%x.__name__)
				return x(*args,**kw)
			return wrapper

		
>>> @log('start'):
	
SyntaxError: invalid syntax
>>> @log('start')
def now():
	print(123456)

	
>>> now()
start now()
123456
%s() finished
>>> def log(*args):
	for x in args:
		if isinstance(x,str):
			def decorator(func):
				def wrapper(*args,**kw):
					print('%s %s()'%(x,func.__name__))
					func(*args,**kw)
					print('%s() finished'%func.__name__)
				return wrapper
			return decorator
		else:
			def wrapper(*args,**kw):
				print('execute %s()'%x.__name__)
				return x(*args,**kw)
			return wrapper

		
>>> @log('start')
def now():
	print(123456)

	
>>> now()
start now()
123456
now() finished
>>> def log(*args):
	for x in args:
		if isinstance(x,str):
			def decorator(func):
				@functools.wraps(func)
				def wrapper(*args,**kw):
					print('%s %s()'%(x,func.__name__))
					func(*args,**kw)
					print('%s() finished'%func.__name__)
				return wrapper
			return decorator
		else:
			@functools.wraps(func)
			def wrapper(*args,**kw):
				print('execute %s()'%x.__name__)
				x(*args,**kw)
				print('%s finished'%x.__name__)
			return wrapper

		
>>> @log
def now(x,y):
	print('%d+%d=%d'%(x,y,x+y))

	

Traceback (most recent call last):
  File "<pyshell#157>", line 1, in <module>
    @log
  File "<pyshell#153>", line 13, in log
    @functools.wraps(func)
NameError: global name 'functools' is not defined
>>> import functools
>>> now()
start now()
123456
now() finished
>>>  @log
def now(x,y):
	print('%d+%d=%d'%(x,y,x+y))
	
  File "<pyshell#160>", line 1
    @log
    ^
IndentationError: unexpected indent
>>> @log
def now(x,y):
	print('%d+%d=%d'%(x,y,x+y))

	

Traceback (most recent call last):
  File "<pyshell#162>", line 1, in <module>
    @log
  File "<pyshell#153>", line 13, in log
    @functools.wraps(func)
NameError: global name 'func' is not defined
>>> def log(*args):
	for x in args:
		if isinstance(x,str):
			def decorator(func):
				@functools.wraps(func)
				def wrapper(*args,**kw):
					print('%s %s()'%(x,func.__name__))
					func(*args,**kw)
					print('%s() finished'%func.__name__)
				return wrapper
			return decorator
		else:
			@functools.wraps(x)
			def wrapper(*args,**kw):
				print('execute %s()'%x.__name__)
				x(*args,**kw)
				print('%s finished'%x.__name__)
			return wrapper

		
>>> @log
def now(x,y):
	print('%d+%d=%d'%(x,y,x+y))

	
>>> now(234234,234234)
execute now()
234234+234234=468468
now finished
>>> @log('start')
def now(x,y):
	print('%d+%d=%d'%(x,y,x+y))

	
>>> now(234,234)
start now()
234+234=468
now() finished
>>> 
>>> isinstance(now,function)

Traceback (most recent call last):
  File "<pyshell#172>", line 1, in <module>
    isinstance(now,function)
NameError: name 'function' is not defined
>>> def log(log_arg):
	if isinstance(log_arg,str):
		def decorator(func):
			@functools.wraps(func)
			def wrapper(*args,**kw):
				print('%s %s()'%(log_arg,func.__name__))
				func(*args,**kw)
				print('%s() finished'%func.__name__)
			return wrapper
		return decorator
	else:
		func=log_arg
		@functools.wraps(func)
		def wrapper(*args,**kw):
			print('execute %s()'%func.__name__)
			arg(*args,**kw)
			print('%s finished'%func.__name__)
		return wrapper

	
>>> @log('start')
def now(x,y):
	print('%d+%d=%d'%(x,y,x+y))

	
>>> now(10,15)
start now()
10+15=25
now() finished
>>> @log
def now(x,y):
	print('%d+%d=%d'%(x,y,x+y))

	
>>> now(10,15)
execute now()

Traceback (most recent call last):
  File "<pyshell#180>", line 1, in <module>
    now(10,15)
  File "<pyshell#174>", line 16, in wrapper
    arg(*args,**kw)
NameError: global name 'arg' is not defined
>>> def log(log_arg):
	if isinstance(log_arg,str):
		def decorator(func):
			@functools.wraps(func)
			def wrapper(*args,**kw):
				print('%s %s()'%(log_arg,func.__name__))
				func(*args,**kw)
				print('%s() finished'%func.__name__)
			return wrapper
		return decorator
	else:
		func=log_arg
		@functools.wraps(func)
		def wrapper(*args,**kw):
			print('execute %s()'%func.__name__)
			func(*args,**kw)
			print('%s finished'%func.__name__)
		return wrapper

	
>>> @log
def now(x,y):
	print('%d+%d=%d'%(x,y,x+y))

	
>>> now(1,2)
execute now()
1+2=3
now finished
>>> @log('start')
def now(x,y):
	print('%d+%d=%d'%(x,y,x+y))

	
>>> now(1,2)
start now()
1+2=3
now() finished
>>> 
