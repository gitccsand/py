# -*- coding: utf-8 -*-

'err_raise'

__author__='lhw'

class FooError(ValueError):
    pass

import logging

def foo(s):
    n=int(s)
    if n==0:
        raise FooError('invailid value:%s'%s)
        
    return 10/n

def bar(s):
    return foo(s)*2

def main():
    try :
        bar(0)
    except Exception as e:
        logging.exception(e)


if __name__=='__main__':
    main()
    print('END')

    
