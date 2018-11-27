## num++和++num的区别

num++（后面自加）和++num（前面自加）的区别在于自加运算和本行运算的先后顺序不同。

- num++会在本行代码运算后使num自加
- ++num会先使num自加，再运行本行代码

```
var x = 5;
y = x++; //y = 5; x = 6
y = ++x; //y = 6; x = 6
```

## Math对象方法总结

JavaScript中的Math对象用于执行数学任务，Math对象有多个属性和方法。

详情可见[JavaScript Math对象](http://www.w3school.com.cn/jsref/jsref_obj_math.asp)。

利用Math四舍五入，向上取整，向下取整，保留两位小数分别可以写成：

```
const num = 3.456;
let a = Math.round(num);
let b = Math.ceil(num);
let c = Math.floor(num);
let d = Math.round(num * 100) / 100;
```



Math对象属性

| 属性                                                         | 描述                                              |
| ------------------------------------------------------------ | ------------------------------------------------- |
| [E](http://www.w3school.com.cn/jsref/jsref_e.asp)            | 返回算术常量 e，即自然对数的底数（约等于2.718）。 |
| [LN2](http://www.w3school.com.cn/jsref/jsref_ln2.asp)        | 返回 2 的自然对数（约等于0.693）。                |
| [LN10](http://www.w3school.com.cn/jsref/jsref_ln10.asp)      | 返回 10 的自然对数（约等于2.302）。               |
| [LOG2E](http://www.w3school.com.cn/jsref/jsref_log2e.asp)    | 返回以 2 为底的 e 的对数（约等于 1.414）。        |
| [LOG10E](http://www.w3school.com.cn/jsref/jsref_log10e.asp)  | 返回以 10 为底的 e 的对数（约等于0.434）。        |
| [PI](http://www.w3school.com.cn/jsref/jsref_pi.asp)          | 返回圆周率（约等于3.14159）。                     |
| [SQRT1_2](http://www.w3school.com.cn/jsref/jsref_sqrt1_2.asp) | 返回返回 2 的平方根的倒数（约等于 0.707）。       |
| [SQRT2](http://www.w3school.com.cn/jsref/jsref_sqrt2.asp)    | 返回 2 的平方根（约等于 1.414）。                 |

Math对象方法

| 方法                                                         | 描述                                                         |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| [abs(x)](http://www.w3school.com.cn/jsref/jsref_abs.asp)     | 返回数的绝对值。                                             |
| [acos(x)](http://www.w3school.com.cn/jsref/jsref_acos.asp)   | 返回数的反余弦值。                                           |
| [asin(x)](http://www.w3school.com.cn/jsref/jsref_asin.asp)   | 返回数的反正弦值。                                           |
| [atan(x)](http://www.w3school.com.cn/jsref/jsref_atan.asp)   | 以介于 -PI/2 与 PI/2 弧度之间的数值来返回 x 的反正切值。     |
| [atan2(y,x)](http://www.w3school.com.cn/jsref/jsref_atan2.asp) | 返回从 x 轴到点 (x,y) 的角度（介于 -PI/2 与 PI/2 弧度之间）。 |
| [ceil(x)](http://www.w3school.com.cn/jsref/jsref_ceil.asp)   | 对数进行上舍入。                                             |
| [cos(x)](http://www.w3school.com.cn/jsref/jsref_cos.asp)     | 返回数的余弦。                                               |
| [exp(x)](http://www.w3school.com.cn/jsref/jsref_exp.asp)     | 返回 e 的指数。                                              |
| [floor(x)](http://www.w3school.com.cn/jsref/jsref_floor.asp) | 对数进行下舍入。                                             |
| [log(x)](http://www.w3school.com.cn/jsref/jsref_log.asp)     | 返回数的自然对数（底为e）。                                  |
| [max(x,y)](http://www.w3school.com.cn/jsref/jsref_max.asp)   | 返回 x 和 y 中的最高值。                                     |
| [min(x,y)](http://www.w3school.com.cn/jsref/jsref_min.asp)   | 返回 x 和 y 中的最低值。                                     |
| [pow(x,y)](http://www.w3school.com.cn/jsref/jsref_pow.asp)   | 返回 x 的 y 次幂。                                           |
| [random()](http://www.w3school.com.cn/jsref/jsref_random.asp) | 返回 0 ~ 1 之间的随机数。                                    |
| [round(x)](http://www.w3school.com.cn/jsref/jsref_round.asp) | 把数四舍五入为最接近的整数。                                 |
| [sin(x)](http://www.w3school.com.cn/jsref/jsref_sin.asp)     | 返回数的正弦。                                               |
| [sqrt(x)](http://www.w3school.com.cn/jsref/jsref_sqrt.asp)   | 返回数的平方根。                                             |
| [tan(x)](http://www.w3school.com.cn/jsref/jsref_tan.asp)     | 返回角的正切。                                               |
| [toSource()](http://www.w3school.com.cn/jsref/jsref_tosource_math.asp) | 返回该对象的源代码。                                         |
| [valueOf()](http://www.w3school.com.cn/jsref/jsref_valueof_math.asp) | 返回 Math 对象的原始值。                                     |

