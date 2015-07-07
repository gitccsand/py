# -*- coding: utf-8 -*-

'safe b64 decode'

__author__='lhw'

import base64

def safe_base64_decode(e):
    while (len(e)%4)!=0:
        e=e+b'='
    return base64.b64decode(e)

def main():
    x=safe_base64_decode(b'abcd++//PQ')
    assert x==b'i\xb7\x1d\xfb\xef\xff=',x
    x=safe_base64_decode(b'abcd++//PQ==')
    assert x==b'i\xb7\x1d\xfb\xef\xff=',x
    print('Pass')

if __name__=='__main__':
    main()
    



    
    


    

        
        
    
        
        
