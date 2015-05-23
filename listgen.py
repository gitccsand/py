# -*- coding: utf-8 -*-
print [x*x for x in range(1,11)]

print [x*x for x in range(1,11) if x%2==0]

print [m+n for m in 'ABC' for n in 'abc']

import os
print [d for d in os.listdir('d:/codeplace')]

d = {'A':1,'B':2,'C':3}

print [k+'='+str(v) for k,v in d.iteritems()]

##print [k,v for k,v in d.iteritems()]

L = ['Hello','Baby','World','IBM','Apple']

print [s.lower() for s in L]

l = ['Hello','Baby',324,5324,'World','IBM',23,'Apple']

print [s.lower() for s in L if isinstance(s,str)]
