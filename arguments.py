# -*- coding: utf-8 -*-

##参数
def pow(x):
    return x*x

print pow(4);

def pow(x,n):
    s=1
    while n>0:
        s = s*x
        n=n-1
    return s

print pow(4,3)

##缺省参数 不影响原调用
def pow(x,n=2):
    s=1
    while n>0:
        s = s*x
        n=n-1
    return s

print pow(4)

##缺省参数
def enroll(name, gender, age=6, city='Beijing'):
    print 'name:', name
    print 'gender:', gender
    print 'age:', age
    print 'city:', city

enroll('zhangsan','F')

enroll('lisi','M',city='lasld')


##缺省参数 可变量做缺省值，逻辑错误
def add_end(L=[]):
    L.append('END')
    return L

print add_end()
print add_end()

##缺省参数 不可变量做缺省值
def add_end(L=None):
    if L==None:
        L=[];
    L.append('END')
    return L

print add_end()
print add_end()

##参数个数不确定 list tuple做参数
def calc(numbers):
    sum = 0
    for n in numbers:
        sum = sum + n * n
    return sum

print calc((1,2,3))
print calc([])

##参数个数不确定，可变参数
def calc(*numbers):
    sum = 0
    for n in numbers:
        sum = sum + n * n
    return sum

print calc(1,2,3)

print calc()

num=(1,2,3)
print calc(*num)
##关键字参数
def person(name, age, **kw):
    print 'name:', name, 'age:', age, 'other:', kw

person('wangwu',7)
person('wangwu',7,gender='m')

##可变参数、关键字参数混合
x = (1,2,None,'d','e','f')
y = {'a1':1,'b1':2,'c1':3}
def func(a,b,c=0,*args,**kw):
    print 'a=',a
    print 'b=',b
    print 'c=',c
    print 'args=',args
    print 'kw=',kw

func(1,2,**y)
func(*x,**y)


