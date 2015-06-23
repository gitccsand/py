#!/usr/bin/env python2.7
# -*- coding: utf-8 -*-
'oo module 01'
__author__ = 'lhw'

class student(object):
    def __init__(self,name,age,score):
        self.name=name
        self.age=age
        self.score=score
    def printAge(self):
        print('%s %d score is %d' %(self.name,self.age,self.score))
    def getGrade(self):
        if self.score>80:
            print('A')
        elif self.score>60:
            print('B')
        else:
            print('C')
            

##Tom = student('Tom',13,89)
##
##Tom.printAge()
##Tom.getGrade()
##
##Hee = student('Hee',25,78)
##
##Hee.age=100

##class Student(object):
##
##    def __init__(self, name, score):
##        self.name = name
##        self.score = score
##
##    def print_score(self):
##        print('%s: %s' % (self.name, self.score))
##
##    def get_grade(self):
##        if self.score >= 90:
##            return 'A'
##        elif self.score >= 60:
##            return 'B'
##        else:
##            return 'C'
##
##bart = Student('Bart Simpson', 59)
##lisa = Student('Lisa Simpson', 87)
##
##print('bart.name =', bart.name)
##print('bart.score =', bart.score)
##bart.print_score()
##
##print('grade of Bart:', bart.get_grade())
##print('grade of Lisa:', lisa.get_grade())




            
        
