/* 
Given a non-empty array of integers, return the result of multiplying the values together in order. 
Example:
[1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24
*/

grow = arr => arr.reduce((acc, cur) => acc * cur, 1)

