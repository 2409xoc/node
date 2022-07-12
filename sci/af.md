---
title: Advanced Functions
description: Notes for Advanced Functions, with some prerequisite notes for review. They may be incoherent, but they're here just in case.
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
 { $x | x < 8, x \in R $} 

Through this notation, we understand that the set ***X*** is a set containing all real numbers less than 8.
</center>

**Number Line:**
We can display the interval on a number line visually. 

<img style="width: 30%" src="https://dr282zn36sxxg.cloudfront.net/datastreams/f-d%3A548d7a51480b1d99d01254e8f5463abcc8af327123a2fa767079697d%2BIMAGE_TINY%2BIMAGE_TINY.1"/>

**Interval Notation:**
We can also use a special notation called interval notation:
<center>
{$ x \in (-\infty, 8), x \in R $}

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
The end behavior of functions refers to what happens to the y-values as x approaches $-\infty and \infty $ (really small and large values). 

"$x \to \infty$ and $x \to -\infty$

For example: in the function: y = f(x) = x<sup>2</sup>. 

As $x \to \infty; y \to \infty $ and $x \to -\infty; y \to \infty$

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


[qx, qy, qe] = genData("x**2", -4, 4, 0.25, "x^2");
[sx, sy, se] = genData("x**0.5", -4, 4, 0.25, "√x");
[cx, cy, ce] = genData("x**3", -4, 4, 0.25, "x^3");
[rx, ry, re] = genData("1/x", -4, 4, 0.25, "1/x");
[ex, ey, ee] = genData("2**x", -4, 4, 0.25, "2^x");
[ax, ay, ae] = genData("Math.abs(x)", -4, 4, 0.25, "|x|");

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

[qxvp, qyvp, qevp] = genData("x**2+10", -4, 4, 0.25, "x^2+10");
[qxvn, qyvn, qevn] = genData("x**2-10", -4, 4, 0.25, "x^2-10");

[qxh, qyh, qeh] = genData("x**2", -5, 5, 0.25, "x^2");
[qxhp, qyhp, qehp] = genData("(x+2)**2", -5, 5, 0.25, "(x+2)^2");
[qxhn, qyhn, qehn] = genData("(x-2)**2", -5, 5, 0.25, "(x-2)^2");

[qxvs, qyvs, qevs] = genData("2*(x)**2", -5, 5, 0.25, "2x^2");
[qxvc, qyvc, qevc] = genData("0.5*(x)**2", -5, 5, 0.25, "0.5x^2");


[qxs, qys, qes] = genData("x**2", -5, 5, 0.25, "x^2");
[qxhc, qyhc, qehc] = genData("(2*x)**2", -5, 5, 0.25, "(2x)^2");
[qxhs, qyhs, qehs] = genData("(0.5*x)**2", -5, 5, 0.25, "(0.5x)^2");

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
- Polynomials are mathematical expressions consisting of variables and coefficients (Ex: $ax^2 + bx + c$ (quadratic polynomial)). 
- In a polynomial, each term consists of a variable raised to a non-negative integer exponent, multiplied by real numerical coefficients.
- The only limitations to polynomials: no negative exponents and complex coefficients.

### Degree of Polynomials:
The degree of a polynomial is the largest degree amongst all terms. The degree of a singular term can be found by adding all variable exponents in that term.

Ex: what is the degree of $6x^3y^2 + 4x^2y^5 + 3xy + 2$: 
- Term [$6x^3y^2$] has degree of 3+2: 5
- Term [$4x^2y^5$] has degree of 2+5: 7
- Term [$3xy$] has degree of 1+1: 2 
- Term [2] has degree of 0 
- Thus, the degree of the polynomial is 7.

### Polynomial Functions
- Polynomial functions are functions that follow the general structure of a polynomial with 1 variable input (often x).
- The general form of a polynomial function is:
$$ a_nx^n + a_{n-1}x^{n-1} + a_{n-2}x^{n-2} + a_{n-3}x^{n-3} ... + a_1x + a_0$$

$a_n, a_{n-1}, a_{n-2}...a_0$ are all real numbers and the exponents of x $n, n-1, n-2...$ are all non-negative integers.

#### Domain and Range:
- The domain of any polynomial function is R.
- The range of a polynomial function depends on the function itself.

Find the range of: 
$$ f(x) = -2x^2 + x $$
$$ h(x) = \frac{1}{x} $$
$$ k(x) = |x^3| + 2x $$
$$ g(x) = 3(x-1)^2 - 5 $$

#### Types of Polynomial Functions:
- A constant function, $f(x) = a$, is a straight, horizontal line with degree 0.
- A linear function, $f(x) = ax + b$, is a straight (not necessarily horizontal) line. Linear functions have degrees of 1 or less, making a constant function a special case of a linear function.
- A quadratic function, $f(x) = ax^2 + bx + c$, where $a \ne 0$ forms a parabola, and has a degree of 2.
- A cubic function, $f(x) = ax^3 + bx^2 + cx + d$, where $a \ne 0$ forms a cubic curve, and has a degree of 3.
- A quartic function, $f(x) = ax^4 + bx^3 + cx^2 + dx + e$, where $a \ne 0$ can form parabolas, or curves that look like W's or M's. A quartic function has a degree of 4.
- A quintic function, $f(x) = ax^5 + bx^4 + cx^3 + dx^2 + ex + f$, where $a \ne 0$ form curves resembling that of a cubic function, but with additional minima and maxima.

#### Even vs. Odd Degree

Pretty self-explanatory. Functions with an even degree are referred to as even functions (such as constants (0), quadratics (2), and quartics (4)). Inversely, functions with odd degrees are referred to as odd functions (such as linear functions (1), cubics (3), and quintics (5)). Even and odd functions have different interesting properties. 

#### Forms of Polynomial Functions

**Standard Form:** standard form is the full expanded form of a function ($a_{n}x^n + a_{n-1}x^{n-1} + a_{n-2}x^{n-2} ... a_1x + a_0 $). In standard form, the degree, leading coefficient, and y-intercepts can be easily identified. 

**Factored Form:** factored form is a function factored by it's roots ($a(x-r_n)(x-r_{n-1})(x-r_{n-2})...(x-r_{0})$). In factored form, the zeros of x ($r_n, r_{n-1}, r_0$) are easily identifiable. The zeros are also known as the x-intercepts (x values for which the function equates to 0).

**Vertex Form:** the vertex form, a form found by completing the square, allows for the vertex (max, or min point or a curve) to be easily identified. Only the quadratic function has a consistent vertex form ($a(x-h)^2 + k$, where (h,k) is the vertex). 

### Power Functions

Power functions are a simplified subset of polynomial functions. A power function is a function in the form of: $f(x) = ax^n$, where $a, n \in R $. The variable $a$ provides the vertical stretch, and thus, points are remapped but the function itself does not translate. 

Understanding the properties of the basic power functions ($f(x) = x^2; f(x) = x^3; f(x) = x^4$) are important. Although even and odd power functions share many of the same properties.

#### Power Function Graphs

<div style="display: flex; justify-content: center">
<canvas id="x" class="chart-js"></canvas>
<canvas id="x2" class="chart-js"></canvas>
<canvas id="x3" class="chart-js"></canvas>
<canvas id="x4" class="chart-js"></canvas>
<canvas id="x5" class="chart-js"></canvas>
<canvas id="x6" class="chart-js"></canvas>
</div>

There are pretty obvious similarities between functions within their odd and even groups:
- End Behavior: 
    - Odd Functions: $x \to \infty; y \to \infty$ and $x \to -\infty; y \to -\infty$
    - Even Functions: $x \to \infty; y \to \infty$ and $x \to -\infty; y \to \infty$
- Increasing/Decreasing:
    - Odd Functions: continuously increasing (all odd functions other than linear become stationary at $x=0$. 
    - Even Functions: decreasing when {$x \in R; -\infty \ge x < 0$ }, and increasing when {$x \in R; 0 < x \ge \infty $}.
- Similarities:
    - The larger the power, the larger the plateau around $x=0$ (when $-1 < x < 1$), as values within this range become smaller when put to the power of $n$. 
    - Furthermore, as the power increases, each graph becomes steeper and increases faster.

### Characteristics of Polynomial Functions

It's important to go through the relatively basic properties of the most common functions (up to quartics), and mapping characteristical patterns onto certain variables.

### Constant Functions:
$$ y = a; a \in R $$

<div style="display: flex; justify-content: center">
<canvas style="max-width: 50%" id="constant-ex" class="chart-js"></canvas>
</div>

**Observations:** 
- Straight, horizontal line 
- Not increasing, nor decreasing - stationary function
- Domain and Range: 
    - $ x \in R; y = a $
- Unless $y=0$, there are no zeros for the function (in the case of $y=0$, there are infinite zeros).

### Linear Functions:
$$ y = ax + b; a \ne 0 $$

<div style="display: flex; justify-content: center">
<canvas style="max-width: 50%" id="linear-ex" class="chart-js"></canvas>
</div>

**Observations:**
- Straight line (with slope of $a$)
- If $a \gt 0$, it's an increasing function. Else if $a \lt 0$, it's a decreasing function.
- End Behavior (depends on slope, as mentioned above):
    - If $a \gt 0$: $x \to \infty$ $y \to \infty$
    - If $a \lt 0$: $x \to \infty$ $y \to -\infty$

### Quadratic Functions:
$$ y = ax^2 + bx + c; a \ne 0 $$

<div style="display: flex; justify-content: center">
<canvas style="max-width: 50%" id="quadratic-ex" class="chart-js"></canvas>
</div>

**Observations:**
- A parabola has one turning point (vertex) which is the absolute minimum or maximum of the curve.
- The amount of x-intercepts of a parabola depends on the discriminant ($b^2-4ac$):
    - if the discriminant < 0, there are no x-intercepts.
    - if the discriminant = 0, there is 1 x-intercept.
    - if the discriminant < 0, there are 2 x-intercepts.
- The leading coefficient of a quadratic ($a$) dictates the general image of the curve:
    - If $a \lt 0$, the curve will open downwards, and the vertex will be an absolute maximum.
        - As $x \to \infty$ $y \to -\infty$ and as $x \to -\infty$ $y \to -\infty$
    - If $a \gt 0$, the curve will open upwards, and the vertex will be an absolute minimum.
        - As $x \to \infty$ $y \to \infty$ and as $x \to -\infty$ $y \to \infty$
- The range of a quadratic function depends on the amount of horizontal translation (and can be found easily when written in vertex form).

### Cubic Functions:
$$ y = ax^3 + bx^2 + cx + d; a \ne 0 $$

<div style="display: flex; justify-content: center">
<canvas style="max-width: 50%" id="cubic-ex" class="chart-js"></canvas>
</div>

**Observations:**
- A cubic function either has no turning points, or 2 turning points. That way, the end behaviors as $x$ tends to infinitesimally large and small domains, the output ($y$) will be opposites.
    - If a cubic function only had 1 turning point, it'd look like a quadratic function.
- A cubic function can have up to 3 x-intercepts, depending on the amount of turning points.
- Like the quadratic function, the leading coefficient dictates the end behaviors of the curve. Like the linear function, a cubic function has opposite end behaviors:
    - If $a \lt 0$.
        - As $x \to \infty$ $y \to -\infty$ and as $x \to -\infty$ $y \to \infty$
    - If $a \gt 0$.
        - As $x \to \infty$ $y \to \infty$ and as $x \to -\infty$ $y \to -\infty$

### Quintic Functions: 
$$ y = ax^4 + bx^3 + cx^2 + dx + e; a \ne 0 $$

<div style="display: flex; justify-content: center">
<canvas style="max-width: 50%" id="quintic-ex" class="chart-js"></canvas>
</div>

**Observations:**
- A quartic function either has 1 turning point, or 3 turning points. That way, the end behaviors as $x$ tends to infinitesimally large and small values are the same.
- A quartic function can have up to 4 x-intercepts, depending on the amount of turning points.
- Similar to the quadratic function, a quartic function has the same end behaviors (depending on the leading coefficient):
    - If $a \lt 0$.
        - As $x \to \infty$ $y \to -\infty$ and as $x \to -\infty$ $y \to -\infty$
    - If $a \gt 0$.
        - As $x \to \infty$ $y \to \infty$ and as $x \to -\infty$ $y \to \infty$

<script>
    var pl = ["x", "x2", "x3", "x4", "x5", "x6"];
    [xx, xy, xe] = genData("x**1", -4, 4, 0.25, "Linear (x)");
    [x2x, x2y, x2e] = genData("x**2", -4, 4, 0.25, "Quadratic (x^2)");
    [x3x, x3y, x3e] = genData("x**3", -4, 4, 0.25, "Cubic (x^3)");
    [x4x, x4y, x4e] = genData("x**4", -4, 4, 0.25, "Quartic (x^4)");
    [x5x, x5y, x5e] = genData("x**5", -4, 4, 0.25, "Quintic (x^5)");
    [x6x, x6y, x6e] = genData("x**6", -4, 4, 0.25, "Hexic (x^6)");
    pl.forEach(function(char) {
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
    var ex = {
        "c": "constant-ex",
        "l": "linear-ex",
        "q": "quadratic-ex",
        "cu": "cubic-ex",
        "qu": "quintic-ex",
    };

    [cx1, cy1, ce1] = genData("5", -4, 4, 0.25, "y=5");
    [cx2, cy2, ce2] = genData("10", -4, 4, 0.25, "y=10");
    [cx3, cy3, ce3] = genData("-5", -4, 4, 0.25, "y=-5");

    [lx1, ly1, le1] = genData("2*x+5", -4, 4, 0.25, "y=2x+5");
    [lx2, ly2, le2] = genData("-3*x+2", -4, 4, 0.25, "y=-3x+2");
    [lx3, ly3, le3] = genData("0.5*x-5", -4, 4, 0.25, "y=0.5x-5");

    [qx1, qy1, qe1] = genData("2*x**2-3*x+4", -4, 4, 0.25, "y=2x^2-3x+4");
    [qx2, qy2, qe2] = genData("-1*x**2-4*x-7", -4, 4, 0.25, "y=-x^2-4x-7");
    [qx3, qy3, qe3] = genData("x**2-6", -4, 4, 0.25, "y=x^2-6");

    [cux1, cuy1, cue1] = genData("-1*x**3-2*x**2+5*x+6", -4, 4, 0.25, "y=-x^3-2x^2+5x+6");
    [cux2, cuy2, cue2] = genData("-1*x**3+3*x**2-5*x-2", -4, 4, 0.25, "y=-x^3+3x^2-5x-2");
    [cux3, cuy3, cue3] = genData("0.5*x**3 + 2*x**2 + 4*x - 7", -4, 4, 0.25, "y=0.5x^3+2x^2+4x-7");

    [qux1, quy1, que1] = genData("x**4 + 3*x**3 + x - 3", -4, 4, 0.25, "y=x^4+3x^3+x-3");
    [qux2, quy2, que2] = genData("2*x**4 - 0.5*x**3 + 8*x**2 + 3*x - 3", -4, 4, 0.25, "y=2x^4-0.5x^3+8x^2+3x-3");
    [qux3, quy3, que3] = genData("-1*x**4 - 2*x**3 + 5*x**2 + 6*x", -4, 4, 0.25, "y=-x^4-2x^3+5x^2+6x");

    var maps = Object.keys(ex);
    for (var i=0; i < maps.length; i++) {
        new Chart(ex[maps[i]], {
            type: "line",
            data: {
                labels: eval(`${maps[i]}x1`),
                datasets: [{
                    label: eval(`${maps[i]}e1`),
                    data: eval(`${maps[i]}y1`),
                    borderColor: "red",
                    pointRadius: 0,
                    fill: false,
                }, {
                    label: eval(`${maps[i]}e2`),
                    data: eval(`${maps[i]}y2`),
                    borderColor: "green",
                    pointRadius: 0,
                    fill: false,
                }, {
                    label: eval(`${maps[i]}e3`),
                    data: eval(`${maps[i]}y3`),
                    borderColor: "blue",
                    pointRadius: 0,
                    fill: false, 
                }]
            }
        })
    }
</script>

### Generalizing Characteristics:

#### An n-th degree polynomial (n % 2 = 0)
- The end behavior of this function will be similar to that of a parabola, the end behaviors will be the same. Furthermore, the end behaviors depend on the leading coefficient ($a$).
    - If $a \lt 0$.
        - As $x \to \infty$ $y \to -\infty$ and as $x \to -\infty$ $y \to -\infty$
    - If $a \gt 0$.
        - As $x \to \infty$ $y \to \infty$ and as $x \to -\infty$ $y \to \infty$
- The function will have an odd number of turning points: starting at 1, and going up to n-1.
    - A function of degree 4 can have: 1 or 3 turning points (1 to n-1). 
    - A function of degree 8 can have: 1, 3, 5, or 7 turning points (1 to n-1).
- The function will have a vertex (absolute minimum or maximum) as the end behaviors are the same.
- The graph will have a maximum of $n$ x-intercepts (starting from 0).

#### An n-th degree polynomial (n % 2 = 1)
- The end behavior of this function will be similar to that of a linear line, the end behaviors will be opposite. Furthermore, the end behaviors depend on the leading coefficient ($a$).
    - If $a \lt 0$.
        - As $x \to \infty$ $y \to -\infty$ and as $x \to -\infty$ $y \to \infty$
    - If $a \gt 0$.
        - As $x \to \infty$ $y \to \infty$ and as $x \to -\infty$ $y \to -\infty$
- The function will have an even amount of turning points: starting at 0, and going up to n-1.
    - A function of degree 3 can have: 0, or 2 turning points (1 to n-1).
    - A function of degree 9 can have: 0, 2, 4, 6, or 8 turning points (1 to n-1).
    - A polynomial of odd degree doesn't require turning points as the end behaviors tend to opposite sides naturally
- The function will have at least 1 x-intercept, and a maximum of $n$ x-intercepts. 
    - The function must have 1 intercept as it tends towards opposite directions, which requires it to cross the x-axis.

### Factored Form and Multiplicity:

Factored form is in the general form of: 

$$ f(x) = k(x-a_1)(x-a_2)(x-a_3)...(x-a_n) $$

where k is a scalar performing the vertical stretch onto the function and $a_1$, $a_2$, $a_3$...$a_n$ are the zeros of the function. Within a function, as mentioned above, there are at most $n$ zeros (x-intercepts).

The **multiplicity** or order of a zero is the amount of times that zero is repeated. If, in factored form, the zero: $(x-a)$ is repeated $n$ times, then the zero $x=a$ is said to have a multiplicity of $n$.

#### Multiplicity Characteristics:
- The multiplicity $n$ of a zero allows for many interpretations and estimates to be made about the function near the zero
- If $n=1$, the graph will cross directly through the x-axis at the zero
- If $n \gt 1$ and $n$ is even, the graph will not cross through the x-axis, but have a turning point and bounce back at the zero.
- If $n \gt 1$ and $n$ is odd, the graph will cross through the x-axis, but have an inflection point (changes direction) at the zero.

<div style="display: flex; justify-content: center">
<canvas style="max-width: 50%" id="multiplicity" class="chart-js"></canvas>
</div>

<script>
    [mlx, mly, mle] = genData("(x-2)**3*(x-4)**2*(x-1)", 0.75, 4.25, 0.0625, "(x-1)(x-4)^2(x-2)^3");
    new Chart("multiplicity", {
        type: "line",
        data: {
            labels: mlx,
            datasets: [{
                fill: false,
                pointRadius: 0,
                borderColor: "rgba(255,0,0, 0.5)",
                data: mly,
            }]
        },
        options: {
            plugins: {
                legend: {
                    display: false,
                },
                title: {
                    text: mle,
                    display: true,
                    fontSize: 16,
                }
            }
        }
    })
</script>