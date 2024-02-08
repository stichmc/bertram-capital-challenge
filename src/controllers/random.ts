const pickRandomName = (names: string[]): string => {
    // Generate a random index within the bounds of the array
    const randomIndex = Math.floor(Math.random() * names.length);
    // Return the name at the randomly generated index
    return names[randomIndex];
}

export default pickRandomName;
  
// Example usage
const namesArray: string[] = ["Alice", "Bob", "Charlie", "David", "Eve"];
const randomName: string = pickRandomName(namesArray);
console.log("Randomly picked name:", randomName);
