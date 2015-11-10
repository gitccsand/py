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

def co_log(func):
        def deco(*args,**kw):
                def wrapper(*args,**kw):
                        print('start call %s():' % func.__name__)
                        func(*args,**kw)
                        print('end call %s():'%func.__name__)
                        return wrapper
        return deco

@co_log
def now():
        print(time.time())

now()

        

                
