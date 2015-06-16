# -*- coding: utf-8 -*-

##高阶函数

    ##map reduece

        ##map:normalize

##def normalize(name):
##    return name.capitalize()
##
##l=['Adam','Alice','tom','liuHon','']
##r = list(map(normalize,l))
##print r

        ##reduce:prod

##from functools import reduce
##
##def prod(l):
##    def z(x,y):
##        return x*y
##    return reduce(z,l)
##
####l=[x for x in range(1,10)]
####print l
##
####a=prod([x for x in range(1,10)]+['asdf'])
##a=prod([x for x in range(1,10)])
##print a

        ##char2num

##def char2num(s):
##    return {'0': 0, '1': 1, '2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9,'.':0}[s]
##def to_int(x,y):
##    return x*10+y
##s='234324324'
##print map(char2num,s)
##print reduce(to_int,map(char2num,s))

    ##filter

        ##isprime

##def is_prime_number1(x):
##    for i in range(2,x+1):
##        if x%i==0:
##            break
##        else:
##            i=i+1
##    if i==x:
##        return 0
##    else:
##        return 1
##print is_prime_number1(1)

##def is_prime_number2(x):
##    if x==1:
##        return 0
##    for i in range(2,(x/2)+1):
##        if x%i==0:
##            return 0
##        else:
##            i=i+1
##    return 1
##
##def not_prime_number1(x):
##    if x==1:
##        return 1 
##    for i in range(2,(x/2)+1):
##        if x%i==0:
##            return 1
##        else:
##            i=i+1
##    return 0
####print is_prime_number2(3)
##
##l=range(1,101)
##print(filter(not_prime_number1,l))
##print(filter(is_prime_number2,l))

    ##sort

        ##reverse

##def reverse_comp(x,y):
##    if x>y:
##        return -1
##    if x<y:
##        return 1
##    return 0
##l=[2,52,5443,5,43,2,2,55]
##print sorted(l)
##print sorted(l,reverse_comp)

        ##case

##def cmp_ignore_case(s1, s2):
##    u1 = s1.upper()
##    u2 = s2.upper()
##    if u1 < u2:
##        return -1
##    if u1 > u2:
##        return 1
##    return 0
##
##l=['adf','gew','asd','Zdf','fdie']
##print sorted(l)
##print sorted(l,cmp_ignore_case)

    ##return function

        ##

##def fib(max):
##    n,a,b = 0,0,1
##    while(n<max):
##        yield b
##        a,b=b,a+b
##        n=n+1
##
##print(next(fib(6)))
##def cal_sum(*args):
##    sum=0
##    for i in args:
##        sum=sum+i
##    return sum
##
##print cal_sum(*range(1,100))
##print cal_sum(*fib(6))



        
