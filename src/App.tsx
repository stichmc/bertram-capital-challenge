import { useState } from "react";
import pickRandomName from "./controllers/random";
import { Button } from "./components/ui/button";


const namesArray: string[] = [
  "Bob",
  "Jeremy",
  "Alice",
  "Bob",
  "Charlie",
  "David",
  "Eve",
];

const App = () => {
  const [currentPickedName, setCurrentPickedName] = useState<string | null>(
    null
  );

  const pickRandomNonConsecutiveName = () => {
    let newPickedName = pickRandomName(namesArray);
    while (newPickedName === currentPickedName) {
      newPickedName = pickRandomName(namesArray);
    }
    setCurrentPickedName(newPickedName);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      {/* Display all names in big font */}
      <div className="mb-8 text-4xl">
        {namesArray.map((name, index) => (
          <span key={index} className="mr-6">
            {name}
          </span>
        ))}
      </div>

      {/* Display coffee image */}
      <img
        src={`${import.meta.env.BASE_URL}coffee.svg`}
        alt="Cup"
        className={`mb-4 h-40 transition-opacity ${
          currentPickedName ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* Display current picked name */}
      <div className="mb-4">
        Current picked name: {currentPickedName ? currentPickedName : "None"}
      </div>

      {/* Pick Random Name Button */}
      <Button
        className="hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={pickRandomNonConsecutiveName}
      >
        Who will pay for coffee today?
      </Button>
    </div>
  );
};

export default App;
