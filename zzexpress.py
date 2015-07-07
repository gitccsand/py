Python 3.4.3 (v3.4.3:9b73f1c3e601, Feb 24 2015, 22:43:06) [MSC v.1600 32 bit (Intel)] on win32
Type "copyright", "credits" or "license()" for more information.
>>> from datetime import datetime
>>> help(datetime.strptime)
Help on built-in function strptime:

strptime(...) method of builtins.type instance
    string, format -> new datetime parsed from a string (like time.strptime()).

>>> dt=datetime.strptime('2015-07-01','%Y-%m-%d')
>>> dt.timestamp()
1435680000.0
>>> dt.replace(tzinfo=timezone(timedelta(hours=8)))
Traceback (most recent call last):
  File "<pyshell#4>", line 1, in <module>
    dt.replace(tzinfo=timezone(timedelta(hours=8)))
NameError: name 'timezone' is not defined
>>>  from datetime import datetime, timedelta, timezone
 
SyntaxError: unexpected indent
>>> from datetime import datetime, timedelta, timezone
>>> dt.replace(tzinfo=timezone(timedelta(hours=8)))
datetime.datetime(2015, 7, 1, 0, 0, tzinfo=datetime.timezone(datetime.timedelta(0, 28800)))
>>> dt.timestamp()
1435680000.0
>>> dt.replace(tzinfo=timezone(timedelta(hours=10)))
datetime.datetime(2015, 7, 1, 0, 0, tzinfo=datetime.timezone(datetime.timedelta(0, 36000)))
>>> dt.timestamp()
1435680000.0
>>> print(dt)
2015-07-01 00:00:00
>>> dt_tz=dt.replace(tzinfo=timezone(timedelta(hours=10)))
>>> dt_tz.timestamp()
1435672800.0
>>> import re
>>> re.split(r'[\s\-]','010 - 234234')
['010', '', '', '234234']
>>> re.split(r'[\s+\-]','010 - 234234')
['010', '', '', '234234']
>>> re.split(r'[\s|\-]','010 - 234234')
['010', '', '', '234234']
>>> re.split(r'[\s]','010 - 234234')
['010', '-', '234234']
>>> re.split(r'[\s\-]','010 - 234234')
['010', '', '', '234234']
>>> re.split(r'[\s]','010 - 234234')
['010', '-', '234234']
>>> re.split(r'[\s-]+','010 - 234234')
['010', '234234']
>>> re.match(r'^(\d{1,3})[\s\-]+\(\d{1-10}$)','023 - 23432424')
Traceback (most recent call last):
  File "<pyshell#22>", line 1, in <module>
    re.match(r'^(\d{1,3})[\s\-]+\(\d{1-10}$)','023 - 23432424')
  File "D:\Python34\lib\re.py", line 160, in match
    return _compile(pattern, flags).match(string)
  File "D:\Python34\lib\re.py", line 294, in _compile
    p = sre_compile.compile(pattern, flags)
  File "D:\Python34\lib\sre_compile.py", line 568, in compile
    p = sre_parse.parse(p, flags)
  File "D:\Python34\lib\sre_parse.py", line 765, in parse
    raise error("unbalanced parenthesis")
sre_constants.error: unbalanced parenthesis
>>> re.match(r'^(\d{1,3})[\s\-]+(\d{1-10}$)','023 - 23432424')
>>> m=re.match(r'^(\d{1,3})[\s\-]+(\d{1-10}$)','023 - 23432424')
>>> print(m)
None
>>> m=re.match(r'^(\d{1,3})[\s\-]+(\d{1-10})$','023 - 23432424')
>>> print(m)
None
>>> re.split(r'^(\d{1,3})[\s\-]+(\d{1-10})$','023 - 23432424')
['023 - 23432424']
>>> re.split(r'[\s\-]+','023 - 23432424')
['023', '23432424']
>>> m=re.match(r'^(\d{1,3})[\s\-]+(\d{1,10})$','023 - 23432424')
>>> print(m)
<_sre.SRE_Match object; span=(0, 14), match='023 - 23432424'>
>>> m.groups()
('023', '23432424')
>>> m.groups(0)
('023', '23432424')
>>> m.groups(1)
('023', '23432424')
>>> m.groups(2)
('023', '23432424')
>>> m.group(2)
'23432424'
>>> m=re.match(r'^(\d{1,3})[\s\-]+(\d{1,10})$','0232 - 23432424')
>>> print(m)
None
>>> m=re.match(r'^(\d*)[\s\-]+(\d*)$','0232 - 23432424')
>>> m.groups()
('0232', '23432424')
>>> m=re.match(r'^(\d*)[\s\-]+(\d*)$','0232 - 23432424')

>>> re.match(r'(\d+)(0*)','1321000').groups()
('1321000', '')
>>> re.match(r'(\d+?)(0*)','1321000').groups()
('1', '')
>>> re.match(r'^(\d+?)(0*)$','1321000').groups()
('1321', '000')
>>> 
pn=re.compile(r'^(\d*)[\s\-]+(\d*)$','0232 - 23432424')
Traceback (most recent call last):
  File "<pyshell#45>", line 2, in <module>
    pn=re.compile(r'^(\d*)[\s\-]+(\d*)$','0232 - 23432424')
  File "D:\Python34\lib\re.py", line 223, in compile
    return _compile(pattern, flags)
  File "D:\Python34\lib\re.py", line 279, in _compile
    bypass_cache = flags & DEBUG
TypeError: unsupported operand type(s) for &: 'str' and 'int'
>>> pn=re.compile(r'^(\d*)[\s\-]+(\d*)$')
>>> pn.match('234-234234').groups()
('234', '234234')
>>> print(re.match(r'^[a-zA-Z0-9\.]+@[a-zA-Z0-9]+.com]','bill.gate@microsoft.com'))
None
>>> print(re.match(r'^[a-zA-Z0-9\.]+@[a-zA-Z0-9]+.com','bill.gate@microsoft.com'))
<_sre.SRE_Match object; span=(0, 23), match='bill.gate@microsoft.com'>
>>> print(re.match(r'^[a-zA-Z0-9\.]+@[a-zA-Z0-9]+.\w{1-3}','bill.gate@microsoft.com'))
None
>>> print(re.match(r'^[a-zA-Z0-9\.]+@[a-zA-Z0-9]+.\w{1,3}','bill.gate@microsoft.com'))
<_sre.SRE_Match object; span=(0, 23), match='bill.gate@microsoft.com'>
>>> re.match(r'^[a-zA-Z0-9\.]+@[a-zA-Z0-9]+.\w{1,3}','bill.gate@microsoft.com').group(0)
'bill.gate@microsoft.com'
>>> email=re.compile(r'^[a-zA-Z0-9\.]+@[a-zA-Z0-9]+.\w{1,3}')
>>> email.match('tom@153.com')
<_sre.SRE_Match object; span=(0, 11), match='tom@153.com'>
>>> 
email=re.compile(r'^([a-zA-Z0-9\.]+)@([a-zA-Z0-9]+).(\w{1,3})')
>>> email.match('bi.ga@ms.com').groups()
('bi.ga', 'ms', 'com')
>>> email.match('sdf@162.com').groups()
('sdf', '162', 'com')
>>> n_eamil=re.compile(r'^\s*<([\sa-zA-Z0-9]+)\s*[a-zA-Z0-9\.]+@[a-zA-Z0-9]+.\w{1,3}$)
		   
SyntaxError: EOL while scanning string literal
>>> n_eamil=re.compile(r'^\s*<([\sa-zA-Z0-9]+)\s*[a-zA-Z0-9\.]+@[a-zA-Z0-9]+.\w{1,3}$')
>>> n_eamil=re.compile(r'^\s*\<([\sa-zA-Z0-9]+)\>\s*([a-zA-Z0-9\.]+@[a-zA-Z0-9]+.\w{1,3}$'))
SyntaxError: invalid syntax
>>> n_eamil=re.compile(r'^\s*\<([\sa-zA-Z0-9]+)\>\s*([a-zA-Z0-9\.]+@[a-zA-Z0-9]+.\w{1,3}$)')
>>> n_email.match(' <asdk sdf> tom@dfdsf.com').groups()
Traceback (most recent call last):
  File "<pyshell#64>", line 1, in <module>
    n_email.match(' <asdk sdf> tom@dfdsf.com').groups()
NameError: name 'n_email' is not defined
>>> n_email=re.compile(r'^\s*\<([\sa-zA-Z0-9]+)\>\s*([a-zA-Z0-9\.]+@[a-zA-Z0-9]+.\w{1,3}$)')
>>> n_email.match(' <asdk sdf> tom@dfdsf.com').groups()
('asdk sdf', 'tom@dfdsf.com')
>>> n_email=re.compile(r'^\s*\<([\sa-zA-Z0-9]+)\>\s*([a-zA-Z0-9\.]+@[a-zA-Z0-9]+.\w{1,3}\s*$)')
>>> n_email.match(' <asdk sdf> tom@dfdsf.com  ').groups()
('asdk sdf', 'tom@dfdsf.com  ')
>>> n_email.match(' <asdk sdf> tom@dfdsf.com  ').groups()n_email=re.compile(r'^\s*\<([\sa-zA-Z0-9]+)\>\s*([a-zA-Z0-9\.]+@[a-zA-Z0-9]+.\w{1,3}\)s*$')
SyntaxError: invalid syntax
>>> n_email=re.compile(r'^\s*\<([\sa-zA-Z0-9]+)\>\s*([a-zA-Z0-9\.]+@[a-zA-Z0-9]+.\w{1,3})\s*$')
>>> n_email.match(' <asdk sdf> tom@dfdsf.com  ').groups()
('asdk sdf', 'tom@dfdsf.com')
>>> n_email=re.compile(r'^\s*\<([\sa-zA-Z0-9\.]+)\>\s*([a-zA-Z0-9\.]+@[a-zA-Z0-9]+.\w{1,3})\s*$')
>>> n_email.match(' <asdk sdf> tom@dfdsf.com  ').groups()
('asdk sdf', 'tom@dfdsf.com')
>>> n_email.match(' <asdk .sdf> tom@dfdsf.com  ').groups()
('asdk .sdf', 'tom@dfdsf.com')
>>> n_email.match(' <bill.gates> tom@dfdsf.com  ').groups()
('bill.gates', 'tom@dfdsf.com')
>>> 
