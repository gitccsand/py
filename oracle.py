# -*- coding: utf-8 -*-

'cx_Oracle'

__author__='lhw'



def main():
    import cx_Oracle
    ora_ip='10.46.131.78'
    ora_port='1521'
    ora_sid='money'
    ora_user='emssys'
    ora_pwd='iop456'
    
    dsn=cx_Oracle.makedsn(ora_ip,ora_port,ora_sid)
    print(dsn)
    conn=cx_Oracle.connect(ora_user,ora_pwd,dsn)
    

if __name__=='__main__':
    main()
    



    
    


    

        
        
    
        
        
