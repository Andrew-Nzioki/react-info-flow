import './App.css';
import React, { useState } from "react";
import Header from "./components/Header";
import PetCard from "./components/PetCard";
import { pets as petsArray } from "./components/data"

function App() {
  const [pets, setPets] = useState(petsArray)
  
  const petCards = pets.map((petObj) => {
    return (
      <PetCard
        key={petObj.id}
        name={petObj.name}
        image={petObj.image}
        favSnacks={petObj.favSnacks}
        isAdopted={petObj.isAdopted}
      />
    );
  });

  return (
    <div>
      <Header />
      <main>{petCards}</main>
    </div>
  );
}

export default App;