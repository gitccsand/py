# -*- coding: utf-8 -*-

'meta class'

__author__='lhw'

class Field(object):
    def __init__(self,name,column_type):
	    self.name=name
	    self.column_type=column_type
    def __str__(self):
	    return '<%s:%s>'%(self.__class__.__name__,self.name)
    def hello(self):
        print('name:%s,column_type:%s'%(self.name,self.column_type))

class StringField(Field):
    def __init__(self,name):
        super(StringField,self).__init__(name,'varchar2(100)')

class IntegerField(Field):
    def __init__(self,name):
        super(IntegerField,self).__init__(name,'number(10,0)')



def main():
    pass
    
    

    
    

if __name__=='__main__':
    main()

    
