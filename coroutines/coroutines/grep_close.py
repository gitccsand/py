# grep.py
#
# A very simple coroutine

def grep(pattern):
    try:
        print ("Looking for %s" % pattern)
        while True:
            line = yield
##        while(line = (yield)):
            if pattern in line:
                print (line)
    except GeneratorExit:
        print ("Going away. Goodbye")

# Example use
try:
    if __name__ == '__main__':    
        g = grep("python")
        g.send(None)
        ##    g.next()
        g.send("Yeah, but no, but yeah, but no")
        g.send("A series of tubes")
        g.send("python generators rock!")
        ##    next(g)
        ##    next(g)
        ##    g.throw(RuntimeError ,'you are hosed')
##        g.close()
        ##    g.send('sdfsdfsdfsd')
        try:
            g.throw(RuntimeError ,'you are hosed')
        except RuntimeError as e:
            print(e)
        g.send('asdflaf')

except RuntimeError as e:
    print(type(e))
