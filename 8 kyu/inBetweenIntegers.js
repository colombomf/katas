/* 
Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.
For example: 
a = 1
b = 4
--> [1, 2, 3, 4]
*/

function between(a, b) {
  let list = []
  list.push(a)
  i = a + 1
  while (i > a && i <= b) {
    list.push(i)
    i+=1
  }
  return list
}