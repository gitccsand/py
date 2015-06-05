# -*- coding: utf-8 -*-

##高阶函数

    ##map reduece

##map:normalize
def normalize(name):
    return name.capitalize()

l=['Adam','Alice','tom','liuHon','']
r = list(map(normalize,l))
print r

##reduce:prod
from functools import reduce

def prod(l):
    def z(x,y):
        return x*y
    return reduce(z,l)

##l=[x for x in range(1,10)]
##print l

a=prod([x for x in range(1,10)]+['asdf'])
print a


    ##filter
##

