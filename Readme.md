**1.What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?**



Ans:getElementById is used for select element with unique id name of a html file and getElementsByClassName use for select all element by class name in a html file.



&nbsp;querySelector also select elements and it also capable for applying css. querySelector just select first matching element and return that and querySelectorAll return all matching elements as a Nodelist.





**2. How do you create and insert a new element into the DOM?**



Ans: 



1st Step: create a new element



const new = document.createElement("div")



2nd Step: Add content



new.innerText = "Hello World"



3rd Step: Insert into the DOM



const parent = document.getElementById("parentDiv");

parent.appendChild(new);



Done



**3. What is Event Bubbling and how does it work?**



Ans: Event Bubbling is a process of handling an event by clicked. When an event than first of all child run event handler than it's automatically bubble to parent element.



**4. What is Event Delegation in JavaScript? Why is it useful?**



Ans: Event delegation is a technique where you can attach an event listener to a common parent element, rather than giving the child element an event.



it is usefull for more cleaner and memory efficient because i can use 1 listener on parent for 100 child element.





**5. What is the difference between preventDefault() and stopPropagation() methods?**



Ans: preventDefault() method stops the default browser action for an event.

and stopPropagation() method Stops event bubbling or capturing.

































