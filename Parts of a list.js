function partlist(arr) {
    // Create an empty array to store the result
    const result = [];
  
    // Iterate through the input array
    for (let i = 1; i < arr.length; i++) {
      // Split the array into two parts
      const part1 = arr.slice(0, i);
      const part2 = arr.slice(i);
  
      // Join the parts into a string and push to the result array
      result.push([part1.join(" "), part2.join(" ")]);
    }
  
    return result;
  }
  
  // Example usage:
  const inputArray = ["I", "am", "your", "father"];
  const result = partlist(inputArray);
  console.log(result);  