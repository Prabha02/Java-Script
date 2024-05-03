function countSpecificAlphabets(str, letters) {
    // Convert the string to lowercase to count both upper and lowercase letters
    str = str.toLowerCase();
    // Define an object to store the count of each alphabet
    var count = {};
    // Loop through each character in the string
    for (var i = 0; i < str.length; i++) {
        // Check if the character is one of the specified letters
        if (letters.includes(str[i])) {
            // If the character is already in the count object, increment its count
            if (count[str[i]]) {
                count[str[i]]++;
            } else {
                // If the character is not in the count object, initialize its count to 1
                count[str[i]] = 1;
            }
        }
    }
    return count;
}

// Example usage:
var result = countSpecificAlphabets('Prabhakaran', ['p', 'r', 'a', 'b', 'h']);
console.log(result);