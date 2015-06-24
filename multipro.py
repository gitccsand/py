# -*- coding: utf-8 -*-

'multiprocessing'

__author__='lhw'

from multiprocessing import Process
import os
import time

##子进程要执行的代码,不能再python交互中运行，在cmd中可以
def run_proc(name):
    print('Run child process %s (%s)...'% (name,os.getpid()))

if __name__=='__main__':
##    main()
    print('Parent process %s.'%os.getpid())
    p=Process(target=run_proc,args=('test',))
    print('Child process will start...')
    p.start()
##    time.sleep(3)
    p.join()
    print('Child process end.')




    
    


    

        
        
    
        
        
