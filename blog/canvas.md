---
title: Canvas
description: Canvas for testing new features.
date: 07-19-2022
chart: true
tex: true
graph: true
---

Thought I could use a little canvas for testing new features on this site.

## Mermaid

I got the cool [mermaid](https://mermaid-js.github.io/mermaid/#/) flow chart thing going. Good for visualizations, and maps and stuff. 

<div class="mermaid">
  graph LR;

</div>

Cool stuff to come with mermaid.... probably (hopefully). It seems like a really cool tool just for general brainstorms which are **beyond** useful.

## Latex

Let's look at some genius scripture that's absolutely incoherent to my mind.

### The Cauchy-Schwarz Inequality:

<p>\[
\left( \sum_{k=1}^n a_k b_k \right)^{\!\!2} \leq
 \left( \sum_{k=1}^n a_k^2 \right) \left( \sum_{k=1}^n b_k^2 \right)
\]</p>

What about... an identity.

### An Identity of Ramanujan

<p>\[ \frac{1}{(\sqrt{\phi \sqrt{5}}-\phi) e^{\frac25 \pi}} =
		 1+\frac{e^{-2\pi}} {1+\frac{e^{-4\pi}} {1+\frac{e^{-6\pi}}
			{1+\frac{e^{-8\pi}} {1+\ldots} } } }
\]</p>

And some equations?

### Maxwell's Equations

<p>
\begin{align}
	\nabla \times \vec{\mathbf{B}} -\, \frac1c\, \frac{\partial\vec{\mathbf{E}}}{\partial t} &amp; = \frac{4\pi}{c}\vec{\mathbf{j}} \\
	\nabla \cdot \vec{\mathbf{E}} &amp; = 4 \pi \rho \\
	\nabla \times \vec{\mathbf{E}}\, +\, \frac1c\, \frac{\partial\vec{\mathbf{B}}}{\partial t} &amp; = \vec{\mathbf{0}} \\
	\nabla \cdot \vec{\mathbf{B}} &amp; = 0
\end{align}
</p>

Well, that concludes the demonstration of latex. It's a really flexible tool that can be used for a variety of things, though since I'm already using markdown as a markup tool, I won't need it for much other than... mathematical equations.

## Chart.js

Chart.js is really cool. One problem: I can't really seem to figure out how to outline the x and y-axis in black, but other than that it's been really good for data visualization.

Although, I don't really like the fact that you have to generate your own data first, although now that I think about it: there's no other, efficient way without increasing the size of the Chart.js library. My data generation (just pure math) works client side, so I'm worried that I might generate at an interval too large for someone's phone or something.

<div style="display: flex; justify-content: center">
<canvas style="max-width: 50%" id="demo" class="chart-js"></canvas>
</div>

<script>
function genData(exp, l1, l2, step, desc) {
    var xd=[], yd=[];
    for (let x=l1; x <= l2; x+=step) {
        xd.push(x);
        yd.push(eval(exp));
    }
    return [xd, yd, desc];
}

[x, y, e] = genData("x**2", -4, 4, 0.25, "x^2 demo");


new Chart("demo", {
        type: "line",
        data: {
            labels: x,
            datasets: [{
                fill: false,
                pointRadius: 0,
                borderColor: "rgba(255,0,0, 0.5)",
                data: y,
            }]
        },
        options: {
            plugins: {
                legend: {
                    display: false,
                },
                title: {
                    text: e,
                    display: true,
                    fontSize: 16,
                }
            }
        }
    })

</script>

Really cool stuff. I can't help but wonder if I'm only scratching the mere surface with all these libraries, but I guess I can always read the documentation... not.
