# -*- coding: utf-8 -*-

def my_abs(x):
    if x>=0:
        return x
    else:
        return -x

def my_abs1(x):
    if not isinstance(x,(int,float)):
        raise TypeError('bad number type')
##        pass
    else:
        my_abx(x)


n = int(input('输入：'))
print (my_abs(n))

print (my_abs1('asd'))

