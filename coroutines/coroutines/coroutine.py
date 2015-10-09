# coroutine.py
#
# A decorator function that takes care of starting a coroutine
# automatically on call.

def coroutine(func):
    def start(*args,**kwargs):
        cr = func(*args,**kwargs)
        cr.send(None)
<<<<<<< HEAD
=======
##        cr.next()
>>>>>>> 7c25823582ec810a33ac46c360ea31279fb546ba
        return cr
    return start

# Example use
if __name__ == '__main__':
    @coroutine
    def grep(pattern):
        print ("Looking for %s" % pattern)
<<<<<<< HEAD
        while True:
            line = (yield)
            if pattern in line:
                print (line)
=======
        try:
            while True:
                line = (yield 1)
                if pattern in line:
                    print (line)
        except GeneratorExit:
            print ("Going away. Goodbye")
        except RuntimeError:
            print('sdfasd')
>>>>>>> 7c25823582ec810a33ac46c360ea31279fb546ba

    g = grep("python")
##    g.send(None)
    # Notice how you don't need a next() call here
    print(g.send("Yeah, but no, but yeah, but no"))
    print(g.send("A series of tubes"))
    print(g.send("python generators rock!"))
    g.throw(RuntimeError,"You're hosed")
    g.close()
