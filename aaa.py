Python 2.7.9 (default, Dec 10 2014, 12:24:55) [MSC v.1500 32 bit (Intel)] on win32
Type "copyright", "credits" or "license()" for more information.
>>> m=10
>>> range(m)
[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
>>> for n in range(m):
	print n

	
0
1
2
3
4
5
6
7
8
9
>>> for n in [1:m]:
	
SyntaxError: invalid syntax
>>> for n in range(1:m+1):
	
SyntaxError: invalid syntax
>>> for n in range(1:m):
	
SyntaxError: invalid syntax
>>> range(10)
[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
>>> range(1,10)
[1, 2, 3, 4, 5, 6, 7, 8, 9]
>>> for n in range(1,m+1)
SyntaxError: invalid syntax
>>>  for n in range(1,m+1):
	 
  File "<pyshell#11>", line 1
    for n in range(1,m+1):
    ^
IndentationError: unexpected indent
>>> m
10
>>> for n in range(m):
	l=[1]
	print(l)

	
[1]
[1]
[1]
[1]
[1]
[1]
[1]
[1]
[1]
[1]
>>> for n in range(m):
	l=[1]
	print(l)

	
[1]
[1]
[1]
[1]
[1]
[1]
[1]
[1]
[1]
[1]
>>> for n in range(m):
	l=[1]
	for i in range(n):
		if n=0:
			
SyntaxError: invalid syntax
>>> n=10
>>> if n==10:
	print n

	
10
>>> for n in range(m):
	l=[1]
	for i in range(n):
		if n<3:
			l[i]=1
	print l

	
[1]
[1]

Traceback (most recent call last):
  File "<pyshell#33>", line 5, in <module>
    l[i]=1
IndexError: list assignment index out of range
>>> for n in range(m):
	l=[1]
	for i in range(n):
		if n<3:
			l.append(1)

			
>>> for n in range(m):
	l=[1]
	for i in range(n):
		if n<3:
			l.append(1)
	print(l)

	
[1]
[1, 1]
[1, 1, 1]
[1]
[1]
[1]
[1]
[1]
[1]
[1]
>>> for n in range(m):
	l=[1]
	for i in range(n+1):
		if n<2:
			l.append(1)
		else
		
SyntaxError: invalid syntax
>>> for n in range(m):
	l=[1]
	for i in range(n+1):
		if n<2:
			l.append(1)
		else:

	print(l)
	
  File "<pyshell#45>", line 8
    print(l)
    ^
IndentationError: expected an indented block
>>> 
>>> for n in range(m):
	l=[1]
	for i in range(n+1):
		if n<2:
			l.append(1)
		else:
			n=range(n+1)
	print(l)

	
[1, 1]
[1, 1, 1]

Traceback (most recent call last):
  File "<pyshell#48>", line 7, in <module>
    n=range(n+1)
TypeError: can only concatenate list (not "int") to list
>>> for n in range(m):
	l=[1]
	for i in range(n+1):
		if n<2:
			l.append(1)
		else:
			l=range(n+1)
	print(l)
