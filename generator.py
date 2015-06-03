# -*- coding: utf-8 -*-
L = [x*x for x in range(11)]

print L

g = (x*x for x in range(11))

l = [x for x in g]

print l

G = (x*x for x in range(11))

##for n in G:
##    print G.next()

##for n in G:
##    print n


def fib(max):
    n,a,b = 0,0,1
    while(n<max):
        print b
        a,b=b,a+b
        n=n+1

fib(6)

def fib(max):
    n,a,b=0,0,1
    while n<max :
        yield b
        a,b=b,b+a
        n=n+1

m = int(raw_input(u'输入fib长度:'.encode('gbk')))
g = fib(m)

for n in g:
    print n


def odd():
    print('step 1')
    yield 1
    print('step 2')
    yield 2
    print('step 3')
    yield 3
    
o=odd()
next(o)
