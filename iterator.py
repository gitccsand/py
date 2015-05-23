# -*- coding: utf-8 -*-

d = {'a':1,'b':2,'c':3,'d':4}

for key in d:
    print key

for k,v in d.iteritems():
    print k,'=',v

for ch in 'ABC':
    print ch

from collections import Iterable

print isinstance('abc',Iterable)

print isinstance([1,2,3],Iterable)

print isinstance(123,Iterable)

t = ('a','b','c')

for i, value in enumerate(t):
    print i,value

for x,y in [(1,1),(2,4),(3,9)]:
    print x,y

for x,y,z in [(1,1,1),(2,4,8),(3,9,27)]:
    print x,y,z
