import React, { useState } from "react";
import pickRandomName from "./controllers/random";
import { Button } from "./components/ui/button";
import Header from "./components/Header";

interface Person {
  name: string;
  favoriteDrink: string;
}

const initialPeople: Person[] = [
  { name: "Bob", favoriteDrink: "Cappuccino" },
  { name: "Jeremy", favoriteDrink: "Black Coffee" },
  { name: "Alice", favoriteDrink: "Matcha Latte" },
  { name: "Bob", favoriteDrink: "Latte" },
  { name: "Charlie", favoriteDrink: "Espresso" },
  { name: "David", favoriteDrink: "Cappuccino" },
  { name: "Eve", favoriteDrink: "Mocha" },
];

const App = () => {
  const [currentPickedName, setCurrentPickedName] = useState<Person | null>(
    null
  );

  const [newPerson, setNewPerson] = useState<Person>({
    name: "",
    favoriteDrink: "",
  });

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    field: string
  ) => {
    setNewPerson((prevState) => ({
      ...prevState,
      [field]: event.target.value,
    }));
  };

  const addPerson = () => {
    if (newPerson.name.trim() !== "" && newPerson.favoriteDrink.trim() !== "") {
      initialPeople.push(newPerson);
      setNewPerson({ name: "", favoriteDrink: "" });
    }
  };

  const pickRandomNonConsecutiveName = () => {
    let newPickedName = pickRandomName(
      initialPeople.map((person) => person.name)
    );
    while (newPickedName === currentPickedName?.name) {
      newPickedName = pickRandomName(
        initialPeople.map((person) => person.name)
      );
    }
    const pickedPerson = initialPeople.find(
      (person) => person.name === newPickedName
    );
    setCurrentPickedName(pickedPerson || null);
  };

  const isJoinButtonDisabled =
    newPerson.name.trim() === "" || newPerson.favoriteDrink.trim() === "";

  return (
    <div className="h-screen">
      <Header></Header>
      <div className="flex flex-row items-center justify-center h-[85%] gap-24">
        <div className="p-2 w-[25%]">
          <img
            src={`${import.meta.env.BASE_URL}coffee.svg`}
            alt="Cup"
            className={`mb-4 h-40 transition-opacity ${
              currentPickedName
                ? "opacity-100 duration-1000 animate-bounce"
                : "opacity-0 duration-500"
            }`}
          />

          <div
            className={`mb-4 transition-opacity font-medium text-3xl text-left ${
              currentPickedName
                ? "opacity-100 duration-1000"
                : "opacity-0 duration-500"
            }`}
          >
            {currentPickedName ? currentPickedName.name : "None"} the{" "}
            {currentPickedName ? currentPickedName.favoriteDrink : ""} lover.
          </div>

          <Button
            className="hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={pickRandomNonConsecutiveName}
          >
            Who will pay for coffee today?
          </Button>
        </div>

        <div className="p-2">
          <div className="outline h-48 overflow-auto rounded-md p-2">
            <h1 className="mb-2 font-bold text-lg">Bertram Labs Coffee Club</h1>
            <hr />
            <table className="w-full table-auto">
              <thead>
                <tr>
                  <th className="px-4 py-2 text-left">Club Member</th>
                  <th className="px-4 py-2 text-left">Favorite Drink</th>
                </tr>
              </thead>
              <tbody>
                {initialPeople.map((person, index) => (
                  <tr key={index}>
                    <td className="px-4 py-2">{person.name}</td>
                    <td className="px-4 py-2">{person.favoriteDrink}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <br />
          <p className="font-medium">
            Would you like to join the Bertram Labs coffee club?
          </p>
          <br />
          <div className="mb-4">
            <input
              type="text"
              placeholder="Enter your name"
              value={newPerson.name}
              onChange={(e) => handleInputChange(e, "name")}
              className="mr-2 p-2 border border-gray-300 rounded"
            />
            <input
              type="text"
              placeholder="Enter your favorite drink"
              value={newPerson.favoriteDrink}
              onChange={(e) => handleInputChange(e, "favoriteDrink")}
              className="mr-2 p-2 border border-gray-300 rounded"
            />
            <Button
              className="hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={addPerson}
              disabled={isJoinButtonDisabled}
            >
              Join
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
