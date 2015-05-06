# -*- coding: utf-8 -*-
u=u'汉'
print 'u=',u
print 'u repr',repr(u)# u'\u6c49'
s=u.encode('utf-8')
print 's=',s
print 's repr',repr(s)#'\xe6\xb1\x89'
u2=s.decode('utf-8')
print 'u2=',u2
print 'u2 repr',repr(u2)# u'\u6c49'
 
# 对unicode进行解码是错误的
# s2 = u.decode('UTF-8')
# 同样，对str进行编码也是错误的
# u2 = s.encode('UTF-8')
