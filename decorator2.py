Python 2.7.9 (default, Dec 10 2014, 12:24:55) [MSC v.1500 32 bit (Intel)] on win32
Type "copyright", "credits" or "license()" for more information.
>>> def log(log_arg):
	if hasattr(log_arg,'__call__'):
		func=log_arg
		@functools.wraps(func)
		def wrapper(*args,**kw):
			print('execute %s()'%func.__name__)
			func(*args,**kw)
			print('%s finished'%func.__name__)
		return wrapper		
	else:
		def decorator(func):
			@functools.wraps(func)
			def wrapper(*args,**kw):
				print('%s %s()'%(log_arg,func.__name__))
				func(*args,**kw)
				print('%s() finished'%func.__name__)
			return wrapper
		return decorator

	
>>> @log
def cal(x,y):
	print('%d+%d=%d'%(x,y,x+y))

	

Traceback (most recent call last):
  File "<pyshell#5>", line 1, in <module>
    @log
  File "<pyshell#1>", line 4, in log
    @functools.wraps(func)
NameError: global name 'functools' is not defined
>>> import functools
>>> cal()

Traceback (most recent call last):
  File "<pyshell#7>", line 1, in <module>
    cal()
NameError: name 'cal' is not defined
>>> @log
def cal(x,y):
	print('%d+%d=%d'%(x,y,x+y))

>>> cal(1,2)
execute cal()
1+2=3
cal finished
>>> @log('start')
def cal(x,y):
	print('%d+%d=%d'%(x,y,x+y))

	
>>> cal(1,2)
start cal()
1+2=3
cal() finished
>>> 
