# -*- coding: utf-8 -*-

'web app'

__author__='lhw'

def application(environ, start_response):
##    print(environ)
    start_response('200 OK', [('Content-Type', 'text/html')])
    body = '<h1>Hello, %s!</h1>' % (environ['PATH_INFO'][1:] or 'web')
    body = body+'<br/><h1>%s</h1>' % (environ['QUERY_STRING'][0:] or 'null')
    return [body.encode('utf-8')]

##if __name__=='__main__':
##    main()
    



    
    


    

        
        
    
        
        
