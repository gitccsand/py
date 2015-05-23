# -*- coding: utf-8 -*-
names = ['Michael', 'Bob', 'Tracy']

print 'names:'
for name in names:
    print name
print

print 'names pop:'
names.pop()
for name in names:
    print name
print

print 'names add:'
names.append('Tracy')
for name in names:
    print name
print

print 'names insert 2:'
names.insert(2,'Jack')
for name in names:
    print name
print


sum = 0
for x in [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]:
    sum = sum + x
print sum
print
##0-10�ĺ�
sum = 0
for x in range(11):
    sum = sum + x
print sum
print

#100以内奇数和
sum = 0
n = 99
while n > 0:
    sum = sum + n
    n = n - 2
print sum
print

##死循环
while True:
    something = raw_input(u'大家好,输入一些字符:'.encode('gbk'))
    print something
##    print something.decode('gbk').encode('gbk')
    if something=='0':
        exit()
