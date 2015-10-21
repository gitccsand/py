# coroutine.py
#

import asyncio
from aiohttp import web

def index(request):
    return web.Response(body=b'<h1>Index</h1>')

def hello(request):
    yield from asyncio.sleep(0.5)
    text = '<h1>hello, %s!</h1>' % request.match_info['name']
    return web.Response(body=text.encode('utf-8'))

@asyncio.coroutine
def init(loop):
    app= web.


