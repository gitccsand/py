# -*- coding: utf-8 -*-

'io'

__author__='lhw'

##  File IO
def readfile1():
    f=open('d:/codeplace/py/io.txt','r')
    s=f.read()
    print(s)
    f.close()

def readfile2():
    with open('d:\codeplace\py\io.txt','r') as f:
        print(f.read())

def readlines():
    with open('d:\codeplace\py\io.txt','r') as f:
        for line in f.readlines():
            print(line.strip())
##        print('&'.join(f.readlines()))

def readencode():
    with open('d:/codeplace/py/abs.py','r',encoding='utf-8') as f:
        print(f.read())

def ignoreerror():
    with open('d:/codeplace/py/abs.py','r',errors='ignore') as f:
        print(f.read())

def read_write():
    with open('d:/codeplace/py/abs.py','r',encoding='utf-8') as fr:
        with open('d:/codeplace/py/abs_gbk.txt','w',encoding='gbk') as fw:
            for line in fr.readlines():
                fw.write(line)
                
    with open('d:/codeplace/py/abs_gbk.txt','r',encoding='gbk') as fr:
        with open('d:/codeplace/py/abs_utf8.txt','w',encoding='utf-8') as fw:
            fw.write(fr.read())
            
    with open('d:/codeplace/py/abs_utf8.txt','r',encoding='utf-8') as fr:
        print(fr.read())

##String & Byte IO
from io import StringIO
def stringio1():
    fs=StringIO()
    fs.write('hello')
    fs.write(' ,')
    fs.write('world')
    print(fs.getvalue())
    return fs
def stringio2():
    fs=StringIO('Hello\nHi\nGoodbyt')
    for line in fs.readlines():
        print(line)
    for line in fs.readlines():##read后重复read,没有返回
        print(line.trip())
    return fs

from io import BytesIO
def bytesio1():
    fb=BytesIO()
    fb.write('张懂的'.encode('utf-8'))
    print(fb.getvalue())
    return fb

def bytesio2():
    fb=BytesIO(b'\xe5\xbc\xa0\xe6\x87\x82\xe7\x9a\x84')
    b=fb.read()
    b=fb.getvalue()
    print(b)
    print(str(b,encoding='utf-8'))
    return fb

    


def main():
##    readfile1()
##    readfile2()
##    readlines()
##    readencode()
##    ignoreerror()
##    read_write()
##    f = stringio1()
    f = stringio2()
##    f = bytesio1()
##    f = bytesio2()
    
    return f

    


if __name__=='__main__':
    f=main()
    
    
        
        
