import math

class AutoDiff:
    def init(self, value, derivative=1.0):
        self.value = value
        self.derivative = derivative

    def add(self, other):
        return AutoDiff(self.value + other.value, self.derivative + other.derivative)

    def mul(self, other):
        return AutoDiff(self.value * other.value,
                        self.value * other.derivative + self.derivative * other.value)

    def pow(self, power):
        return AutoDiff(self.value  power,
                        power * self.value  (power - 1) * self.derivative)

    def exp(self):
        return AutoDiff(math.exp(self.value), math.exp(self.value) * self.derivative)

def my_exp_function(x):
    return x.exp()
