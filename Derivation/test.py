from sympy import *
calculate =  diff((x ** 3) / (x ** 2)  )
calculate = diff(x ** cos(x) * x)

#------------------------------------------------------------
from sympy import symbols, diff

x = symbols('x')
f = 3*x**2 + 2*x + 1
f1 = 4*x**2 + 3*x**3 + 2*x
f_prime = diff(f1, x)
print(f_prime)

# Counting Factorial
n = int(input("enter n : ")) 
fact = factorial(n)

print(fact)
