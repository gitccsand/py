# -*- coding: utf-8 -*-

'meta class'

__author__='lhw'

def upper_attr(future_class_name,future_class_parents,future_class_attrs):

    attrs=((name,value) for name,value in future_class_attrs.items() if not name.startwith('__'))
    uppercase_attrs = dict((name.upper(),value) for name,value in attrs)
    print(uppercase_attrs)
    return type(future_class_name,future_class_parents,uppercase_attrs)

##__metaclass__=upper_attr

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
    name=StringField('Robin')
    name.hello()
    print(hasattr(name,'name'))


if __name__=='__main__':
    main()

    
    

    
    
