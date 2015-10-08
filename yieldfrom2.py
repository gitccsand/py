# coroutine.py
#
# test yield from
# 测试是否 yield from后的协程 return后，是否会报iteration stop 错误
# 不会报错，而是继续yield from 后的语句,并且return 的值，返回到了yield from 等号之前的result


def coroutine(func):
    def start(*args,**kwargs):
        cr = func(*args,**kwargs)
        cr.send(None)
##        cr.next()
        return cr
    return start

def get():
    while True:
        result = yield from bar()
        print('from bar return')
        result()
        print('get')


    

def bar():
    print('bar')
    def aa():
        print('aaaa')
    yield aa
    print('bar end')
    return aa


if __name__ == '__main__':
    g=get()    
    for i in range(10):
        print('---next')
        af = next(g)
        print('-- from get yield')
        af()
        
        
##    g=get()
##    af= next(g)
##    af()

##loop = asyncio.get_event_loop()
##s=srv('127.0.0.1',80)
##loop.run_until_complete(s)
##loop.close()
