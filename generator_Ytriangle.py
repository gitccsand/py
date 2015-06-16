# -*- coding: utf-8 -*-

def Ytriangle1():
    L=[]
    while True:
        
        if len(L)<=1:
            L.append(1)        
        else:
            m=[L[i]+L[i+1] for i in range(len(L)-1)]
            L=[1]+m+[1]
            
        yield L

def Ytriangle2():
    L=[1]
    while True:
        yield L
        L=[1]+[L[i]+L[i+1] for i in range(len(L)-1)]+[1]
            
        

Y=Ytriangle2()

for n in range(10):
    print(next(Y))

##for m in Y:
##    print m
    

        
        
    
        
        
