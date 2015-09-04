# -*- coding: utf-8 -*-

'serialization'

__author__='lhw'

import json
import logging

class Student(object):

    @classmethod
    def hook(cls,d):
        return Student(d['name'],d['age'],d['score'])
    
    def __init__(self,name,age,score):
        self._name=name
        self._age=age
        self._score=score

    def to_dict(self,*args):
        return {
            'name':self._name,
            'age':self._age,
            'score':self._score
            }
    
    def json_dumps(self):
        try:
            json_str=json.dumps(self,default=lambda obj:obj.__dict__)            
        except AttributeError as e:            
            print('Student json_dump method AttributeError:%s'%e)
        finally:
            try:
                json_str=json.dumps(self,default=self.to_dict)
            except TypeError as e:
                print('Student json_dump method TypeError:%s'%e)
                return ''
        return json_str

    def hello(self):
        print('hello!')
        
    
         
##Student.__new__(
json_str='{"age": 20, "score": 88, "name": "Bob"}'
print('json_str :%s'%json_str)

try:    
    s=json.loads(json_str,object_hook=Student.hook)
    print('loads json_tr using class hook method::%s'%s)
    print('call loaded obj.hello()')
    s.hello()
    json_str=s.json_dumps()
    print('dumps obj using obj.json_dumps :%s'%json_str)       
except TypeError as e:
    logging.exception(e)
except AttributeError as e:
    logging.exception(e)
    

##print('object is :%s'%s)
try:
    print(json.dumps(s))
except TypeError as e:
    print('dumps obj without default,TypeError:%s'%e)
    json_str=json.dumps(s,default=lambda x:x.__dict__)
    print('dumps obj using obj.__dict__: %s'%json_str)
finally:
    json_str=json.dumps(s,default=s.to_dict)
    print('dumps obj using obj.to_dict: %s'%json_str)

def Student_hook(d):
    return Student(d['name'],d['age'],d['score'])
try:
    print('loads json_str using class hook method:%s'%json.loads(json_str,object_hook=Student.hook))
except TypeError as e:
    print(e)
finally:
    print('loads json_str using hook func:%s'%json.loads(json_str,object_hook=Student_hook))

##if __name__=='__main__':
##    main()




    
    


    

        
        
    
        
        
