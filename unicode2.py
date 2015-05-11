# -*- coding: utf-8 -*-

##死循环
while True:
    something = raw_input(u'大家好,输入一些字符:'.encode('gbk')
    print something
##    print something.decode('gbk').encode('gbk')
    if something=='0':
        exit()
