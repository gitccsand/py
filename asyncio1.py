# coroutine.py
#
# test yield from
# 测试是否 yield from后的协程 return后，是否会报iteration stop 错误
# 不会报错，而是继续yield from 后的语句,并且return 的值，返回到了yield from 等号之前的result

import asyncio

def coroutine(func):
    def start(*args,**kwargs):
        cr = func(*args,**kwargs)
        cr.send(None)
##        cr.next()
        return cr
    return start

def get():
    while True:
        print('get: before yield from')
        result = yield from asyncio.sleep(10)
        print('get: after yield from')


    

def bar():
    print('bar')
    def aa():
        print('aaaa')
    yield aa
    print('bar end')
    return aa


if __name__ == '__main__':
    g=get()
    print('before call')
    next(g)
    print('after call')
##    for i in range(10):
##        print('---next')
##        next(g)
        
        
##    g=get()
##    af= next(g)
##    af()

##loop = asyncio.get_event_loop()
##s=srv('127.0.0.1',80)
##loop.run_until_complete(s)
##loop.close()
