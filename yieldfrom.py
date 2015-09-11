# coroutine.py
#
# A decorator function that takes care of starting a coroutine
# automatically on call.

def coroutine(func):
    def start(*args,**kwargs):
        cr = func(*args,**kwargs)
        cr.send(None)
##        cr.next()
        return cr
    return start

@coroutine
def co1(line):
##    while True:
    print(line)
    r = yield 10
    return 10

# Example use
if __name__ == '__main__':
    @coroutine
    def grep(pattern):
        print ("Looking for %s" % pattern)
##        while True:
        line = yield from co1('asdf')
        print ('line = %d'%line)          
        return line
            
##            if pattern in line:
##                print (line)

    g = grep("python")
    # Notice how you don't need a next() call here
    g.send("Yeah, but no, but yeah, but no")
    g.send("A series of tubes")
    g.send("python generators rock!")
