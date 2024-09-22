$$第\;1\;关：单分支结构$$

---

$1.\;$下列$\;\rm{Python\;}$程序的运行结果是（**A**）。

```python
x = 0
y = True
if y: print(x<y and 'A'<'B')
```

**A. True**

---

$2.\;$键盘输入数字$\;8\;$，以下代码的输出结果是（**A**）。

```python
n = eval(input("请输入一个整数: "))
s =0
if n >=7:
    n -=1
    s =1
if n <7:
    n -=1
    s =2
print(s,n)
```

**A. 1,7**

---

$$第\;2\;关：双分支结构$$

---

$1.\;$分析下列语句运行结果（ **A** ）。

```python
a=3
b=3
if (a==b):
    print("相等")
else:
    print("不相等")
```

**A. 相等**

---

$2.\;$用$\;\rm{if}\;$语句表示下面分段函数$\;f(x)\;$，不正确的代码段是（**C**）。

<p>
$$
\begin{equation}
f(x)=\begin{cases}
        x-1 & x\geq 1\\
        2x & x<1
    \end{cases}
\end{equation}
$$
</p>

<table>
    <tr>
        <td>
            <b>C. </b><br/>&emsp;
        </td>
        <td>
            <b>if x>=1: f=x-1</b><br/>
            <b>f=2*x</b>
        </td>
    </tr>
</table>

---

$$第\;3\;关：多分支结构$$

---

$1.\;$有如下代码，当输入$\;4\;$时，输出结果是（**B**）。

```python
x=int(input())
if x>5:
    print("x>5")
elif x>3:
    print("3<x<=5")
else:
    print("x<=3")
```

**B.**
$\boldsymbol{3<x\leq 5}$

---

$2.\;$以下程序的输出结果是（**D**）。

```python
a = 30
b = 1
if a >=10:
    a = 20
elif a>=20:
    a = 30
elif a>=30:
    b = a
else:
    b = 0
print('a={}, b={}'.format(a,b))
```

**D. a=20, b=1**

---

$$第\;4\;关：选择结构嵌套$$

---

$1.\;$以下程序的输出结果是（**C**）。

```python
a,x,y=100,10,20
if x<y:
    if y==10:
        a=1
    elif x==10:
        a=2
print(a) 
```

**C. 2**

---

$2.\;$当$\;\rm{a,b,c,d=1,3,5,4}\;$时，执行完下面一段程序后$\;\rm{x}\;$的值为（**B**）。

```python
if a<b:
    if c<d:
        x=1
    elif a<c:
        if b<d:
            x=2
        else:
            x=3
    else:
        x=6
else:
    x=7 
```

**B. 2**