Python 3.4.3 (v3.4.3:9b73f1c3e601, Feb 24 2015, 22:43:06) [MSC v.1600 32 bit (Intel)] on win32
Type "copyright", "credits" or "license()" for more information.
>>> a=0
>>> b=1
>>> a,b=b,a+b
>>> a
1
>>> b
1
>>> a,b=b,a+b
>>> a
1
>>> b
2
>>> a,b=b,a+b
>>> a
2
>>> b
3
>>> a=b
>>> b=a+b
>>> a
3
>>> b
6
>>> a,b=b,a+b
>>> a
6
>>> b
9
>>> 
