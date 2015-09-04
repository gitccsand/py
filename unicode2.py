# -*- coding: utf-8 -*-

##死循环
while True:
##    something = input(u'大家好,输入一些字符:'.encode('gbk'))
    something = input('大家好,输入一些字符:')
    print (something)
##    something = raw_input(u'no encod unicode大家好,输入一些字符:')
##    print something
    something = input('utf-8大家好,输入一些字符:')
    print (something)
##    print something.decode('gbk').encode('gbk')
    if something=='0':
        exit()
