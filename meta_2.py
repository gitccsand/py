# -*- coding: utf-8 -*-

'meta class'

__author__='lhw'



class meta(type):
    pass

__meataclass__=meta

class A(object):
    pass

def main():
    print(isinstance(A,meta))
    
    
if __name__=='__main__':
    main()

    
