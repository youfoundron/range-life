# Range Life
A range utility that no one asked for.  
Supports stepped ranges of integers, decimals, letters, and even a supplied array of values.
> "If I had a range life, then I could settle down." - Stephen Malkmus

## Installation
`$ npm install range-life`

## Usage

### Inclusion
All examples are supported by the default module.  
However, you may submodule for specific methods like so.
```javascript
import rangeNum from 'range-life/standard'
import rangeAlpha from 'range-life/alpha'
import rangeValues from 'range-life/values'
```
### Examples
```javascript
import range from 'range-life'

range(0)
// => []

range(4)
// => [0, 1, 2, 3]

range(-4)
// => [0, -1, -2, -3]

range(1, 5)
// => [1, 2, 3, 4]

range(0, 20, 5)
// => [0, 5, 10, 15]

range(0, -4, -1)
// => [0, -1, -2, -3]

range(1, 4, 0)
// => [1, 1, 1]

range(1, 4, 0.5)
// => [1, 1.5, 2, 2.5, 3, 3.5]

/* letters are inclusive */
range('a', 'e')
// => ['a', 'b', 'c', 'd', 'e']

range('A', 'E')
// => ['A', 'B', 'C', 'D', 'E']

range('A', 'E', 2)
// => ['A', 'C', 'E']

/* values are exclusive, works the same as ramda's slice */
const values = ['Zero', 'One', 'Two', 'Three']

range(1, 3, values)
// => ['One', 'Two']

range(1, Infinity, 2, values)
// => ['Zero', 'Two']
```

## API Reference

### range-life/standard

**Parameters**

-   `start` **[number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)**
-   `end` **[number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)**
-   `step` **[number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)**

**Examples**

```javascript
import range from 'range-life/standard'

range(1, 5)
// => [1, 2, 3, 4]

range(0, 20, 5)
// => [0, 5, 10, 15]
```

Returns **[Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)&lt;[number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)&gt;**

### range-life/alpha

**Parameters**

-   `start` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)**
-   `end` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)**
-   `step` **[number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)**

**Examples**

```javascript
import range from 'range-life/alpha'

range('A', 'E')
// => ['A', 'B', 'C', 'D', 'E']

range('A', 'E', 2)
// => ['A', 'C', 'E')
```

Returns **[Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)&lt;[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)&gt;**



### range-life/values

**Parameters**

-   `start` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)**
-   `end` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)**
-   `values | step` **([Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)&lt;any&gt; | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number))**
- `values` **[Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)&lt;any&gt;**

**Examples**

```javascript
import range from 'range-life/values'

const values = ['Zero', 'One', 'Two', 'Three']

range(1, 3, values)
// => ['One', 'Two']

range(1, Infinity, 2, values)
// => ['Zero', 'Two']
```

Returns **[Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)&lt;any&gt;**
