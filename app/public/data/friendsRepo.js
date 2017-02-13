// DATA
// Below data will hold all of the match information.
// Initially populate it with few friends

var friendsArray = [
	{
		name: "Sam Kan",
		photo: "https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwjZpKvxxI3SAhUq04MKHRXmCI4QjRwIBw&url=https%3A%2F%2Fwww.yelp.com%2Fbiz%2Fpeoples-barber-san-francisco&psig=AFQjCNEsZYwfRLwQQ8RCLAfjd16mJpMkhg&ust=1487091248618088",
		scores: [1, 1, 1, 1, 1, 2, 1, 4, 5, 1]
	}, 
	{
		name: "Molly",
		photo: "https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwi3wYTLxI3SAhWE6IMKHe84AHwQjRwIBw&url=https%3A%2F%2Fwww.pinterest.com%2Fpin%2F343258802823396945%2F&psig=AFQjCNHdzv9oEPVK_kkau8M4mTp8eqDDZA&ust=1487091186736735",
		scores: [1, 2, 3, 4, 5, 4, 1, 2, 3, 1]	
	}
];

// Export the array. This makes it accessible to other files using require. 
module.exports = friendsArray; 