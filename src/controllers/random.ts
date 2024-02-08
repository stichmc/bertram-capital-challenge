const pickRandomName = (names: string[]): string => {
    // Generate a random index within the bounds of the array
    const randomIndex = Math.floor(Math.random() * names.length);
    // Return the name at the randomly generated index
    return names[randomIndex];
}

export default pickRandomName;
