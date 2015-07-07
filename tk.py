# -*- coding: utf-8 -*-

'tk'

__author__='lhw'

from tkinter import *
import tkinter.messagebox as messagebox

class Application(Frame):
    def __init__(self, master=None):
        Frame.__init__(self, master)
        self.pack()
        self.createWidgets()

    def createWidgets(self):
##        self.helloLabel = Label(self, text='Hello, world!')
##        self.helloLabel.pack()        
##        self.quitButton = Button(self, text='Quit', command=self.quit)
##        self.quitButton.pack()    
        self.nameInput = Entry(self)
        self.nameInput.pack()
        self.quitButton = Button(self, text='Quit', command=self.hello)
        self.quitButton.pack()

    def hello(self):
        name = self.nameInput.get() or 'world'
        messagebox.showinfo('Message', 'Hello, %s' % name)


def main():
    app=Application()
    #设置窗口标题
    app.master.title("Hello World")
    #主消息循环
    app.mainloop()

if __name__=='__main__':
    main()
    



    
    


    

        
        
    
        
        
