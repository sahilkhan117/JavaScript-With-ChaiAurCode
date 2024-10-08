# see DOM.html


## DOM TREE
![](01_DOM_TREE.png)

## Document
- has object of whole website html code
- use to accs all the html page elements to modify

```js
>>> let a = document.getElementById("title")
<h1 id="title" class="head">DOM by chai aur code</h1>

>>> document.getElementById("title").id
"title"

>>> document.getElementById("title").class
undefined

>>> document.getElementById("title").className
'head'

>>> a.getAttribute("title")
"htllo"
```
