Python 3.4.3 (v3.4.3:9b73f1c3e601, Feb 24 2015, 22:43:06) [MSC v.1600 32 bit (Intel)] on win32
Type "copyright", "credits" or "license()" for more information.
>>> 
>>> class Screen(object):
	@property
	def width(self):
		return self.width
	@property
	def height(self):
		return self.height
	@width.setter(self,width):
		
SyntaxError: invalid syntax
>>> class Screen(object):
	@property
	def width(self):
		return self.width
	@property
	def height(self):
		return self.height
	@width.setter
	def width(self,width):
		if not isinstance(width,int):
			raise Valueerror('width must be an integer!')
		self.width=width

		
>>> class Screen(object):
	def __init__(self):
		self.width=0
		self.height=0
	@property
	def width(self):
		return self.width
	@property
	def height(self):
		return self.height
	@width.setter
	def width(self,width):
		if not isinstance(width,int):
			raise Valueerror('width must be an integer!')
		self.width=width
	@height.setter
	def height(self,height):
		if not isinstance(height,int):
			raise Valueerror('height must be an integer!')
		self.height=height
	@property
	def resolution(self):
		rerurn self.widht*self.height
		
SyntaxError: invalid syntax
>>> class Screen(object):
	def __init__(self):
		self.width=0
		self.height=0
	@property
	def width(self):
		return self.width
	@property
	def height(self):
		return self.height
	@width.setter
	def width(self,width):
		if not isinstance(width,int):
			raise Valueerror('width must be an integer!')
		self.width=width
	@height.setter
	def height(self,height):
		if not isinstance(height,int):
			raise Valueerror('height must be an integer!')
		self.height=height
	@property
	def resolution(self):
		return self.widht*self.height

	
>>> s=Screen()
Traceback (most recent call last):
  File "<pyshell#22>", line 1, in <module>
    s=Screen()
  File "<pyshell#21>", line 3, in __init__
    self.width=0
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
  File "<pyshell#21>", line 15, in width
    self.width=width
RuntimeError: maximum recursion depth exceeded
>>> class Screen(object):
##	def __init__(self):
##		self.width=0
##		self.height=0
	@property
	def width(self):
		return self.width
	@property
	def height(self):
		return self.height
	@width.setter
	def width(self,width):
		if not isinstance(width,int):
			raise Valueerror('width must be an integer!')
		self.width=width
	@height.setter
	def height(self,height):
		if not isinstance(height,int):
			raise Valueerror('height must be an integer!')
		self.height=height
	@property
	def resolution(self):
		rerurn self.widht*self.height
		
SyntaxError: invalid syntax
>>> 
>>> 
>>> 
>>> 
>>> 
>>> 
>>> class Screen(object):
##	def __init__(self):
##		self.width=0
##		self.height=0
	@property
	def width(self):
		return self.width
	@property
	def height(self):
		return self.height
	@width.setter
	def width(self,width):
		if not isinstance(width,int):
			raise Valueerror('width must be an integer!')
		self.width=width
	@height.setter
	def height(self,height):
		if not isinstance(height,int):
			raise Valueerror('height must be an integer!')
		self.height=height
	@property
	def resolution(self):
		return self.widht*self.height

	
>>> class Screen(object):
##	def __init__(self):
##		self.width=0
##		self.height=0
	@property
	def width(self):
		return self.width
	@property
	def height(self):
		return self.height
	@width.setter
	def width(self,width):
		if not isinstance(width,int):
			raise Valueerror('width must be an integer!')
		self.width=width
	@height.setter
	def height(self,height):
		if not isinstance(height,int):
			raise Valueerror('height must be an integer!')
		self.height=height
	@property
	def resolution(self):
		return self.width*self.height

	
>>> s=Screen()
>>> s.width=1024
Traceback (most recent call last):
  File "<pyshell#35>", line 1, in <module>
    s.width=1024
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
  File "<pyshell#33>", line 15, in width
    self.width=width
RuntimeError: maximum recursion depth exceeded
>>> class Screen(object):
	def __init__(self):
		self._width=0
		self._height=0
	@property
	def width(self):
		return self._width
	@property
	def height(self):
		return self._height
	@width.setter
	def width(self,width):
		if not isinstance(width,int):
			raise Valueerror('width must be an integer!')
		self._width=width
	@height.setter
	def height(self,height):
		if not isinstance(height,int):
			raise Valueerror('height must be an integer!')
		self._height=height
	@property
	def resolution(self):
		return self._width*self._height

	
>>> s=Screen()
>>> s.width=1024
>>> s.height=768
>>> print('width=%d height=%d resolution=%d'%(s.width,s.height,s.resolution))
width=1024 height=768 resolution=786432
>>> s.resolution=23432
Traceback (most recent call last):
  File "<pyshell#42>", line 1, in <module>
    s.resolution=23432
AttributeError: can't set attribute
>>> 
