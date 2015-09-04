# -*- coding: utf-8 -*-

'meta class'

__author__='lhw'

class meta(type):
    pass
class submeta(meta):
    pass
class myClass(metaclass=submeta):
    pass
class mySubClass(myClass,metaclass=meta):
    pass

##class A(object):
##    pass
##
##print(A)
##
##def echo(o):
##    print(o)
##
##echo(A)
##
##print(hasattr(A,'new_attr'))
##
##A.new_attr='foo'
##print(hasattr(A,'new_attr'))
##print(A.new_attr)
##
##AM=A
##print(AM)
##
##obj=AM()
##print(obj)
##print(obj.new_attr)

def main():
##    pass
    print(isinstance(mySubClass,submeta))
    print(isinstance(myClass,submeta))
    sub=mySubClass()
    print(isinstance(sub,meta))
    
if __name__=='__main__':
    main()

    
