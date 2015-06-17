Python 2.7.9 (default, Dec 10 2014, 12:24:55) [MSC v.1500 32 bit (Intel)] on win32
Type "copyright", "credits" or "license()" for more information.
>>> type(123)
<type 'int'>
>>> type('sdf')
<type 'str'>
>>> type(None)
<type 'NoneType'>
>>> type(abs)
<type 'builtin_function_or_method'>
>>> class Animal(object):
	pass

>>> a=Animal()
>>> type(a)
<class '__main__.Animal'>
>>> type(a)==Animal
True
>>> type(123)=int
SyntaxError: can't assign to function call
>>> type(123)==int
True
>>> type(123)==int
True
>>> type(123)==int
True
>>> class Animal(object):
	pass

>>> type('234')==type('sdf')
True
>>> import types
>>> def fn():
	pass

>>> type(fn)
<type 'function'>
>>> type(fn)==function

Traceback (most recent call last):
  File "<pyshell#22>", line 1, in <module>
    type(fn)==function
NameError: name 'function' is not defined
>>> type(fn)==types.Fufunction

Traceback (most recent call last):
  File "<pyshell#23>", line 1, in <module>
    type(fn)==types.Fufunction
AttributeError: 'module' object has no attribute 'Fufunction'
>>> type(fn)==types.Fu

Traceback (most recent call last):
  File "<pyshell#24>", line 1, in <module>
    type(fn)==types.Fu
AttributeError: 'module' object has no attribute 'Fu'
>>> type(fn)==types.FunctionType
True
>>> type(abs)==types.BuiltinFunctionType
True
>>> type((x for x in range(10)))==types.GeneratorType
True
>>> type([x for x in range(10]))==types.GeneratorType
SyntaxError: invalid syntax
>>> type([x for x in range(10)])==types.GeneratorType
False
>>> type([x for x in range(10)])==list
True
>>> class Dog(Animal):
	pass

>>> class Husky(Dog):
	pass

>>> a= Animal()
>>> d=Dog()
>>> h=Husky()
>>> isinstance(h,Husky)
True
>>> isinstance(h,Dog)
True
>>> isinstance(h,Animal)
True
>>> isinstance(d,Husky)
False
>>> isinstance('a',str)
True
>>> isinstance(b'a',bytes)
True
>>> dir('abc')
['__add__', '__class__', '__contains__', '__delattr__', '__doc__', '__eq__', '__format__', '__ge__', '__getattribute__', '__getitem__', '__getnewargs__', '__getslice__', '__gt__', '__hash__', '__init__', '__le__', '__len__', '__lt__', '__mod__', '__mul__', '__ne__', '__new__', '__reduce__', '__reduce_ex__', '__repr__', '__rmod__', '__rmul__', '__setattr__', '__sizeof__', '__str__', '__subclasshook__', '_formatter_field_name_split', '_formatter_parser', 'capitalize', 'center', 'count', 'decode', 'encode', 'endswith', 'expandtabs', 'find', 'format', 'index', 'isalnum', 'isalpha', 'isdigit', 'islower', 'isspace', 'istitle', 'isupper', 'join', 'ljust', 'lower', 'lstrip', 'partition', 'replace', 'rfind', 'rindex', 'rjust', 'rpartition', 'rsplit', 'rstrip', 'split', 'splitlines', 'startswith', 'strip', 'swapcase', 'title', 'translate', 'upper', 'zfill']
>>> abc.__len__()

Traceback (most recent call last):
  File "<pyshell#56>", line 1, in <module>
    abc.__len__()
NameError: name 'abc' is not defined
>>> 'abc'.__len__()
3
>>> dir(123)
['__abs__', '__add__', '__and__', '__class__', '__cmp__', '__coerce__', '__delattr__', '__div__', '__divmod__', '__doc__', '__float__', '__floordiv__', '__format__', '__getattribute__', '__getnewargs__', '__hash__', '__hex__', '__index__', '__init__', '__int__', '__invert__', '__long__', '__lshift__', '__mod__', '__mul__', '__neg__', '__new__', '__nonzero__', '__oct__', '__or__', '__pos__', '__pow__', '__radd__', '__rand__', '__rdiv__', '__rdivmod__', '__reduce__', '__reduce_ex__', '__repr__', '__rfloordiv__', '__rlshift__', '__rmod__', '__rmul__', '__ror__', '__rpow__', '__rrshift__', '__rshift__', '__rsub__', '__rtruediv__', '__rxor__', '__setattr__', '__sizeof__', '__str__', '__sub__', '__subclasshook__', '__truediv__', '__trunc__', '__xor__', 'bit_length', 'conjugate', 'denominator', 'imag', 'numerator', 'real']
>>> 123.__abs__()
SyntaxError: invalid syntax
>>> 123.__abs__(34)
SyntaxError: invalid syntax
>>> add(123)

Traceback (most recent call last):
  File "<pyshell#61>", line 1, in <module>
    add(123)
NameError: name 'add' is not defined
>>> 123.__add__()
SyntaxError: invalid syntax
>>> 123.__add__
SyntaxError: invalid syntax
>>> 'abc'.__len__()
3
>>> len('abc')
3
>>> class Mydog(objcet):
	def __len__():
		return 100

	

Traceback (most recent call last):
  File "<pyshell#69>", line 1, in <module>
    class Mydog(objcet):
NameError: name 'objcet' is not defined
>>> class Mydog(object):
	def __len__():
		return 100

	
>>> d=Mydog()
>>> len(d)

Traceback (most recent call last):
  File "<pyshell#73>", line 1, in <module>
    len(d)
TypeError: __len__() takes no arguments (1 given)
>>> class Mydog(object):
	def __len__(self):
		return 100

	
>>> d
<__main__.Mydog object at 0x013A56F0>
>>> len(d)

Traceback (most recent call last):
  File "<pyshell#77>", line 1, in <module>
    len(d)
TypeError: __len__() takes no arguments (1 given)
>>> d=Mydog()
>>> len(d)
100
>>> class Myobject(object):
	def __init__(self):
		x=9

		
>>> class Myobject(object):
	def __init__(self):
		self.x=9
	def power(self):
		return self.x*self.x

	
>>> obj=Myobject()
>>> hasattr(obj,'x')
True
>>> obj.x
9
>>> hasattr(obj,'y')
False
>>> setattr(obj,'y')

Traceback (most recent call last):
  File "<pyshell#92>", line 1, in <module>
    setattr(obj,'y')
TypeError: setattr expected 3 arguments, got 2
>>> setattr(obj,'y',12)
>>> hasattr(obj,'y')
True
>>> getattr(obj,'y')
12
>>> obj.y
12
>>> getattr(obj,'z')

Traceback (most recent call last):
  File "<pyshell#97>", line 1, in <module>
    getattr(obj,'z')
AttributeError: 'Myobject' object has no attribute 'z'
>>> getattr(obj,'z',404)
404
>>> hasattr(obj,'z')
False
>>> hasattr(obj,power)

Traceback (most recent call last):
  File "<pyshell#100>", line 1, in <module>
    hasattr(obj,power)
NameError: name 'power' is not defined
>>> hasattr(obj,'power')
True
>>> getattr(obj,'power')
<bound method Myobject.power of <__main__.Myobject object at 0x013A56F0>>
>>> fn=getattr(obj,'power')
>>> fn()
81
>>> fn
<bound method Myobject.power of <__main__.Myobject object at 0x013A56F0>>
>>> sum=obj.x+obj.y
>>> sum
21
>>> sum=getattr(obj,'x')+getattr(obj,'y')
>>> sum
21
>>> 
