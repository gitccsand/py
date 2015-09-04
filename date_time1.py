# -*- coding: utf-8 -*-

'date time'

__author__='lhw'

from datetime import datetime,timezone,timedelta

import logging

import re

tz_str_re=re.compile(r'^UTC([\+\-]+([0-9]|2[0-3]|1[0-9]|0[0-9])+):(0*)$')

def get_tz_hours(tz_str):

    tz_str_match=tz_str_re.match(tz_str)
    
    if tz_str_match==None:
        print('tz_str format not match')
        return 0
    
    tz_hours=tz_str_match.group(1)
    
    print('时区数：%s'%tz_hours)

    return int(tz_hours)
    

def to_timestamp(dt_str,tz_str):

    try:
        dt=datetime.strptime(dt_str,'%Y-%m-%d %H:%M:%S')
    except ValueError as e:
        logging.exception(e)
        return None
    
    hours=get_tz_hours(tz_str)    
           
    tz=timezone(timedelta(hours=hours))    
    
    dt_tz=dt.replace(tzinfo=tz)
    
    timestamp=dt_tz.timestamp()
    
    return timestamp
    

def main():
    t1 = to_timestamp('2015-6-1 08:10:30','UTC+7:00')
    assert t1 == 1433121030.0, t1
    
    t2 = to_timestamp('2015-5-31 16:10:30', 'UTC-09:00')
    assert t2 == 1433121030.0, t2

    print('All pass')

if __name__=='__main__':
    main()
    



    
    


    

        
        
    
        
        
