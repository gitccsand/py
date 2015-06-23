Python 2.7.9 (default, Dec 10 2014, 12:24:55) [MSC v.1500 32 bit (Intel)] on win32
Type "copyright", "credits" or "license()" for more information.
>>> int('1000')
1000
>>> int('1000',base=2)
8
>>> int('1000',2)
8
>>> int('1000',16)
4096
>>> def int2(x):
	return int(x,2)

>>> int2('1000')
8
>>> import functools
>>> int2=functools.partial(int,base=2)
>>> int2('1000')
8
>>> int8=functools.partial(int,base=8)
>>> int8('1000')
512
>>> max(12,34,54)
54
>>> max2=functools.partial(max,10)
>>> max2(2,5,6)
10
>>> 
