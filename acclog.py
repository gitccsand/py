# -*- coding: utf-8 -*-

'access-log'

__author__='lhw'

def non_generator_func():
    '''
    分析web server的log文件来判断所有传输的字节数
    Non-Generator的写法：用一个for循环
    :return:
    '''
    wwwlog = open("access-log")
    total = 0

    for line in wwwlog:
        # 获取字节数的字符串表示
        bytestr = line.rsplit(None, 1)[1]
        if bytestr != "-":
            total += int(bytestr)

    print ("Total:%d" % total)

def generator_func():
    wwwlog = open("access-log")
    # 采用生成器表达式(Generator expression),返回一个Generator对象
    bytecolumn = [line.rsplit(None, 1)[1] for line in wwwlog]
    bytes = [int(x) for x in bytecolumn if x != "-"]

    # 最后一步才进行计算
    print ("Total:%d"% sum(bytes))
    
if __name__=='__main__':

    generator_func()    
##    non_generator_func()



    
    


    

        
        
    
        
        
