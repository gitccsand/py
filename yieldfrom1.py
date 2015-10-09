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
##    result = yield from foo()
    result = yield from bar()
    result()
    print('get')
    return result

def foo():
    while True:
        print('foo')
        def aa():
            print('aaaa')
        yield aa
    

def bar():
    print('bar')
    def aa():
        print('aaaa')
    yield aa
    print('bar end')
    return aa


if __name__ == '__main__':
    g=get()    
    while True:
        print('---next')
        af = next(g)
        af()
        
##    g=get()
##    af= next(g)
##    af()

##loop = asyncio.get_event_loop()
##s=srv('127.0.0.1',80)
##loop.run_until_complete(s)
##loop.close()
