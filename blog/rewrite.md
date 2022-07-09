---
title: Rewrite
description: Rewriting and optimizing my site.
date: 06-29-2022
tags: updates
---

Welcome to the blog section of **pseudohenry**. Here, I write about whatever first comes to mind.

To serve this site, I'm using a node application that compiles to a static site and my VPS server pulls that static site from Github every *x* amount of minutes using a crontab command (currently, x=1 - allowing me to see changes faster).

Everything within the blog system of my Node app is pretty standard (if not slightly inefficient):
- [express](https://expressjs.com/) server
- [ejs](https://www.npmjs.com/package/ejs) as a templater
- [path](https://nodejs.org/api/path.html) and [fs](https://nodejs.dev/learn/the-nodejs-fs-module) for simple file management
- [front-matter](https://www.npmjs.com/package/front-matter) and [marked](https://www.npmjs.com/package/marked) for markdown parsing to the ejs template
- [html-word-count](https://www.npmjs.com/package/html-word-count) for the ***posh*** counting of words

Essentially, building the static site requires much of the same process (just with generated html). The steps required are (for a fresh build):
1. create build directory (/build/)
2. copy the /public/ folder to /build/ (containing src's: css and assets)
3. read a list of sub-pages, and build their directories within /build/ recursively
4. read index page for each sub-page (found in views) and generate html from its ejs template
5. for blog posts:
    1. read each blog markdown file (found in /blog/)
    2. find ejs layout page (usually /views/blog.html)
    3. compile blog markdown file into html and move it to /build/blog/{post_title}/index.html 
      - create this directory recursively if it doesn't exist

Pretty simple stuff, although, I'm pretty positive the way I'm approaching building the site is wrong. I'm going to work on optimization and refactoring possible later.

This site is definitely an upgrade to my last couple sites where I used PHP as a backend for a lot of server-side scripts, and it was honestly, exhausting. Looking forward to developing this site over the summer.

**ps[1]:** if your curious about the correlation between the reading time + number of words, I just set it as an approximation of 200 words read/min (a pretty simple rate)

**ps[2]:** a lot of the hyperlinks don't truly work ***yet*** (06-29-2022) as those sub-pages currently don't have any content (should be fixed within the next couple of days).
    
## An Update (07-02):

Today, I finished the first layer of refactoring on the main file. I don't truly know if it counts as (efficient) refactoring, but everything is a **bit** more organized now.

### Changes Made:
- split app.js into build.js and serve.js
- instead of manual configuration within serve.js for different subs, a config.js file was created
- starting using await for more organized/structured function calls

### To be improved:
- I feel like I'm repeating the same functions just for different edge cases: have to find a way to solve that

## Another Update (07-08)

I enjoy updating on existing posts, drastically reduces the need for newer posts and there's this whole sense of connection and progress. I've been working on a [categories](/category/) page and although it can be improved, I've got some basic sorting functionality up and running.

I might think about rewriting the CSS file for more concise declarations because I feel like (once again) I'm just adding more lines for edge-cases that I know can be fixed using efficient syntax. I'm currently using 2 css files: *blog.css* and *main.css* which creates a lot of overlap if I don't pay enough attention.

**Update** (Literally 30 minutes later): I've managed to compress my *main.css* and *blog.css* files into a singular css file, and I haven't seen any conflicts yet, although one is bound to arise. I'll fix that when it arises (not the best practice).

I also enabled the usage of Latex rendering using MathTex through a flag in the front-matter content. If I pass: 
```
tex: true
```
at the front of the document (just so I don't have to call the rendering js file at the beginning of every post).

Currently, the size of my build folder (the one presenting this site) is 280KB, although the src folder takes up 244KB (124KB for fonts, and 112KB for images).

A feature I'd like to add is the Code Chunks as found in R Markdown, where code is written and the output is embedded in the document automatically. Could be an interesting idea (I just really like pretty charts, but who doesn't).

