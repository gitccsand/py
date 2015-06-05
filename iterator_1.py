Python 2.7.9 (default, Dec 10 2014, 12:24:55) [MSC v.1500 32 bit (Intel)] on win32
Type "copyright", "credits" or "license()" for more information.
>>> from collections import Iterable
>>> isinstance([],Iterable)
True
>>> isinstance({},Iterable)
True
>>> isinstance('abc',Iterable)
True
>>> isinstance((x for x in range(10)),Iterable)
True
>>> isinstance(100,Iterable)
False
>>> from collections import Iterator
>>> isinstance((x for x in range(10)),Iterator)
True
>>> isinstance([],Iterator)
False
>>> isinstance({},Iterator)
False
>>> isinstance('abc',Iterator)
False
>>> isinstance(iter('abc'),Iterator)
True
>>> isinstance(iter([]),Iterator)
True
>>> it = iter([1,2,3,4,5])
>>> it
<listiterator object at 0x00B388F0>
>>> while true:
	try:
		x=next(it)
		print x
	except StopIteration as e:
		print e.value
		break

	

Traceback (most recent call last):
  File "<pyshell#22>", line 1, in <module>
    while true:
NameError: name 'true' is not defined
>>> while True:
	try:
		x=next(it)
		print x
	except StopIteration as e:
		print e.value
		break

	
1
2
3
4
5

Traceback (most recent call last):
  File "<pyshell#24>", line 6, in <module>
    print e.value
AttributeError: 'exceptions.StopIteration' object has no attribute 'value'
>>> def fib(max):
	n, a, b = 0, 0, 1
	while n < max:
        yield b
        a, b = b, a + b
        n = n + 1
	return 'done'
  File "<pyshell#27>", line 4
    yield b
        ^
IndentationError: expected an indented block
>>> def fib(max):
	n, a, b = 0, 0, 1
	while n < max:
		yield b
		a, b = b, a + b
		n = n + 1
	return 'done'
SyntaxError: 'return' with argument inside generator (<pyshell#28>, line 7)
>>> def fib(max):
	n,a,b =0,0,1
	while n<max:
		yield b
		a,b=b,a+b
		n=n+1
	return 'done'
SyntaxError: 'return' with argument inside generator (<pyshell#35>, line 7)
>>> 
