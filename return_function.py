Python 2.7.9 (default, Dec 10 2014, 12:24:55) [MSC v.1500 32 bit (Intel)] on win32
Type "copyright", "credits" or "license()" for more information.
>>> def lazy_sum(*args):
    def sum():
        ax = 0
        for n in args:
            ax = ax + n
        return ax
    return sum

>>> 
>>> lazy_sum(1,4,5,23,5)
<function sum at 0x0139E8F0>
>>> f=lazy_sum(123,234,1234,23)
>>> f
<function sum at 0x0139E930>
>>> f()
1614
>>> f=lazy_sum([x for x in range(1,101)])
>>> f()

Traceback (most recent call last):
  File "<pyshell#8>", line 1, in <module>
    f()
  File "<pyshell#1>", line 5, in sum
    ax = ax + n
TypeError: unsupported operand type(s) for +: 'int' and 'list'
>>> def f1():
	fs=[]
	for i in range(1,4):
		def f:
			
SyntaxError: invalid syntax
>>> def square():
	fs=[]
	for i in range(1,4):

		def f():
			return i*i
		fs.append(f)
	return fs

>>> f1,f2,f3=square()
>>> f1()
9
>>> f2()
9
>>> f3()
9
>>> def square1():
	fs=[]
	for i in range(1,4):
		def f(x):
			def g()
			
SyntaxError: invalid syntax
>>> def squ():
	fs=[]
	def f(x):
		def g():
			return x*x
		return g
	for i in range(1,4):
		fs.append(f(i))

		
>>> def squ():
	fs=[]
	def f(x):
		def g():
			return x*x
		return g
	for i in range(1,4):
		fs.append(f(i))
	return fs

>>> f1,f2,f3=squ()
>>> f1()
1
>>> f2()
4
>>> f3()
9
>>> f=lamda x: x*x*x
SyntaxError: invalid syntax
>>> f=lambda x: x*(x+1)
>>> f()

Traceback (most recent call last):
  File "<pyshell#53>", line 1, in <module>
    f()
TypeError: <lambda>() takes exactly 1 argument (0 given)
>>> f(2)
6
>>> list(map(lambda x: x*x,range(1,11)))
[1, 4, 9, 16, 25, 36, 49, 64, 81, 100]
>>> def build():
	return labda x: x+x
SyntaxError: invalid syntax
>>> def build():
	return lambda x: x+x*x

>>> build(10)

Traceback (most recent call last):
  File "<pyshell#61>", line 1, in <module>
    build(10)
TypeError: build() takes no arguments (1 given)
>>> def build(x):
	return lambda x:x+x*x

>>> build(10)
<function <lambda> at 0x0139E8F0>
>>> f=build(10)
>>> f()

Traceback (most recent call last):
  File "<pyshell#67>", line 1, in <module>
    f()
TypeError: <lambda>() takes exactly 1 argument (0 given)
>>> f(10)
110
>>> def build():
	return lambda x: x+x

>>> f=build()
>>> f(10)
20
>>> def build(x,y):
	return lambda x,y:x+y

>>> f=build()

Traceback (most recent call last):
  File "<pyshell#77>", line 1, in <module>
    f=build()
TypeError: build() takes exactly 2 arguments (0 given)
>>> f=build(1,2)
>>> f()

Traceback (most recent call last):
  File "<pyshell#79>", line 1, in <module>
    f()
TypeError: <lambda>() takes exactly 2 arguments (0 given)
>>> f(1,2)
3
>>> 
