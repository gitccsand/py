# -*- coding: gbk -*-
##if 1<2:
##    print '1<2'
##    print 'hello'
##else:
##    print '1>=2'


#print u'��������������(0-150)��'

##prompt=u'��������������(0-150)��'
##age = int(raw_input(prompt))

##age = int(raw_input(u'��������������(0-150)��'))

age = int(raw_input('��������������(0-150)��'))

##age = int(raw_input(u'input your age(0-150):'))

if age: # ��0Ϊ��0Ϊ��
    if age > 150:
        print False
        exit()
    elif age<0: 
        print False
        exit()
    else:
        print True
else:
    print True        


print 'your age is', age

if age >= 18:
    print 'adult'
elif age >= 6:
    print 'teenager'
else:
    print 'kid'
