---
title: Canvas
description: Canvas for testing new features.
date: 07-19-2022
chart: true
tex: true
graph: true
tags: tech
---

Thought I could use a little canvas for testing new features on this site.

## Mermaid

I got the cool [mermaid](https://mermaid-js.github.io/mermaid/#/) flow chart thing going. Good for visualizations, and maps and stuff. 

Heres a little insight on this sites architecture:

<div class="mermaid">
  graph LR;
	A[Pure FUEL] --> B[Scrapped together Node App];
  B --> C[Static Site];
</div>

Ok but it's more like.

<div class="mermaid">
    graph LR;
    A[source]-->B[node app];
    B-->C[build];
    C-->D[git];
    D-->E[nginx];
</div>

Cool stuff to come with mermaid.

## Latex

Don't you **love** looking at genius scripture that's absolutely incoherent to a brainlet's mind? Me too! This right here can be done using [tex-svg](https://mathjax.github.io/MathJax-demos-web/tex-svg.html.html) found on MathJax's demo web.

### The **Cauchy-Schwarz Inequality** (supposedly).

<p>\[
\left( \sum_{k=1}^n a_k b_k \right)^{\!\!2} \leq
 \left( \sum_{k=1}^n a_k^2 \right) \left( \sum_{k=1}^n b_k^2 \right)
\]</p>

Wow. Look at the numbers. Not crazy enough? You're right.

### An (Beautiful) Identity of Ramanujan

<p>\[ \frac{1}{(\sqrt{\phi \sqrt{5}}-\phi) e^{\frac25 \pi}} =
		 1+\frac{e^{-2\pi}} {1+\frac{e^{-4\pi}} {1+\frac{e^{-6\pi}}
			{1+\frac{e^{-8\pi}} {1+\ldots} } } }
\]</p>


Wow, it's so... infinite. No, not wack enough? This poor soul, Ramnujan pours his identity out to you, and you deny it because it's not sufficiently "wack". Hmm.... what about.

### Fair Bloke: Maxwell's Equations

<p>
\begin{align}
	\nabla \times \vec{\mathbf{B}} -\, \frac1c\, \frac{\partial\vec{\mathbf{E}}}{\partial t} &amp; = \frac{4\pi}{c}\vec{\mathbf{j}} \\
	\nabla \cdot \vec{\mathbf{E}} &amp; = 4 \pi \rho \\
	\nabla \times \vec{\mathbf{E}}\, +\, \frac1c\, \frac{\partial\vec{\mathbf{B}}}{\partial t} &amp; = \vec{\mathbf{0}} \\
	\nabla \cdot \vec{\mathbf{B}} &amp; = 0
\end{align}
</p>

Brilliant. Perfectly wack.

Well, that concludes the demonstration of latex. Also, most of my comments on this page are just me being stupid because that's really what this page is for.

## Chart.js

Chart.js is honestly, pretty cool. I can't seem to figure out how to outline the axis (although it's definitely really simple) but other than that it works really well.

I don't really like the fact that you have to generate your own data first, although I don't really know what I was expecting before.

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

Pretty nice stuff. I can't help but think that I'm only scratching the surface with all of these js libraries, but I'll find out when time comes I guess.
