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
### Accesing methods

`document.querySelector(".head")`
- returns first element of its parameter as html node
- 🤩🤩 we use selecters as css selecters like `.list:first-child` and `input[text="password"]` 

`document.querySelectorAll(".head")`
- returns list of all element of its parameter as NodeList[]
- NodeList have 🤩👍🏻👍🏻 `forEach()` to ittrate

`document.getElementById("title")`
- return elem of this id as html node

`document.getElementsByClassName("head")`
- return HTMLlist of elem of this class
- HTMLlist dont have ⚠️⚠️😞😞 `forEach()` to ittrate
- 😤 instead use the querySelectorAll

`document.getElementsByTagName("h1")`
-   return NodeList of elem of this tag

`document.getElementsByName("title")`
-   return NodeList of elem of this name

### Change Style
## `let a = document.querySelector(".head")`
-   $use - .style - method$

`a.style.color = "red"`
-   change color
-   same as we change all css properties

### Change Text
