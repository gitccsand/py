Python 3.4.3 (v3.4.3:9b73f1c3e601, Feb 24 2015, 22:43:06) [MSC v.1600 32 bit (Intel)] on win32
Type "copyright", "credits" or "license()" for more information.
>>> def def_g(args):
	global __g1=args
	
SyntaxError: invalid syntax
>>> def def_g(args):
	global __g1
	__g1=args

	
>>> def get_g():
	global __g1
	print(g1)

	
>>> def_g('dddddd')
>>> get_g()
Traceback (most recent call last):
  File "<pyshell#10>", line 1, in <module>
    get_g()
  File "<pyshell#8>", line 3, in get_g
    print(g1)
NameError: name 'g1' is not defined
>>> def get_g():
	global __g1
	print(__g1)

	
>>> get_g()
dddddd
>>> 
