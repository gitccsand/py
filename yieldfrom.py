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

@coroutine
@asyncio.coroutine
def co1(line):
##    while True:
    print('co1 line = %s'%line)
    yield
    yield from asyncio.sleep(100)
    return 100
    
##    return (yield from asyncio.sleep(2))
##    return 100

def f1(line):
    print(line)
    return 100



# Example use
if __name__ == '__main__':
    @coroutine
##    @asyncio.coroutine
    def grep(pattern):
        print ("Looking for %s" % pattern)
        
        while True:
            line=yield
##            print ("My object id %s" % __repr__)
##            print ("Looking for %s" % pattern)
            print ('grep line = %s'% line)

            r = yield from asyncio.sleep(2)
            print('wakup')
##            r = yield from co1(line)
##            print('r = %d' %r)
            
##        return r
        
            
##            if pattern in line:
##                print (line)

    d = {"Yeah, but no, but yeah ,but no":0,"A series of tubes":1,"python generators rock!":2}
  
##    loop = asyncio.get_event_loop()
##    tasks = [grep('python') for line in d]
##    loop.run_until_complete(asyncio.wait(tasks))
##    loop.close()

    

##    g = grep('python')
##    for line in d:
##        g.send(line)

##    loop = asyncio.get_event_loop()
##    g=grep('python')
##    loop.run_until_complete(g)
##    loop.close()
##    
    
##    for g,line in [(grep('python'),line) for line in d]:
##        pass
##        g.send(None)
##        g = grep('python')
        
        
##    while True:
##        pass
##        print(d[line])
##        g=[0,1,2]
##        g[d[line]] = grep("python")
##        g[d[line]].send(line)
    # Notice how you don't need a next() call here
##    g.send("Yeah, but no, but yeah, but no")
##    g.send("A series of tubes")
##    g.send("python generators rock!")

@coroutine
def tcplink(sock,addr):
    print('Accept new connection from %s:%s...' % addr)
    sock.send(b'Welcome!')
    while True:
        data = sock.recv(1024)
        time.sleep(1)
        if not data or data.decode('utf-8') == 'exit':
            break
        sock.send(('Hello, %s!' % data).encode('utf-8'))
    sock.close()
    print('Connection from %s:%s closed.' % addr)
    
##@coroutine
def srv(ip,port):
    s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    s.bind(ip,port)
    s.listen(10)
    print('server start listening port %d'%port)
    while True:
        sock,addr=s.accpet()
        r = yield from tcplink(sock,addr)
    pass

if __name__ == '__main__':
    srv('127.0.0.1',80)

##loop = asyncio.get_event_loop()
##s=srv('127.0.0.1',80)
##loop.run_until_complete(s)
##loop.close()
