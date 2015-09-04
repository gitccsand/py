# 1-02-follow.py
#
# A generator that follows a log file like Unix 'tail -f'.
#
# Note: To see this example work, you need to apply to 
# an active server log file.  Run the program "logsim.py"
# in the background to simulate such a file.  This program
# will write entries to a file "access-log".


import logging
logging.basicConfig(level=logging.INFO)

import time

def follow(thefile):
    logging("generator follow")
    thefile.seek(0,2)
    while True:
        line=thefile.readline()
        if not line:
            time.sleep(0.1)
            continue
        yield line
        
if __name__=='__main__':
    logfile=open('./access-log')
    for line in follow(logfile):
        print(line)

##def follow(thefile):
##    logging("f_follow")
##    thefile.seek(0,2)      # Go to the end of the file
##    while True:
##         line = thefile.readline()
##         if not line:
##             sleep(0.1)    # Sleep briefly
##             continue
##         yield line

# Example use
##if __name__ =='__main__':
##    logfile=open('./access-log')
##    for line in follow(logfile):
##        print(line)
##if __name__ == '__main__':
##    logfile = open("./access-log")
##    logging("module main")
##    for line in follow(logfile):
##        print (line)
