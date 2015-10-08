# countdown.py
#
# A simple generator function

def countdown(n):
    print ("Counting down from %d"%n)
    while n > 0:
        newvalue =  (yield n)
        if newvalue is not None:
            n = newvalue
        else:
            n -= 1
    print ("Done counting down")

# Example use
if __name__ == '__main__':
    c=countdown(10)
    for n in c:
        if n==5:
            c.send(3)
        print(n)
