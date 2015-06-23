# -*- coding: utf-8 -*-

'err_raise raise'

__author__='lhw'

class FooError(ValueError):
    pass

import logging

def foo(s):
    n=int(s)
    if n==0:
        raise FooError('invailid value:%s'%s)
        
    return 10/n

def bar():
    try:
        n=foo('0')
    except ValueError as e:
        print('ValueErro')
        raise
    print('bar...%d'%n)
    return n*2

def main():
    try:
        bar()
    except ValueError as e:
        print('main: handle bar error')
        
    print('main...')

main()

    
