# Syntax

## Let & Const

### Function Scope & Block Scope

There are now two new ways to declare variables in JavaScript: `let` and `const`.

Variables declared with `var` are scoped to the **function**. This can get us into 
trouble:

```javascript
function getClothing(isCold) {
  if (isCold) {
    var freezing = 'Grab a jacket!';
  } else {
    var hot = 'It’s a shorts kind of day.';
    console.log(freezing);
  }
}
```

The output from running `getClothing(false)` is `undefined` because before code 
execution, all variables are hoisted to the top of the function scope. So at 
run-time the above function looks like this:

```javascript
function getClothing(isCold) {
  var freezing, hot;
  if (isCold) {
    freezing = 'Grab a jacket!';
  } else {
    hot = 'It’s a shorts kind of day.';
    console.log(freezing);
  }
}
```

Variables declared with `let` and `const` are scoped to the **block { }** thus 
eliminating this specific issue of hoisting:

```javascript
function getClothing(isCold) {
  if (isCold) {
    const freezing = 'Grab a jacket!';
  } else {
    const hot = 'It’s a shorts kind of day.';
    console.log(freezing);
  }
}
```

Now the output from running `getClothing(false)` is `ReferenceError: freezing is 
not defined` because `freezing` is not declared inside the else statement.

### Use Cases

The big question is when should you use `let` and `const`? The general rule of 
thumb is as follows:

- use `let` when you plan to reassign new values to a variable, and
- use `const` when you don’t plan on reassigning new values to a variable.

Since `const` is the strictest way to declare a variable, we suggest that you 
always declare variables with `const` because it'll make your code easier to 
reason about since you know the identifiers won't change throughout the lifetime 
of your program. If you find that you need to update a variable or change it, 
then go back and switch it from const to `let`.

What about `var`?

Is there any reason to use `var` anymore? *Not really*.

## Template Literals (\` \`)

Template literals (\` \`) are string literals that include embedded expressions.

**Example 1:**

The old way to concatenate strings:

```javascript
const studentName = 'Richard Kalehoff';
const studentGuardian = 'Mr. Kalehoff';
const teacherName = 'Mrs. Wilson';
const teacherRoom = 'N231';

console.log(studentName + ' please see ' + teacherName + ' in ' + teacherRoom + ' to pick up your report card.');
```

Result:

```output
Richard Kalehoff please see Mrs. Wilson in N231 to pick up your report card.
```

The new way using template literals:

```javascript
const studentName = 'Richard Kalehoff';
const studentGuardian = 'Mr. Kalehoff';
const teacherName = 'Mrs. Wilson';
const teacherRoom = 'N231';

console.log(`${studentName} please see ${teacherName} in ${teacherRoom} to pick up your report card.`);
```

Result:

```output
Richard Kalehoff please see Mrs. Wilson in N231 to pick up your report card.
```

**Example 2:**

Template literals really shine when it comes to multi-line strings.

The old way to concatenate strings:

```javascript
const studentName = 'Richard Kalehoff';
const studentGuardian = 'Mr. Kalehoff';
const teacherName = 'Mrs. Wilson';
const teacherRoom = 'N231';

console.log(teacherName + ',\n\n' +
  'Please excuse ' + studentName + '.\n' +
  'He is recovering from the flu.\n\n' +
  'Thank you,\n' +
  studentGuardian);
```

Result:

```output
Mrs. Wilson,

Please excuse Richard Kalehoff.
He is recovering from the flu.

Thank you,
Mr. Kalehoff
```

The new way using template literals:

```javascript
const studentName = 'Richard Kalehoff';
const studentGuardian = 'Mr. Kalehoff';
const teacherName = 'Mrs. Wilson';
const teacherRoom = 'N231';

console.log(`${teacherName},

Please excuse ${studentName}.
He is recovering from the flu.

Thank you,
${studentGuardian}`);
```

Result:

```output
Mrs. Wilson,

Please excuse Richard Kalehoff.
He is recovering from the flu.

Thank you,
Mr. Kalehoff
```

!> Embedded expressions inside template literals can do more than just reference 
variables. You can perform operations, call functions and use loops inside 
embedded expressions!