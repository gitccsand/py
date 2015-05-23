# -*- coding: utf-8 -*-
L=['Micheal','Jack','Tom','Tracy']

##n= int(raw_input(u'输入范围:'.encode('gbk')))
##for i in range(n):
##    print L[i]

print L[0:3]## 0 1 2

print L[1:3]## 1 2

print L[-2:] #-2 -1

print L[-2:-1] #-2

L=range(100)

print L[:10] #0-9

print L[-10:] #90-99

print L[10:20] #10-19

print L[:10:2] #0 2 4 6 8

print L[10:20:5] # 10 15

print L[::5] #0 5....95

l= L[:]



t=tuple(L[:])
print t[:6]
##t[10]=445
print t[10]

print 'ABCDEFG'[:3]
print 'ABCDEFG'[::2]

n = range(1,200)
print n[-150:-50]
print n
