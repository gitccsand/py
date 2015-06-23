Python 3.4.3 (v3.4.3:9b73f1c3e601, Feb 24 2015, 22:44:40) [MSC v.1600 64 bit (AMD64)] on win32
Type "copyright", "credits" or "license()" for more information.
>>> import sys
>>> sys.path
['', 'D:\\Python34\\Lib\\idlelib', 'D:\\workspace\\py', 'C:\\Windows\\system32\\python34.zip', 'D:\\Python34\\DLLs', 'D:\\Python34\\lib', 'D:\\Python34', 'D:\\Python34\\lib\\site-packages']
>>> from enum import Enum
>>> Month = Enum('Month',('Jan','Feb','Mar','Apr','May','Jun','Ju','Aug','Sep','Oct','Nov','Dec'))
>>> Month.Jan
<Month.Jan: 1>
>>> for name,member in Month.__members__.item():
	print(name,'>',member,',',member.value)

	
Traceback (most recent call last):
  File "<pyshell#10>", line 1, in <module>
    for name,member in Month.__members__.item():
AttributeError: 'mappingproxy' object has no attribute 'item'
>>> for name,member in Month.__members__.items():
	print(name,'>',member,',',member.value)

	
Jan > Month.Jan , 1
Feb > Month.Feb , 2
Mar > Month.Mar , 3
Apr > Month.Apr , 4
May > Month.May , 5
Jun > Month.Jun , 6
Ju > Month.Ju , 7
Aug > Month.Aug , 8
Sep > Month.Sep , 9
Oct > Month.Oct , 10
Nov > Month.Nov , 11
Dec > Month.Dec , 12
>>> from enum import Enum,unique
>>> @unique
class Weekday(Enum):
	Sum=0
	Mon=1
	Tue=2
	Wed=3
	Thu=4
	Fri=5
	Sat=6

	
>>> w=Weekday()
Traceback (most recent call last):
  File "<pyshell#25>", line 1, in <module>
    w=Weekday()
TypeError: __call__() missing 1 required positional argument: 'value'
>>> day1=Weekday.Mon
>>> day1
<Weekday.Mon: 1>
>>> print(day1)
Weekday.Mon
>>> print(Weekday.Tue)
Weekday.Tue
>>> print(Weekday['Tue'])
Weekday.Tue
>>> print(Weekday.Tue.value)
2
>>> day1==Weekday.Mon
True
>>> print(day1==Weekday.Tue
      )
False
>>> print(Weekday(1))
Weekday.Mon
>>> Weekday[7]
Traceback (most recent call last):
  File "<pyshell#36>", line 1, in <module>
    Weekday[7]
  File "D:\Python34\lib\enum.py", line 258, in __getitem__
    return cls._member_map_[name]
KeyError: 7
>>> Weekday[6]
Traceback (most recent call last):
  File "<pyshell#37>", line 1, in <module>
    Weekday[6]
  File "D:\Python34\lib\enum.py", line 258, in __getitem__
    return cls._member_map_[name]
KeyError: 6
>>> Weekday(1)
<Weekday.Mon: 1>
>>> for name,member in Weekday.__members__.items ():
	print (name,'=>',member)

	
Sum => Weekday.Sum
Mon => Weekday.Mon
Tue => Weekday.Tue
Wed => Weekday.Wed
Thu => Weekday.Thu
Fri => Weekday.Fri
Sat => Weekday.Sat
>>> 
