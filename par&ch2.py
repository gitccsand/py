# -*- coding: utf-8 -*-

'meta class'

__author__='lhw'

class Field(object):
##    def __init__(self):
##        self._name=''
##        self._column_type=''
    def __init__(self,name,column_type):
	    self._name=name
	    self._column_type=column_type
    def __str__(self):
	    return '<%s:%s>'%(self.__class__.__name__,self._name)
    def hello(self):
        print('name:%s,column_type:%s'%(self._name,self._column_type))

class StringField(Field):
    def __init__(self,name):
        super(StringField,self).__init__(name,'varchar2(100)')

class IntegerField(Field):
    def __init__(self,name):
        super(IntegerField,self).__init__(name,'number(10,0)')
##   some test     
class TestField1(Field):
    pass
class TestField2(Field):
    def __init__(self):
        super(TestField2,self).__init__()
        print ('Test3:override init,call par init')
class TestField3(Field):
    def __init__(self):
        print ('Test2:override init')




def main():
    sf=StringField('uname');
    sf.hello()
##    print(sf.name)
##    print(sf.column_type)
    tf1=TestField1('uname','dfsedf')
    tf1.hello()
##    print(tf1.name)
##    print(tf1.column_type)
    tf2=TestField2()
    tf2.hello()    
##    print(tf2.name)
##    print(tf2.column_type)
    tf3=TestField3()
    tf3.hello()
    
    

    
    

if __name__=='__main__':
    main()

    
