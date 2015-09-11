# -*- coding: utf-8 -*-

'web app'

__author__='lhw'

import logging;logging.basicConfig(level=logging.INFO)

import asyncio,os,json,time
from datetime import datetime

from aiohttp import web

##@asyncio.coroutine
def index(request):
    print('i am sleeping')
    asyncio.sleep(5)
    print('i waked up')
##    r=yield from asyncio.sleep(5)
    return web.Response(body=b'<h1>Awesome</h1>')

@asyncio.coroutine
def init(loop):
    app=web.Application(loop=loop)
    app.router.add_route('GET','/',index)
    srv = yield from loop.create_server(app.make_handler(),'127.0.0.1',9000)
    print(srv)
    logging.info('server started at http://127.0.0.1:9000')
    return srv

loop = asyncio.get_event_loop()
loop.run_until_complete(init(loop))
loop.run_forever()

if __name__=='__main__':
##    main()
    pass
    



    
    


    

        
        
    
        
        
