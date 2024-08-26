import math

class AutomaticDiff:
    def init(self, value, derivative=1.0):
        self.value = value
        self.derivative = derivative

    def add(self, other):
        return AutomaticDiff(self.value + other.value, self.derivative + other.derivative)

    def mul(self, other):
        return AutomaticDiff(self.value * other.value,
                        self.value * other.derivative + self.derivative * other.value)

    def pow(self, power):
        return AutomaticDiff(self.value  power,
                        power * self.value  (power - 1) * self.derivative)

    def exp(self):
        return AutomaticDiff(math.exp(self.value), math.exp(self.value) * self.derivative)

def my_exp_function(x):
    return x.exp()




x_value = AutomaticDiff(1.0)
result = my_exp_function(x_value)
print(f"The value of e^x at x = {x_value.value} is {result}")
print(f"The derivative of e^x at x = {x_value.value} is {result.derivative}")
