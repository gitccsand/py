Python 3.4.3 (v3.4.3:9b73f1c3e601, Feb 24 2015, 22:44:40) [MSC v.1600 64 bit (AMD64)] on win32
Type "copyright", "credits" or "license()" for more information.
>>> from Hello import Hello
Traceback (most recent call last):
  File "<pyshell#0>", line 1, in <module>
    from Hello import Hello
ImportError: No module named 'Hello'
>>> import sys
>>> sys.path.append('D:\workspace\py')
>>> from Hello import Hello
Traceback (most recent call last):
  File "<pyshell#3>", line 1, in <module>
    from Hello import Hello
ImportError: No module named 'Hello'
>>> from Hello1 import Hello
>>> type(Hello)
<class 'type'>
>>> Hello()
<Hello1.Hello object at 0x00000000032F61D0>
>>> h=Hello()
>>> type(h)
<class 'Hello1.Hello'>
>>> type(Hello)
<class 'type'>
>>> def fn(self,name='world'):
	print(name)

	
>>> Hello=type('Hello',(object,),dict(hello=fn))
>>> h=Hello()
>>> h.fn('sdf')
Traceback (most recent call last):
  File "<pyshell#15>", line 1, in <module>
    h.fn('sdf')
AttributeError: 'Hello' object has no attribute 'fn'
>>> h.hello('sdf')
sdf
>>> print(type(Hello))
<class 'type'>
>>> print(type(h))
<class '__main__.Hello'>
>>> h
<__main__.Hello object at 0x00000000032F61D0>
>>> ================================ RESTART ================================
>>> ================================ RESTART ================================
>>> from Hello1 import Hello
Traceback (most recent call last):
  File "<pyshell#20>", line 1, in <module>
    from Hello1 import Hello
ImportError: No module named 'Hello1'
>>> import syssys.path.append('D:\workspace\py')from Hello import Hello
SyntaxError: invalid syntax
>>> import sys
>>> sys.path.append('D:\workspace\py')
>>> from Hello1 import Hello
>>> Hello.__name__
'Hello'
>>> def fn(self,name='world'):
	print(name)

	
>>> Hello_from_type=type('Hello',(object,),dict(hello=fn))
>>> Hello_from_type.__name__
'Hello'
>>> dir(Hello1)
Traceback (most recent call last):
  File "<pyshell#30>", line 1, in <module>
    dir(Hello1)
NameError: name 'Hello1' is not defined
>>> exit()
