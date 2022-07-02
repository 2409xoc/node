---
title: rewrite 
description: rewriting my systems.
date: 06-29-2022
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
2. copy the /public/ folder to /build/ (containing srcs: css and assets)
3. read a list of subpages, and build their directories within /build/ recursively
4. read index page for each subpage (found in views) and generate html from its ejs template
5. for blog posts:
    1. read each blog markdown file (found in /blog/)
    2. find ejs layout page (usually /views/blog.html)
    3. compile blog markdown file into html and move it to /build/blog/{post_title}/index.html 
      - create this directory recursively if it doesn't exist

Pretty simple stuff, although, I'm pretty positive the way I'm approaching building the site is wrong. I'm going to work on optimization and refactoring possible later.

This site is definitely an upgrade to my last couple sites where I used PHP as a backend for a lot of server-side scripts, and it was honestly, exhausting. Looking forward to developing this site over the summer.

<br/>

**ps[1]:** if your curious about the correlation between the reading time + number of words, I just set it as an approximation of 200 words read/min (a pretty simple rate)

**ps[2]:** a lot of the hyperlinks don't truly work ***yet*** (06-29-2022) as those subpages currently don't have any content (should be fixed within the next couple of days).
    
## An Update (07-02):

Today, I finished the first layer of refactoring on the main file. I don't truly know if it counts as (efficient) refactoring, but everything is a **bit** more organized now.

### Changes Made:
- split app.js into build.js and serve.js
- instead of manual configuraton within serve.js for different subs, a config.js file was created
- starting using await for more organized/structured function calls

### To be improved:
- I feel like I'm repeating the same functions just for different edge cases: have to find a way to solve that




