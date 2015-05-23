# -*- coding: utf-8 -*-

def fact(n):
    if n==1:
        return 1
    return n * fact(n - 1)

num = int(raw_input(u'输入数字，求阶乘：'.encode('gbk')))

print fact(num)


def fact_iter(number,product):
    if number==1:
        return product;
    return(fact_iter(number-1,number*product))
           
def fact(nu):
    return fact_iter(nu,1)

num = int(raw_input(u'输入数字，求阶乘：'.encode('gbk')))
print fact(num)

def fact2():
    numb = int(raw_input(u'输入数字，求阶乘：'.encode('gbk')))
    s=1
    while numb >0:
       s=s*numb
       numb=numb-1
    return s
        
print fact2()
