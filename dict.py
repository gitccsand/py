# -*- coding: utf-8 -*-
d = {'key1':23,'asdf':56}
print d['key1']

print 'x' in d

d['x']=56

print 'x' in d

print d.get('x',-1)

print d.get('xy',-1)

print d

d.pop('x')

print d

d['x']=345

print d
