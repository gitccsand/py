#!/usr/bin/env python2.7
# -*- coding: utf-8 -*-
'oo module 01'
__author__ = 'lhw'



class Student(object):

    def __init__(self, name, score):
        self.name = name
        self.score = score

    def print_score(self):
        print('%s: %s' % (self.name, self.score))

    def get_grade(self):
        if self.score >= 90:
            return '优秀'
        elif self.score >= 60:
            return '中等'
        else:
            return '及格'

bart = Student('Bart Simpson', 59)
lisa = Student('Lisa Simpson', 87)

print('bart.name =%s' %bart.name)
print('bart.score =%s' %bart.score)
bart.print_score()

print('grade of Bart:%s' %bart.get_grade().decode('utf-8').encode('gbk'))
print('grade of Lisa:%s' %lisa.get_grade().decode('utf-8').encode('gbk'))




            
        
