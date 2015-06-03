# -*- coding: utf-8 -*-

def Ytriangle1():
    l=[]
    while True:
        
        if len(l)<=1:
            l.append(1)        
        else:
            m=[l[i]+l[i+1] for i in range(len(l)-1)]
            l=[1]+m+[1]
            
        yield l

def Ytriangle():
    l=[1]
    while True:
        yield l
        l=[1]+[l[i]+l[i+1] for i in range(len(l)-1)]+[1]
            
        

Y=Ytriangle()

for n in range(10):
    print(next(Y))

##for m in Y:
##    print m
    

        
        
    
        
        
