Python 3.4.3 (v3.4.3:9b73f1c3e601, Feb 24 2015, 22:43:06) [MSC v.1600 32 bit (Intel)] on win32
Type "copyright", "credits" or "license()" for more information.
>>> class Callable(object):
	def __call__(self):
		print('asdf')

		
>>> ca=C
Traceback (most recent call last):
  File "<pyshell#4>", line 1, in <module>
    ca=C
NameError: name 'C' is not defined
>>> ca=Callable()
>>> ca()
asdf
>>> 

>>> class Chain(object):
	def __getattr__(self,attr):
		if attr=='get':
			return Callable();
		return(self);

	
>>> ch=Chain()
>>> ch.asdfjl.asdjfkl.asjdfk.get()
asdf
>>> class Callable(object):
	def __call__(self,**kw):
		print('key1=%s,key2=%s'%(kw['key1'],kw['key2']))

		
>>> ch=Chain()
>>> ch.asdfj.jdsfl.dsjfl.get(key1='hello',key2='world')
key1=hello,key2=world
>>> 
class Chain(object):
	def __init__(self,attr):
		self._attr=attr
		
	def __getattr__(self,attr):
		if attr=='get':
			return Callable();
		return(self,attr);

	
>>> class Callable(object):
	def __init__(self,attr):
		self._attr=attr
	def __call__(self,**kw):
		print('self._attr:key1=%s,key2=%s'%(kw['key1'],kw['key2']))

		
>>> class Chain(object):
	def __init__(self,attr):
		self._attr=attr

	def __getattr__(self,attr):
		if attr=='get':
			return Callable(self._attr);
		return(self,attr);

	
>>> ch=Chain('')
>>> ch.jsdf.sdf.sdf.sadf.get(key1='123',key2='dddd')
Traceback (most recent call last):
  File "<pyshell#26>", line 1, in <module>
    ch.jsdf.sdf.sdf.sadf.get(key1='123',key2='dddd')
AttributeError: 'tuple' object has no attribute 'sdf'
>>> ch.jsdf.sdf.sdfdaf.sadf.get(key1='123',key2='dddd')
Traceback (most recent call last):
  File "<pyshell#27>", line 1, in <module>
    ch.jsdf.sdf.sdfdaf.sadf.get(key1='123',key2='dddd')
AttributeError: 'tuple' object has no attribute 'sdf'
>>> class Chain(object):
	def __init__(self,attr):
		self._attr=self._attr+'.'+attr

	def __getattr__(self,attr):
		if attr=='get':
			return Callable(self._attr);
		return(self,attr);

	
>>> ch=Chain('')
Traceback (most recent call last):
  File "<pyshell#30>", line 1, in <module>
    ch=Chain('')
  File "<pyshell#29>", line 3, in __init__
    self._attr=self._attr+'.'+attr
TypeError: can only concatenate tuple (not "str") to tuple
>>> class Chain(object):
	def __init__(self,attr):
		self._attr=attr

	def __getattr__(self,attr):
		if attr=='get':
			return Callable(self._attr);
		return(self,'%s.%s'%(self._attr,attr));

	
>>> class Callable(object):
	def __init__(self,attr):
		self._attr=attr
	def __call__(self,**kw):
		print('%s/?key1=%s,key2=%s'%(self._attr,kw['key1'],kw['key2']))

		
>>> ch=Chain('')
>>> ch.asd.uiw.gjew.gkdsa.get(key1='123',key2='sdf')
Traceback (most recent call last):
  File "<pyshell#36>", line 1, in <module>
    ch.asd.uiw.gjew.gkdsa.get(key1='123',key2='sdf')
AttributeError: 'tuple' object has no attribute 'uiw'
>>> class Chain(object):
	def __init__(self,attr):
		self._attr=attr

	def __getattr__(self,attr):
		if attr=='get':
			return Callable(self._attr);
		return Chaint('%s.%s'%(self._attr,attr));

	
>>> ch=Chaint('')
Traceback (most recent call last):
  File "<pyshell#39>", line 1, in <module>
    ch=Chaint('')
NameError: name 'Chaint' is not defined
>>> ch=Chain('')
>>> ch.ajsdfl.1.1.1.djsadlfj.get(key1='123',key2='asdf')
SyntaxError: invalid syntax
>>> ch.ajsdfl.asd.asd.asd.djsadlfj.get(key1='123',key2='asdf')
Traceback (most recent call last):
  File "<pyshell#42>", line 1, in <module>
    ch.ajsdfl.asd.asd.asd.djsadlfj.get(key1='123',key2='asdf')
  File "<pyshell#38>", line 8, in __getattr__
    return Chaint('%s.%s'%(self._attr,attr));
NameError: name 'Chaint' is not defined
>>> class Chain(object):
	def __init__(self,attr):
		self._attr=attr

	def __getattr__(self,attr):
		if attr=='get':
			return Callable(self._attr);
		return Chain('%s.%s'%(self._attr,attr));

	
>>> ch=Chain('')
>>> ch.ssd.ssd.sdds.asd.s.get(key1='123',key2='asdf')
.ssd.ssd.sdds.asd.s/?key1=123,key2=asdf
>>> class Chain(object):
	def __init__(self):
		self._attr=None
		
	def __init__(self,attr):
		self._attr=attr

	def __getattr__(self,attr):
		if attr=='get':
			return Callable(self._attr);
		if self._attr==None:
			return Chain(attr));
		else:		return Chain('%s.%s'%(self._attr,attr));
		
SyntaxError: invalid syntax
>>> class Chain(object):
	def __init__(self):
		self._attr=None

	def __init__(self,attr):
		self._attr=attr

	def __getattr__(self,attr):
		if attr=='get':
			return Callable(self._attr);
		if self._attr==None:
			return Chain(attr))
		else:return Chain('%s.%s'%(self._attr,attr))
		
SyntaxError: invalid syntax
>>> class Chain(object):
	def __init__(self):
		self._attr=None

	def __init__(self,attr):
		self._attr=attr

	def __getattr__(self,attr):
		if attr=='get':
			return Callable(self._attr);
		if self._attr==None:
			return Chain(attr)
		else:
			return Chain('%s.%s'%(self._attr,attr))

		
>>> ch=Chain()
Traceback (most recent call last):
  File "<pyshell#52>", line 1, in <module>
    ch=Chain()
TypeError: __init__() missing 1 required positional argument: 'attr'
>>> ch=Chain(None)
>>> ch.asdf.asdjflsa.dsf.get(key1='123',key2='sdfa')
asdf.asdjflsa.dsf/?key1=123,key2=sdfa
>>> class Chain(object):

	def __init__(self,attr):
		self._attr=attr

	def __getattr__(self,attr):
		if attr=='get':
			return Callable(self._attr);
		if self._attr==None:
			return Chain(attr)
		else:
			return Chain('%s.%s'%(self._attr,attr))

		
>>> ch=Chain(None)
>>> ch.asd.sdf.sdf.wjkl.get(key1='234',key2='asdf')
asd.sdf.sdf.wjkl/?key1=234,key2=asdf
>>> 
class Callable(object):
	def __init__(self,attr):
		self._attr=attr
	def __call__(self,**kw):
		print('%s/?key1=%s,key2=%s'%(self._attr,kw['key1'],kw['key2']))

		
>>> ch=Chain(None)
>>> ch.asd.sdf.sdf.wjkl.get(key1='234',key2='asdf')
asd.sdf.sdf.wjkl/?key1=234,key2=asdf
>>> class Chain(object):

	def __init__(self,attr):
		self._attr=attr

	def __getattr__(self,attr):
		if attr=='get':
			return Callable(self._attr);
		if self._attr==None:
			return Chain(attr)
		else:
			return Chain('%s.%s'%(self._attr,attr))

		
>>> class Callable(object):
	def __init__(self,attr):
		self._attr=attr
	def __call__(self,**kw):
		print('%s/?key1=%s,key2=%s'%(self._attr,kw['key1'],kw['key2']))

		
>>> ch=Chain(None)
>>> ch.asd.sdf.sdf.wjkl.get(key1='234',key2='asdf')
asd.sdf.sdf.wjkl/?key1=234,key2=asdf
>>> 
class Chain(object):

	def __init__(self,attr):
		self._attr=attr

	def __getattr__(self,attr):
		if attr=='get':
			return Callable(self._attr);
		if self._attr==None:
			return Chain(attr)
		else:
			return Chain('%s.%s'%(self._attr,attr))

		
>>> class Callable(object):
	def __init__(self,attr):
		self._attr=attr
	def __call__(self,**kw):
		args=[]
		for k,v in kw:
			args.append('%s=%s'%(k,v))
		print('%s%s'%(self._attr,'&'.join(args)))

		
>>> ch=Chain(None)
>>> ch.asd.sdf.sdf.wjkl.get(code='234',loc='asdf')
Traceback (most recent call last):
  File "<pyshell#75>", line 1, in <module>
    ch.asd.sdf.sdf.wjkl.get(code='234',loc='asdf')
  File "<pyshell#73>", line 6, in __call__
    for k,v in kw:
ValueError: too many values to unpack (expected 2)
>>> class Callable(object):
	def __init__(self,attr):
		self._attr=attr
	def __call__(self,**kw):
		args=[]
		for k,v in kw.iteritems():
			args.append('%s=%s'%(k,v))
		print('%s%s'%(self._attr,'&'.join(args)))

		
>>> ch=Chain(None)
>>> ch.asd.sdf.sdf.wjkl.get(code='234',loc='asdf')
Traceback (most recent call last):
  File "<pyshell#79>", line 1, in <module>
    ch.asd.sdf.sdf.wjkl.get(code='234',loc='asdf')
  File "<pyshell#77>", line 6, in __call__
    for k,v in kw.iteritems():
AttributeError: 'dict' object has no attribute 'iteritems'
>>> class Callable(object):
	def __init__(self,attr):
		self._attr=attr
	def __call__(self,**kw):
		args=[]
		for k,v in kw.items():
			args.append('%s=%s'%(k,v))
		print('%s%s'%(self._attr,'&'.join(args)))

		
>>> ch=Chain(None)
>>> ch.asd.sdf.sdf.wjkl.get(code='234',loc='asdf')
asd.sdf.sdf.wjklloc=asdf&code=234
>>> class Callable(object):
	def __init__(self,attr):
		self._attr=attr
	def __call__(self,**kw):
		args=[]
		for k,v in kw.items():
			args.append('%s=%s'%(k,v))
		print('%s?%s'%(self._attr,'&'.join(args)))

		
>>> ch=Chain(None)
>>> ch.asd.sdf.sdf.wjkl.get(code='234',loc='asdf')
asd.sdf.sdf.wjkl?loc=asdf&code=234
>>> 
