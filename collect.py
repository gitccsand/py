Python 3.4.3 (v3.4.3:9b73f1c3e601, Feb 24 2015, 22:43:06) [MSC v.1600 32 bit (Intel)] on win32
Type "copyright", "credits" or "license()" for more information.
>>> from collections import namedtuple
>>> Point=namedtuple("Point",['x','y'])
>>> p=Point(1,2)
>>> p.x
1
>>> p.y
2
>>> t=(1,2)
>>> t[1]
2
>>> t[0]
1
>>> isinstance(p,Point)
True
>>> isinstance(p,tuple)
True
>>> Circle=namedtuple('Circle',['x','y','r'])
>>> c=Circle()
Traceback (most recent call last):
  File "<pyshell#11>", line 1, in <module>
    c=Circle()
TypeError: __new__() missing 3 required positional arguments: 'x', 'y', and 'r'
>>> c=Circle(0,0,5)
>>> c.x
0
>>> c.y
0
>>> c.r
5
>>> from collections import deque
>>> q=deque(['a','b','c'])
>>> q.append('x')
>>> q.appendleft('y')
>>> q
deque(['y', 'a', 'b', 'c', 'x'])
>>> from collections import defaultdict
>>> dd=defaultdict(lambda:'N/A')
>>> dd['key1']=1
>>> dd['key1']
1
>>> dd['key2']
'N/A'
>>> from collections import OrderedDict
>>> d=dict([('a',1),('b',2),('c',3)])
>>> d
{'b': 2, 'a': 1, 'c': 3}
>>> od=OrderedDict([('a',1),('b',2),('c',3)])
>>> od
OrderedDict([('a', 1), ('b', 2), ('c', 3)])
>>> od
OrderedDict([('a', 1), ('b', 2), ('c', 3)])
>>> od.popitem()
('c', 3)
>>> od
OrderedDict([('a', 1), ('b', 2)])
>>> del od['b'])
SyntaxError: invalid syntax
>>> del
SyntaxError: invalid syntax
>>> od.del('a')
SyntaxError: invalid syntax
>>> del 'a'
SyntaxError: can't delete literal
>>> last=od.popitem(last=False)
>>> last
('a', 1)
>>> print 'last' last
SyntaxError: Missing parentheses in call to 'print'
>>> print 'last' ,last
SyntaxError: Missing parentheses in call to 'print'
>>> class LastUpdatedOrderedDict(OrderedDict):

    def __init__(self, capacity):
        super(LastUpdatedOrderedDict, self).__init__()
        self._capacity = capacity

    def __setitem__(self, key, value):
        containsKey = 1 if key in self else 0
        if len(self) - containsKey >= self._capacity:
            last = self.popitem(last=False)
            print 'remove:', last
        if containsKey:
            del self[key]
            print 'set:', (key, value)
        else:
            print 'add:', (key, value)
        OrderedDict.__setitem__(self, key, value)
        
SyntaxError: Missing parentheses in call to 'print'
>>> class LastUpdatedOrderedDict(OrderedDict):

    def __init__(self, capacity):
        super(LastUpdatedOrderedDict, self).__init__()
        self._capacity = capacity

    def __setitem__(self, key, value):
        containsKey = 1 if key in self else 0
        if len(self) - containsKey >= self._capacity:
            last = self.popitem(last=False)
            print ('remove:', last)
        if containsKey:
            del self[key]
            print ('set:', (key, value))
        else:
            print ('add:', (key, value))
        OrderedDict.__setitem__(self, key, value)

        
>>> lod=LastUpdatedOrderedDict(1)
>>> lod['a']=1
add: ('a', 1)
>>> lod
LastUpdatedOrderedDict([('a', 1)])
>>> lod['b']=2
remove: ('a', 1)
add: ('b', 2)
>>> lod
LastUpdatedOrderedDict([('b', 2)])
>>> lod['b']=2
set: ('b', 2)
>>> lod=LastUpdatedOrderedDict(2)
>>> lod['a']=1
add: ('a', 1)
>>> lod['a']=1
set: ('a', 1)
>>> lod['b']=1
add: ('b', 1)
>>> lod['b']=1
set: ('b', 1)
>>> lod['c']=1
remove: ('a', 1)
add: ('c', 1)
>>> lod.del['a']
SyntaxError: invalid syntax
>>> lod.del('a')
SyntaxError: invalid syntax
>>> lod.del
SyntaxError: invalid syntax
>>> del lod['a']
Traceback (most recent call last):
  File "<pyshell#60>", line 1, in <module>
    del lod['a']
  File "D:\Python34\lib\collections\__init__.py", line 80, in __delitem__
    dict_delitem(self, key)
KeyError: 'a'
>>> ld
Traceback (most recent call last):
  File "<pyshell#61>", line 1, in <module>
    ld
NameError: name 'ld' is not defined
>>> lod
LastUpdatedOrderedDict([('b', 1), ('c', 1)])
>>> del lod['b']
>>> lod
LastUpdatedOrderedDict([('c', 1)])
>>> lod.capcity
Traceback (most recent call last):
  File "<pyshell#65>", line 1, in <module>
    lod.capcity
AttributeError: 'LastUpdatedOrderedDict' object has no attribute 'capcity'
>>> lod._capacity
2
>>> lod['a']=1
add: ('a', 1)
>>> lod.len()
Traceback (most recent call last):
  File "<pyshell#68>", line 1, in <module>
    lod.len()
AttributeError: 'LastUpdatedOrderedDict' object has no attribute 'len'
>>> len(lod)
2
>>> 
>>> 
>>> 
>>> lod.len()
Traceback (most recent call last):
  File "<pyshell#73>", line 1, in <module>
    lod.len()
AttributeError: 'LastUpdatedOrderedDict' object has no attribute 'len'
>>> len(lod)
2
>>> lod._capcity
Traceback (most recent call last):
  File "<pyshell#75>", line 1, in <module>
    lod._capcity
AttributeError: 'LastUpdatedOrderedDict' object has no attribute '_capcity'
>>> lod._capacity
2
>>> lod
LastUpdatedOrderedDict([('c', 1), ('a', 1)])
>>> lod[234]=23
remove: ('c', 1)
add: (234, 23)
>>> from collections import Counter
>>> c=Counter()
>>> for ch in 'Programming':
	c[ch]=c[ch]+1

	
>>> c
Counter({'m': 2, 'r': 2, 'g': 2, 'n': 1, 'a': 1, 'o': 1, 'P': 1, 'i': 1})
>>> 
