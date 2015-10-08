# coroutine.py
#
# A decorator function that takes care of starting a coroutine
# automatically on call.

import asyncio

def coroutine(func):
    def start(*args,**kwargs):
        cr = func(*args,**kwargs)
        cr.send(None)
##        cr.next()
        return cr
    return start

def get():
    result = yield foo()
    print('get')
    return result

def foo():
    print('foo')
    def aa():
        print('asdf')
    return aa
    




if __name__ == '__main__':   
    g=get()
    af= next(g)
    af()
    next(g)
