# Performance

## Measuring Performance

Consider the following code that creates 10 thousand paragraphs, and adds them 
to the page:

```javascript
const startingTime = performance.now();

for (let i = 0; i < 10000; i++) {
  const newElement = document.createElement('p');

  newElement.textContent = 'This is paragraph number ' + i;

  document.body.appendChild(newElement);
}

const endingTime = performance.now();
console.log('This code took ' + (endingTime - startingTime) + ' milliseconds.');
```

```console
This code took 88.09000000110245 milliseconds.
```

The code above creates a paragraph element, adds some text to it and adds it to 
the page. And it does this 10 thousand times!

To improve the performance of our code we could create a parent container before 
the loop, and append all new paragraphs to it. Finally, we could append this 
parent container to the `<body>` element:

```javascript
const startingTime = performance.now();

const container = document.createElement('div');

for (let i = 0; i < 10000; i++) {
  const newElement = document.createElement('p');

  newElement.innerText = 'This is paragraph number ' + i;

  container.appendChild(newElement);
}

document.body.appendChild(container);

const endingTime = performance.now();
console.log('This code took ' + (endingTime - startingTime) + ' milliseconds.');
```

```console
This code took 40.47499999978754 milliseconds.
```
!>If you've ever used a timing procedure in another programming language, then 
you might've heard of Epoch time (also called Unix time or POSIX time). These 
tools tell you the time that has passed since 1/1/1970 (the first of January). 
The browser's `performance.now()` method is slightly different in that it starts 
measuring from the time the page loaded.

!>`performance.now()` is relative to page load and more precise in orders of 
magnitude than `Date.now()`. Use cases for this method include benchmarking and 
other cases where a high-resolution time is required such as media (gaming, 
audio, video, etc.)

!>`Date.now()` is relative to the Unix epoch and dependent on system clock. Use 
cases include date manipulation.

!> To offer protection against timing attacks and fingerprinting, the precision 
of `performance.now()` might get rounded depending on browser settings.