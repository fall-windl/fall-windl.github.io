$$第\;1\;关：奇数偶数判断$$

---

```python
x = eval(input())

print(x, "是奇数！" if x & 1 else "是偶数！")
```

---

$$第\;2\;关：一元二次方程求根$$

---

```python
import math

a, b, c = eval(input()), eval(input()), eval(input())

delta = b * b - 4 * a * c
if delta < 0:
    print("方程无实根")
elif delta == 0:
    print("方程有一个实根：{0:.2f}".format(-b / (2 * a)))
else:
    print("方程有两个不同实根：{0:.2f}、{1:.2f}".
          format((-b + math.sqrt(delta)) / (2 * a), (-b - math.sqrt(delta)) / (2 * a)))
```

---

$$第\;3\;关：求最大值$$

---

```python
a = eval(input())
b = eval(input())
c = eval(input())

max_num = max(a, b, c)

print("最大数为：", max_num)
```