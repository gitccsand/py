Python 3.4.3 (v3.4.3:9b73f1c3e601, Feb 24 2015, 22:43:06) [MSC v.1600 32 bit (Intel)] on win32
Type "copyright", "credits" or "license()" for more information.
>>> 

>>> import base64
>>> base64.b64encode(b'binary\x00string')
b'YmluYXJ5AHN0cmluZw=='
>>> base64.b64decode(b'YmluYXJ5AHN0cmluZw==')
b'binary\x00string'
>>> base64.b64encode(b'i\xb7\x1d\xfb\xef\xff')
b'abcd++//'
>>> base64.urlsafe_b64encode(b'i\xb7\x1d\xfb\xef\xff')
b'abcd--__'
>>> base64.urlsafe_b64decode(b'abcd--__')
b'i\xb7\x1d\xfb\xef\xff'
>>> len(b'i\xb7\x1d\xfb\xef\xff')
6
>>> b'i\xb7\x1d\xfb\xef\xff'.append(b'=')
Traceback (most recent call last):
  File "<pyshell#9>", line 1, in <module>
    b'i\xb7\x1d\xfb\xef\xff'.append(b'=')
AttributeError: 'bytes' object has no attribute 'append'
>>> b'i\xb7\x1d\xfb\xef\xff'+b'='
b'i\xb7\x1d\xfb\xef\xff='
>>> mod(len(b'i\xb7\x1d\xfb\xef\xff='),4)
Traceback (most recent call last):
  File "<pyshell#11>", line 1, in <module>
    mod(len(b'i\xb7\x1d\xfb\xef\xff='),4)
NameError: name 'mod' is not defined
>>> import math
>>> math.modf(123)
(0.0, 123.0)
>>> for b in b'i\xb7\x1d\xfb\xef\xff=':
	print(b)

	
105
183
29
251
239
255
61
>>> for b in b'i\xb7\x1d\xfb\xef\xff=':



	
KeyboardInterrupt
>>> 16/3
5.333333333333333
>>> base64.b64encode(b'i\xb7\x1d\xfb\xef\xff=')
b'abcd++//PQ=='
>>> ================================ RESTART ================================
>>> 
Traceback (most recent call last):
  File "D:/codeplace/py/b6_safedecode.py", line 20, in <module>
    main()
  File "D:/codeplace/py/b6_safedecode.py", line 15, in main
    x=safe_base64_decode(b'abcd++//PQ')
  File "D:/codeplace/py/b6_safedecode.py", line 12, in safe_base64_decode
    return base64.b64decoe(s)
AttributeError: 'module' object has no attribute 'b64decoe'
>>> ================================ RESTART ================================
>>> 
Pass
>>> ================================ RESTART ================================
>>> 
Traceback (most recent call last):
  File "D:/codeplace/py/b6_safedecode.py", line 22, in <module>
    main()
  File "D:/codeplace/py/b6_safedecode.py", line 15, in main
    x=safe_base64_decode(b'abcd++//PQ')
  File "D:/codeplace/py/b6_safedecode.py", line 10, in safe_base64_decode
    while (len(s)%4)!=0:
NameError: name 's' is not defined
>>> ================================ RESTART ================================
>>> 
Pass
>>> base64.b64encode(b'abdc')
b'YWJkYw=='
>>> 
