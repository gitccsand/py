import logging
logging.basicConfig(level=logging.INFO)

import time

def follow(thefile):
    logging.info("generator follow")
    thefile.seek(0,2)
    while True:
        line=thefile.readline()
        if not line:
            time.sleep(0.1)
            continue
        yield line
        
if __name__=='__main__':
    logfile=open('./access-log','r')
    for line in follow(logfile):
        print(line)


