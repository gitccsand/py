# -*- coding: utf-8 -*-

'Coroutine'

__author__='lhw'

import pdb

def consumer():
    pdb.set_trace()
    r = ''
    while True:
##        pdb.set_trace()
        n = yield r
        if not n:
            return
        print('[CONSUMER] Consuming %s...' % n)
        r = '200 OK'
##        n=n-1

def produce(c):
##    pdb.set_trace()
    c.send(None)
    pdb.set_trace()
    m = 0
    while m < 5:
##        pdb.set_trace()
        m = m + 1
        print('[PRODUCER] Producing %s...' % m)
        r = c.send(m)
        print('[PRODUCER] Consumer return: %s' % r)
    c.close()

c = consumer()
produce(c)

if __name__=='__main__':
    pass
##    main()
    



    
    


    

        
        
    
        
        
