# Importance of Code Design

*Date:* September 25th, 2025
*Author:* Harris Zheng

Something I realized over the years is that you make your life so much easier with good design. It helps you accomplish your visions without thinking too much about it, and this is important especially when you're tired.

::img[Sleeping Dog]{alt=hello width=300 src=https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExdHMzNW16Zzl3MGNrajk1bWdxNmp0ZDNtb3R6enBiNTAyeWprcTV2diZlcD12MV9naWZzX3NlYXJjaCZjdD1n/DCy2dnXPeGsO4/giphy.gif}

For now I would just like to write **philosophies/methodologies** regarding how I organize my code at work and solve problems without putting in too much effort! Don't get me wrong, I put in effort into problem solving, but I try to minimize it as much as possible to reduce stress.


---

## 1. See Code References

Finding code references in your favourite IDE (e.g. `Pycharm, VSCode, Intellij`) is crucial, because for most problems at work, 
you don't have to read all the code surrounding the code you have to fix, but it's still important to understand
where some **functions** and **classes** come from, so being able to traverse code references expedites problem-solving.

:img[VsCode References Dropdown]{alt='Vscode References Dropdown' width=600 src=https://i.imgur.com/8qK8edO.jpeg}
:img[VsCode References]{alt='Vscode References' width=600 src=https://i.imgur.com/M5h0Ikf.jpeg}

In the example above, I looked at all references of `fetch` in this website's [codebase](https://github.com/hamsburger/Personal_Website), and from this, I can gather
I mainly fetch my website's own endpoints to load Microsoft PowerPoint, Tableau dashboards, and other html and image files.
Fyi, React websites usually places all `/public` folder files in its endpoint.

---

## 2. Have a Setup for Debugging

:img[This is Fine]{alt=this_is_fine src=https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExcXFrdmVxYTZ1YTl6OHdwMmN6bzRweWUwbWVsb3pzM3NwN285emZheCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/QMHoU66sBXqqLqYvGO/giphy.gif}

I'm not just talking about running and setting breakpoints in Unit Tests, which is still important, but I want to emphasize on whether you have a fluid process for test your curiosities:
- Can you make a PR easily, do you minimize the amount of time spent deleting testing code? In other words, are you separating your test environment and PR branch environment?
- Are you able to easily create a test environment? 

Creating a test environment can be as simple as creating a *separate github branch*, which you call 
```bash
git rebase [your main branch name] ## (Optionally -X theirs)
```
to keep it up to date with the main branch. If you're using Scala like me at work, then adding build files to *.gitignore* may also help so that you don't have to reimport build every time you switch between test and PR branches.

There are also other ways to create test environment, like just creating whole new repository with the same setup/`.sbt` build, or spawning shell utilities (e.g. `spark-shell`, `sbt console`), but I prefer to just have test environment on a separate GitHub branch because it's easy to setup and you don't have to recreate anything (e.g. such as schema models, you don't want to spend time creating that in a whole new test repository...). 

:br

---
## 3. Know your libraries!

> If you don't have knowledge on wine, you can't fully experience Napa Valley. If you don't understand Spark and how to debug its execution plan, you can't improve performance!

Without experimenting with the libraries you're working with, it would be hard for SDEs/Data Engineers to improve the data pipeline!
That's why it's crucial to have a test environment you can play around with, so you can try out the packages/test frameworks used by your company's codebase like
`Mockito`, `Spark`, and also the base programming languages! `(Typescript`, `Scala)` 

:img[spark]{src=https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Apache_Spark_logo.svg/2560px-Apache_Spark_logo.svg.png width=300}

:br

--- 
## Summary

We learned that the following things are super important in the development process for solving problems:
1. Jumping through references to understand your ticket/problem
2. Have a setup for debugging/exploring
3. Be curious! Know your libraries

--- 

### Thanks for peeking into my thoughts!
