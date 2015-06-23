Python 2.7.9 (default, Dec 10 2014, 12:24:55) [MSC v.1500 32 bit (Intel)] on win32
Type "copyright", "credits" or "license()" for more information.
>>> class Animal(object):
	def run(oo):
		print('Animal is running')

>>> class Dog(Animal):
	def run(oo):
		print('Dog is running')

		
>>> class Cat(Animal):
	pass

>>> dog=Dog()
>>> dog.run()
Dog is running
>>> cat=Cat()
>>> cat.run()
Animal is running
>>> class Dog(Animal):
	def run(self):
		print('Dog is running')
	def eat(self):
		print('Eating meat..')

		
>>> dog=Dog()
>>> dog.eat()
Eating meat..
>>> dog.run()
Dog is running
>>> class Animal(object):
	def run(self):
		print('Animal is running')

		
>>> class Cat(Animal):
	def run(self):
		print('Cat is running')

		
>>> class Cat(Animal):
	def run(self):
		print('Cat is running')

		
>>> cat=Cat()
>>> cat=Cat()
>>> cat.run()
Cat is running
>>> dog.run()
Dog is running
>>> a=list()
>>> b=Animal()
>>> c=Dog()
>>> isinstance(a,list)
True
>>> isinstance(b,Animal)
True
>>> isinstance(c,Animal)
False
>>> class Dog(Animal):
	def run(self):
		print('Dog is running')
	def eat(self):
		print('Eating meat..')

		
>>> c=Dog()
>>> isinstance(c,Animal)
True
>>> type(c)
<class '__main__.Dog'>
>>> isinstance(b,Dog)
False
>>> def run_2(Animal()):
	
SyntaxError: invalid syntax
>>> def run_2(Animal):
	pass

>>> def run_twice(animal):
	animal.run()
	animal.run()

	
>>> run_twice(Dog())
Dog is running
Dog is running
>>> run_twice(Cat())
Cat is running
Cat is running
>>> class Tortoise(Animal):
	def run(self):
		print('Tortorise is running slowly')

		
>>> run_twice(Tortoise())
Tortorise is running slowly
Tortorise is running slowly
>>> class Timer(Object):
	def run(self):
		print('Start')

		

Traceback (most recent call last):
  File "<pyshell#70>", line 1, in <module>
    class Timer(Object):
NameError: name 'Object' is not defined
>>> class Timer(object):
	def run(self):
		print('Start')

		
>>> run_twice(Timer())
Start
Start
>>> 
