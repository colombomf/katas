/*
Make a program that filters a list of strings and returns a list with only your friends name in it.
If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...

Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]

i.e.
friend ["Ryan", "Kieran", "Mark"] `shouldBe` ["Ryan", "Mark"]
Note: keep the original order of the names in the output.
*/


// The filter() method creates a new array with all elements that pass the test implemented by the provided function.
// .length returns the length of a string.

//This function checks if input array strings have more than four characters and filter them out of the output.

friend = (friends) => friends.filter(arr => arr.length === 4)


//e.g: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]
console.log(friend(["Ryan", "Kieran", "Jason", "Yous"]))



