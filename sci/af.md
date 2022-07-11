---
title: Advanced Functions
description: Notes for my G12 Advanced Functions course, taken during the summer of 10th grade. They're here just in case I need to review.
date: 07-09-2022
tex: true
chart: true
graph: true
--- 

I gotta figure out the best way for me to take notes, thought this might be a decent start. Also, I need to figure out how to implement graphs + equations on this site.

<hr>

# (Re)Introduction to Functions

**[07-10-2022]**: 3 classes in, I'm still in the "preface" chapter of the course, so we're just going over some old, but required functions content.

## Relations and Functions:
- A (binary) relation defines some relation between element in two sets (most often known as: domain (x) and range (y))
- A relation is a more generalized version of a function with fewer restrictions:
    - A relation can have multiple outputs for a single input (x -> y<sub>1</sub>, y<sub>2</sub>... y</sub>n</sub>)
    - A function can only have one output for a single input (x<sub>n</sub> -> y<sub>n</sub>)
- Essentially, functions are special cases of relations
    - All functions are relations, but not all relations are functions

<center>

**Relation Example:**
<div class="mermaid">
graph LR;
A(x<sub>1</sub>)-->C(y<sub>1</sub>);
A-->D(y<sub>2</sub>);
B(x<sub>2</sub>)-->D;
classDef green fill:#9f6,stroke:#333,stroke-width:1px;
class A,B,C,D,E green;
</div>

**Function Example:**
<div class="mermaid">
graph LR;
A(x<sub>1</sub>)-->C(y<sub>2</sub>);
B(x<sub>2</sub>)-->D(y<sub>1</sub>);
classDef green fill:#9f6,stroke:#333,stroke-width:1px;
class A,B,C,D,E,F green;
</div>
</center>

**All functions are relations, but not all relations are functions.**

To check if a graph is a function, we most commonly perform the vertical line test. The vertical line test is a visual way of affirming whether or not one x-value maps to multiple y-values. 

Ex: for the relation: $$y = f(x) = \sqrt{x}$$, for every positive integer: x; y will have both positive and negative values, making f(x) a relation, not a function (when x=4: y=2, -2).

## Domain and Range:
Domain (inputs [x]) and Range (outputs [y]) are the set of **all** possible values that can be input and output from a function. 

<div class="mermaid">
graph LR;
A(domain: x)-- computation --> B("range: f(x)")
</div>

### Describing Intervals:
An interval is a set of real numbers containing all real numbers between the 2 endpoints of the set. Intervals can be described in many different forms:

**Set Notation:** Set notation is the algebraic way of describing a set. 

<center>
{ x | x < 8, x ∈ R }

Through this notation, we understand that the set ***X*** is a set containing all real numbers less than 8.
</center>

**Number Line:**
We can display the interval on a number line visually. 

<img style="width: 30%" src="https://dr282zn36sxxg.cloudfront.net/datastreams/f-d%3A548d7a51480b1d99d01254e8f5463abcc8af327123a2fa767079697d%2BIMAGE_TINY%2BIMAGE_TINY.1"/>

**Interval Notation:**
We can also use a special notation called interval notation:
<center>
{ x ∈ (-∞, 8), x ∈ R}

Once again, through this notation, we understand that the set ***X*** is a set containing all real numbers less than 8.

There are special brackets in interval notation that allow for the concise declaration of intervals.

| Bracket | Description |
| ------- | ----------- |
| (a,b) | a < x < b|
| (a, b] | a < x ≤ b|
| [a, b) | a ≤ x < b |
| [a, b] | a ≤ x ≤ b |

The square bracket ([]) means equal to, while the round brackets (()) mean... not equal to.
</center>

### Increasing and Decreasing Functions

Increasing and decreasing functions are relatively self-explanatory. 

A function f(x) increases within an interval (a,b) when x<sub>1</sub>, x<sub>2</sub> ∈ (a,b) and x<sub>1</sub> < x <sub>2</sub> and f(x<sub>1</sub>) ≤ f(x<sub>2</sub>).

Inversely, a function f(x) decreases within an interval (a,b) when x<sub>1</sub>, x<sub>2</sub> ∈ (a,b) and x<sub>1</sub> < x<sub>2</sub> and f(x<sub>2</sub>) ≤  f(x<sub>1</sub>).

This is just to say, within an interval (a,b), as x increases, in an increasing function y also increases, and vise versa.

### Local Minima and Maxima

A local maximum is a point where the y-value is greater or equal to all other y-values of all other points in proximity. For example: as the function f(x) changes from increasing to decreasing, it often creates a local maximum.

A local minimum is a point where the y-value is less than or equal to all other y-values of all other points in proximity. For example: as the function f(x) changes from decreasing to increasing, it often creates a local minimum.

If there's more than one local minimum/maximum, they're referred to as minima/maxima.

### End Behavior of Functions
The end behavior of functions refers to what happens to the y-values as x approaches -∞ and ∞ (really small and large values). 

"As x->∞" and "As x->-∞".

For example: in the function: y = f(x) = x<sup>2</sup>. 

As x->∞, y->∞ and as x->-∞, y->∞.

## Composite Functions
Composite functions are the results of combining two or more functions. An input goes through an initial function f(x), and then the output of that function becomes the input for another function, and so on.

<div class="mermaid">
    graph LR;
    A[x]--"f"-->B["f(x)"]
    B--"g"-->C["g(f(x))"];
</div>

<center>
or the other way around
</center>

<div class="mermaid">
    graph LR;
    A[x]--"g"-->B["g(x)"]
    B--"f"-->C["f(g(x))"]
</div>

Example: 

$$g(x)=2x$$
$$f(x)=x^2$$
$$ f \circ g: $$ 
$$ f(g(x)) = f(2x) = (2x)^2 = 4x^2$$

## Transformations

Transformations of functions can be attributed towards 4 variables that modify the original base function. The transformed function can be:
- shifted in any direction: up, down, left, right
- stretched/compressed
- a combination of multiple individual transformations.

These transformations are best visualized against base functions (base functions are the most simple, non-modified forms of common functions (such as the quadratic base function: f(x) = x<sup>2</sup>))

### Base Functions

Here are some of the most common base functions:

<div style="display: flex; justify-content: center">
<canvas id="q" class="chart-js"></canvas>
<canvas id="c" class="chart-js"></canvas>
<canvas id="s" class="chart-js"></canvas>
<canvas id="r" class="chart-js"></canvas>
<canvas id="e" class="chart-js"></canvas>
<canvas id="a" class="chart-js"></canvas>
</div>



### Types of Transformations

There are 4 main types of transformations:
- Vertical stretch and translation (up, down)
- Horizontal stretch translation (right, left)

Only stretch is mentioned as compression is simply stretch within a certain range.

#### Vertical and Horizontal Translation
Translations are transformations that shift all points found on a function in a certain direction, without changing the shift/orientation of the function.

**Vertical Translation:** 
$$y = f(x) + k $$

<div style="display: flex; justify-content: center">
<canvas style="max-width: 50%" id="qvt" class="chart-js"></canvas>
</div>

A vertical translation by k units upwards. If k is negative, the function is shifted downwards. This is because in the translation f(x) + k, only the result of the function f(x) is being affected, thus only affecting the range. The function f(x) + k transforms the pair: (x,y) to (x, y+k).

**Horizontal Translation:**
$$y = f(x-h) $$

<div style="display: flex; justify-content: center">
<canvas style="max-width: 50%" id="qht" class="chart-js"></canvas>
</div>

A horizontal translation by h units to the right. If h is negative, the function is shifted to the left. This shift is due to the x-value being modified before being inputted into the function, therefore causing the result of the function to be mapped to a different result in the initial f(x) function.

For example, in the function: $$f(x) = (x-5)^2$$

<div class="mermaid">
    graph TD;
    A["f(x) = x<sup>2</sup>"]-->B["x = 2"]-->C[4];
    D["f(x) = (x-5)<sup>2</sup>"]-->E["x = 7"]-->C
</div>

Positive values of h in the equation (x-h) cause the function to shift to the right because larger values of x map to the smaller, original values.

<div class="mermaid">
    graph LR
        subgraph "result"
        d1[1]
        d2[4]
        d3[9]
        d4[16]
        d5[25]
        end
        subgraph "f(x+1)<sup>2</sup>"
        c1[0]
        c2[1]
        c3[2]
        c4[3]
        c5[4]
        end
        subgraph "f(x-2)<sup>2</sup>"
        b1[3]
        b2[4]
        b3[5]
        b4[6]
        b5[7]
        end
        subgraph "f(x)<sup>2</sup>"
        a1[1]
        a2[2]
        a3[3]
        a4[4]
        a5[5]
        end
        a1---b1---c1---d1
        a2---b2---c2---d2
        a3---b3---c3---d3
        a4---b4---c4---d4
        a5---b5---c5---d5
</div>

During a horizontal transformation, the function f(x-h) transforms the pair: (x,y) to (x+h, y).

**Vertical Stretch:** 
$$y = af(x)$$


<div style="display: flex; justify-content: center">
<canvas style="max-width: 50%" id="qvs" class="chart-js"></canvas>
</div>

A vertical stretch by a scalar of a. If a < 1, the "stretch" becomes a compression to the function. If a < 0, the function is reflected across the x-axis and then stretched by a scalar of |a|. Much like the vertical translation, the scalar is modifying the result of the function, not the input, so the y-value changes. The result of a vertical stretch of function af(x) transforms the pair: (x,y) to (x, ay).

**Horizontal Stretch:**

$$y = f(bx)$$

<div style="display: flex; justify-content: center">
<canvas style="max-width: 50%" id="qhs" class="chart-js"></canvas>
</div>

A horizontal stretch by a scalar of 1/b. If b > 1, the initial function is compressed. Similar to the vertical stretch scalar (a), if b < 0, the function is reflected across the y-axis, and then stretched by a scalar of 1/b. Similar to the horizontal translation, the scalar is modifying the input of the function, so it's the x-value that changes, causing a modification in the y-value. The result of a horizontal stretch of function f(bx) transforms the pair (x,y) into (x/b,y).

This means that for every x-value in the original function f(x), the input must be x/b so that when put through the modified function: 

$$ y = f(bx) $$
$$ y = f(b(\frac{x}{b})) $$
$$ y = f(x) $$

This is why, the larger the value of scalar b, the more compressed (tighter) the graph becomes.

### Combining all Transformations

$$y = af(b(x-h))+k $$

Since the transformations are done to the existing function, and don't modify the position of any values, they should be done last. Remember: if you shift a function, and then compress/stretch it, if stretching is done algebraically, the resulting function won't be correct.

Here is the flow chart for order of transformations:
<div class="mermaid">
    graph TB;
    A["f(x)"]-->B["Horizontal stretch by factor of 1/b to form points at: (x/b, y)"];
    B-->C["If b < 0, reflect across y-axis"];
    B-->D["Vertical stretch by factor of a to form points at: (x/b, ay)"];
    C-->D;
    D-->E["If a < 0, reflect across x-axis"];
    E-->F["Horizontal translation of k units up and h units right to form: (x/b + h, ay + k)"];
    D-->F;
    F-->G["Final function created: y = af(b(x-h))+k where points map to: (x/b + h, ay + k)"];
</div>

### Even and Odd Functions

Even and odd functions are... relatively self-explanatory. Even functions are functions where the power is even, and odd functions are functions where the power is odd.

For example: 

x<sup>3</sup> is odd and x<sup>4</sup> is even.

**Even Functions:**
Even functions are symmetrical about the y-axis, meaning that f(x) = f(-x). This is because negative numbers to any even power are the same as their absolute values.

**Odd Functions:** 
Odd functions posses rotational symmetry about the origin. Rotation an odd function about the origin by 180deg maps the function onto itself, meaning that -f(x) = f(-x). This is because -1 to the any odd power is -1, meaning that f(-x) can be easily expanded to -f(x).

<script>
var l = ["q", "c", "s", "r", "e", "a"];

function genData(exp, l1, l2, step, desc) {
    var xd=[], yd=[];
    for (let x=l1; x <= l2; x+=step) {
        xd.push(x);
        yd.push(eval(exp));
    }
    return [xd, yd, desc];
}


[qx, qy, qe] = genData("x**2", -10, 10, 0.5, "x^2");
[sx, sy, se] = genData("x**0.5", -10, 10, 0.5, "√x");
[cx, cy, ce] = genData("x**3", -10, 10, 0.5, "x^3");
[rx, ry, re] = genData("1/x", -10, 10, 0.5, "1/x");
[ex, ey, ee] = genData("2**x", -10, 10, 0.5, "2^x");
[ax, ay, ae] = genData("Math.abs(x)", -10, 10, 0.5, "|x|");

l.forEach(function(char) {
    new Chart(char, {
        type: "line",
        data: {
            labels: eval(`${char}x`),
            datasets: [{
                fill: false,
                pointRadius: 0,
                borderColor: "rgba(255,0,0, 0.5)",
                data: eval(`${char}y`),
            }]
        },
        options: {
            plugins: {
                legend: {
                    display: false,
                },
                title: {
                    text: eval(`${char}e`),
                    display: true,
                    fontSize: 16,
                }
            }
        }
    })
})
</script>
<script>
// translations

[qxvp, qyvp, qevp] = genData("x**2+10", -10, 10, 0.5, "x^2+10");
[qxvn, qyvn, qevn] = genData("x**2-10", -10, 10, 0.5, "x^2-10");

[qxh, qyh, qeh] = genData("x**2", -20, 20, 0.5, "x^2");
[qxhp, qyhp, qehp] = genData("(x+5)**2", -20, 20, 0.5, "(x+5)^2");
[qxhn, qyhn, qehn] = genData("(x-5)**2", -20, 20, 0.5, "(x-5)^2");

[qxvs, qyvs, qevs] = genData("2*(x)**2", -20, 20, 0.5, "2x^2");
[qxvc, qyvc, qevc] = genData("0.5*(x)**2", -20, 20, 0.5, "0.5x^2");


[qxs, qys, qes] = genData("x**2", -20, 20, 0.5, "x^2");
[qxhc, qyhc, qehc] = genData("(2*x)**2", -20, 20, 0.5, "(2x)^2");
[qxhs, qyhs, qehs] = genData("(0.5*x)**2", -20, 20, 0.5, "(0.5x)^2");

new Chart("qhs", {
    type: "line",
    data: {
        labels: qxs,
        datasets: [{
            label: qehs,
            data: qyhs,
            borderColor: "red",
            pointRadius: 0,
            fill: false,
        }, {
            label: qehc,
            data: qyhc,
            borderColor: "green",
            pointRadius: 0,
            fill: false,
        }, {
            label: qes,
            data: qys,
            borderColor: "blue",
            pointRadius: 0,
            fill: false,
        }]
    },
    options: {
        plugins: {
            legend: {display: true}
        }
    }
})

new Chart("qvt", {
    type: "line",
    data: {
        labels: qx,
        datasets: [{
            label: qevp,
            data: qyvp,
            borderColor: "red",
            pointRadius: 0,
            fill: false,
        }, {
            label: qevn,
            data: qyvn,
            borderColor: "green",
            pointRadius: 0,
            fill: false,
        }, {
            label: qe,
            data: qy,
            borderColor: "blue",
            pointRadius: 0,
            fill: false,
        }]
    },
    options: {
        plugins: {
            legend: {display: true}
        }
    }
})

new Chart("qht", {
    type: "line",
    data: {
        labels: qxh,
        datasets: [{
            label: qehp,
            data: qyhp,
            borderColor: "red",
            pointRadius: 0,
            fill: false,
        }, {
            label: qehn,
            data: qyhn,
            borderColor: "green",
            pointRadius: 0,
            fill: false,
        }, {
            label: qeh,
            data: qyh,
            borderColor: "blue",
            pointRadius: 0,
            fill: false,
        }]
    },
    options: {
        plugins: {
            legend: {display: true}
        }
    }
})

new Chart("qvs", {
    type: "line",
    data: {
        labels: qxh, 
        datasets: [{
            label: qevs,
            data: qyvs,
            borderColor: "red",
            pointRadius: 0,
            fill: false,
        }, {
            label: qevc,
            data: qyvc,
            borderColor: "green",
            pointRadius: 0,
            fill: false,
        }, {
            label: qeh,
            data: qyh,
            borderColor: "blue",
            pointRadius: 0,
            fill: false,
        }]
    },
    options: {
        plugins: {
            legend: {display: true},
        }
    }
})
</script>

## Polynomials
<p>When $a \ne 0$, there are two solutions to \(ax^2 + bx + c = 0\) and they are </p>