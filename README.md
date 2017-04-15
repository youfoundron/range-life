# Range Life
A range function that no one asked for.
Supports stepped ranges of integers, decimals, letters, and even a supplied array of values.
> "If I had a range life, then I could settle down." - Stephen Malkmus

## Installation
`$ npm install range-life`  

You may also use any of range-life's per-method packages:  
`$ npm install range-life.standard`  
`$ npm install range-life.alpha`  
`$ npm install range-life.values`

## Usage

```
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

range('A', 'E', 1)
// => ['A', 'C', 'E')

/* values are exclusive, works the same as ramda's slice */
const values = ['Zero', 'One', 'Two', 'Three']

range(1, 3, values)
// => ['One', 'Two']

range(1, Infinity, 1, values) 
// => ['Zero', 'Two']
```
