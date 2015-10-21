# coroutine.py
#

import asyncio

@asyncio.coroutine
def hello():
    print("Hello world!")
    # 异步调用asyncio.sleep(1):
    r = yield from asyncio.sleep(1)
    print("Hello again!")



if __name__ == '__main__':
    # 获取EventLoop:
    loop = asyncio.get_event_loop()
    h=hello()
##    h.send(None)
    # 执行coroutine
    loop.run_until_complete(h)
##    loop.run_until_complete(asyncio.wait([hello()]))
    loop.close()


##import threading
##import time
##@asyncio.coroutine
##def hello():
##    print('Hello world! (%s)' % threading.currentThread())
##    
####    yield time.sleep(5)
####    yield from time.sleep(5)
##    
##    time.sleep(1)
##    print('block sleep done')
##    yield from asyncio.sleep(3)
##    
##    print('Hello again! (%s)' % threading.currentThread())
##
##if __name__ == '__main__':
##    loop = asyncio.get_event_loop()
##    tasks = [hello(), hello()]
####    loop.run_until_complete(tasks)
##    loop.run_until_complete(asyncio.wait(tasks))
####    loop.call_later(2,asyncio.wait(tasks))
##    print('all tasks done')
##    loop.close()
