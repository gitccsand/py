# -*- coding: utf-8 -*-

<<<<<<< HEAD
<<<<<<< HEAD
'metaclass'
=======
'multiprocessing'
>>>>>>> ce23cf5b06bc3150684ed2e7a56ae009fd2af93d
=======
'call_soon'
>>>>>>> 7c25823582ec810a33ac46c360ea31279fb546ba

__author__='lhw'

import asyncio

def hello_world(loop):
    print('Hello World')
    loop.stop()

loop = asyncio.get_event_loop()

# Schedule a call to hello_world()
loop.call_soon(hello_world, loop)

# Blocking call interrupted by loop.stop()
loop.run_forever()
loop.close()


if __name__=='__main__':
    pass
##    main()
    
    



    
    


    

        
        
    
        
        
