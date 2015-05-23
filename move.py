# -*- coding: utf-8 -*-

import math

def move(x, y, step, angle=0):
    nx = x + step * math.cos(angle)
    ny = y - step * math.sin(angle)
    return nx, ny

def call_move():
    return move(0,0,100,math.pi/6)

h,v = call_move()

print h,v

r = call_move()

print r


