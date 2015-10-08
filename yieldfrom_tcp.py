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

import socket
import time

@coroutine
def tcplink(c):
    sock,addr =c
    print('Accept new connection from %s:%s...' % addr)
    sock.send(b'Welcome!')
    while True:
        data = sock.recv(1024)
        time.sleep(1)
        if not data or data.decode('utf-8') == 'exit':
            break
        sock.send(('Hello, %s!' % data).encode('utf-8'))
    sock.close()
    yield 'byebye'
    
##    yield 100

##@coroutine
##def helloecho(sock,addr):
##    sock.send(b'Welcome!')
##    while True:
##        data = sock.recv(1024)
##        time.sleep(1)
##        if not data or data.decode('utf-8') == 'exit':
##            break
##        sock.send(('Hello, %s!' % data).encode('utf-8'))
##    sock.close()
##    yield 'byebye!'
        
    
    
@coroutine
def srv(ip,port):
    r = yield
    while True:
        s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
        s.bind((ip,port))
        s.listen(10)
        print('server start listening port %d'%port)
        sock,addr=s.accept()
        print('accept something....')
        c=(sock,addr)
        yield from tplink(c)
        
def main():
    for c in srv('127.0.0.1',9000):
        print(c)
        
        

if __name__ == '__main__':
    main()
    
    

        
##    loop = asyncio.get_event_loop()
##    s=srv('127.0.0.1',80)
##    loop.run_until_complete(s)
##    loop.close()
