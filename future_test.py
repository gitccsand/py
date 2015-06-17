Python 2.7.9 (default, Dec 10 2014, 12:24:55) [MSC v.1500 32 bit (Intel)] on win32
Type "copyright", "credits" or "license()" for more information.
>>> b'asdf'
'asdf'
>>> isinstance(b'sdf',str)
True
>>> isinstance('dsaf',str)
True
>>> from __future__ unicode_literals
SyntaxError: invalid syntax
>>> from __future__ import unicode_literals
>>> isinstance('asdf',str)
False
>>> isinstance(b'sdfa',str)
True
>>> u'中'
u'\xd6\xd0'
>>> '中'
u'\xd6\xd0'
>>> '中'.decode('utf-8')

Traceback (most recent call last):
  File "<pyshell#9>", line 1, in <module>
    '中'.decode('utf-8')
  File "C:\Python27\lib\encodings\utf_8.py", line 16, in decode
    return codecs.utf_8_decode(input, errors, True)
UnicodeEncodeError: 'ascii' codec can't encode characters in position 0-1: ordinal not in range(128)
>>> '中'.encode('utf-8')
'\xc3\x96\xc3\x90'
>>> '\u4e2d'
u'\u4e2d'
>>> '中'
u'\xd6\xd0'
>>> 'asdf‘.encode('utf-8')
SyntaxError: invalid syntax
>>> 'asdf'.encode('utf-8')
'asdf'
>>> '中'.encode('utf-8')
'\xc3\x96\xc3\x90'
>>> 
