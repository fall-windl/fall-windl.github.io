$$第\;1\;关：\;\rm{while}\;循环$$

---

$1.\;$设有如下程序段：

```python
k=10
while k:
    k=k-1
    print(k)
```

则下面语句描述中正确的是（**A**）。

**A. while循环执行10次**

---

$2.\;$下列程序运行结果为（**A**）。

```python
k=100
i=0
while k>1:
    k=k//2
    i+=1
print(k,i)
```

**A. 1 6**

---

$$第\;2\;关：\;\rm{for}\;循环$$

---

$1.\;$下面代码的输出结果是（**B**）。

```python
sum = 1.0
for num in range(1,4):
    sum+=num
print(sum)
```

**B. 7.0**

---

$2.\;$选出对下列语句不符合语法要求的表达式（**D**）。

```python
for var in ____________:
    print var
```

**D. 10**

---

$$第\;3\;关：\rm{continue}\;与\;\rm{break}\;语句$$

---

$1.\;$下面代码的执行结果是（**A**）。

```python
i=1
while i%5!=0:
    print(i,end=" ")
    if i%2==0:
        break
    i=i+1 
```

**A. 1 2**

---

$2.\;$下列程序输出结果是（**B**）。

```python
sum=0
for i in range(10):
    if(i%2):
        continue
    sum=sum+i
print(sum) 
```

**B. 20**

---

$$第\;4\;关：\rm{else}\;子句$$

---

$1.\;$下面代码的执行结果为（**A**）。

```python
for i in range(1,6,2):
    print("book")
    break
else:
    print(i) 
```

**A. book**

---

$2.\;$分析程序运行结果（**B**）。

```python
for i in range(10):
    if i%2==0:
        continue
    else:
        print(i, end=",")
else:
    print(i)
```

**B. 1,3,5,7,9,9**

---

$$第\;5\;关：循环嵌套$$

---

$1.\;$下面代码的执行结果为（**B**）。

```python
for i in "123":
    for j in range(3):
        print(i,end="")
```

**B. 111222333**

---

$2.\;$下面代码的输出结果是（**B**）。

```python
for s in "abc":
    for i in range(3):
        print (s,end="")
        if s=="c":
            break
```

**B. aaabbbc**