import time

def log(func):
	def wrapper(*args,**kw):
		print('start call %s():' % func.__name__)
		func(*args,**kw)
		print('end call %s():'%func.__name__)
	return wrapper

@log
def now():
	print(time.time())


now()
