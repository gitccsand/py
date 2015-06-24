# -*- coding: utf-8 -*-

'io'

__author__='lhw'

import os
print(os.environ)
for k,v in os.environ.items():
	print('%s=%s'%(k,v))
print(os.path.join('d:\workspace\py','os'))
os.mkdir(os.path.join('d:\workspace\py','os'))
print(os.listdir ('d:\workspace\py'))
os.rmdir(os.path.join('d:\workspace\py','os'))
try:
    os.listdir('d:\workspace\py\os')
except FileNotFoundError as e:
    print(e)
print('===============')
print(os.path.split('d:/workspace/py/access_test.py'))
print(os.path.splitext('d:/workspace/py/access_test.py'))
print(os.path.splitext('d:/workspace/py/access_test.py')[1])
print(os.path.abspath('.'))
print([x for x in os.listdir('.') if os.path.isdir(x)])
with open('./abs.py','r',encoding='utf-8') as fr:
        with open('./abs_gbk.txt','w',encoding='gbk') as fw:
            for line in fr.readlines():
                fw.write(line)
os.rename('d:/workspace/py/abs_gbk.txt','d:/workspace/py/abs_gbk_bak.txt')
print([x for x in os.listdir('.') if os.path.isfile(x) and 'abs' in os.path.splitext(x)[0]])
os.remove('d:/workspace/py/abs_gbk_bak.txt')
print([x for x in os.listdir('.') if os.path.isfile(x) and 'abs' in os.path.splitext(x)[0]])
##import shutil

