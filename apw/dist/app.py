# -*- coding: utf-8 -*-

'apw app'

__author__='lhw'

##import asyncio

##@asyncio.coroutine
##def hello():
##    print('Hello World')
##    #异步调用asyncio.sleep(1)
##    r=yield from asyncio.sleep(1)
##    print("Hello again")
##
###获取eventLoop:
##loop = asyncio.get_event_loop()
###执行coroutine
##loop.run_until_complete(hello())
##loop.close()

##import threading
##import asyncio
##
##@asyncio.coroutine
##def hello():
##    print('Hello world! (%s)' % threading.currentThread())
##    yield from asyncio.sleep(1)
##    print('Hello again! (%s)' % threading.currentThread())
##
##loop = asyncio.get_event_loop()
##tasks = [hello(), hello()]
##loop.run_until_complete(asyncio.wait(tasks))
##loop.close()


##import asyncio
##
##@asyncio.coroutine
##def wget(host):
##    print('wget %s...' % host)
##    connect = asyncio.open_connection(host, 80)
##    reader, writer = yield from connect
##    header = 'GET / HTTP/1.0\r\nHost: %s\r\n\r\n' % host
##    writer.write(header.encode('utf-8'))
##    yield from writer.drain()
##    while True:
##        line = yield from reader.readline()
##        if line == b'\r\n':
##            break
##        print('%s header > %s' % (host, line.decode('utf-8').rstrip()))
##    # Ignore the body, close the socket
##    writer.close()
##
##loop = asyncio.get_event_loop()
##tasks = [wget(host) for host in ['www.taobao.com', 'www.sina.com.cn', 'http://127.0.0.1:5000']]
##loop.run_until_complete(asyncio.wait(tasks))
##loop.close()

import asyncio

from aiohttp import web

def index(request):
    return web.Response(body=b'<h1>APW APP</h1>')

def hello(request):
    yield from asyncio.sleep(0.5)
    text = '<h1>hello, %s!</h1>' % request.match_info['name']
    return web.Response(body=text.encode('utf-8'))

@asyncio.coroutine
def init(loop):
    app = web.Application(loop=loop)
    app.router.add_route('GET', '/', index)
    app.router.add_route('GET', '/hello/{name}', hello)
    srv = yield from loop.create_server(app.make_handler(), '172.16.255.4', 9000)
    print('Server started at http://172.16.255.4:9000...')
    return srv

loop = asyncio.get_event_loop()
loop.run_until_complete(init(loop))
loop.run_forever()


if __name__=='__main__':
    pass
##    main()
    



    
    


    

        
        
    
        
        
