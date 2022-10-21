import React, { FormEvent, useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Wilder from "./components/Wilder";
import AddWilderForm from "./components/AddWilderForm";
import { Iwilder } from "./interfaces";
import AddSkillToWilder from "./components/AddSkillToWilder";
import { useQuery, gql } from "@apollo/client";

function App() {
  const [wilders, setWilders] = useState<Iwilder[]>([]);
  const [selectedWilder, setSelectedWilder] = useState<Iwilder | null>(null);

  const GET_WILDERS = gql`
    query Wilders {
      wilders {
        id
        name
        city
        upvotes {
          skill {
            name
          }
        }
      }
    }
  `;

  const { loading, error, data } = useQuery(GET_WILDERS);
  console.log(data?.wilders);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  // async function handleSubmitWilder(event: FormEvent) {
  //   // @ts-ignore
  //   const name = event.target.name.value;
  //   // @ts-ignore
  //   const city = event.target.city.value;
  //   console.log("Form submited :", name, city);
  //   event.preventDefault();

  //   await axios.post("http://localhost:5000/api/wilders", { name, city });
  //   fetchWilders();
  // }

  // async function handleDeleted(id: number): Promise<void> {
  //   console.log(id, "vas être supp");
  //   await axios.delete(`http://localhost:5000/api/wilders/${id}`);
  //   fetchWilders();
  // }

  async function handleAddSkill(): Promise<void> {}

  return (
    <div className="App">
      <header>
        <div className="container">
          <h1>Wilders Book zizi</h1>
        </div>
      </header>
      <h2>Wilders</h2>
      <section className="card-row">
        {data.wilders.length ? (
          data?.wilders.map((wilder: Iwilder) => (
            <Wilder
              key={wilder.id}
              id={wilder.id}
              name={wilder.name}
              upvotes={wilder.upvotes}
              city={wilder.city}
              onWilderDeleted={() => {
                wilder.id
                  ? console.log("biententé")
                  : // handleDeleted(wilder.id)
                    console.log("T'as perdu");
              }}
              onAddSkill={() => setSelectedWilder(wilder)}
            />
          ))
        ) : (
          <h1>Pas de wilders dans le book</h1>
        )}
      </section>
      {selectedWilder && (
        <AddSkillToWilder
          wilder={selectedWilder}
          onCancelClicked={() => {
            setSelectedWilder(null);
          }}
        />
      )}
      {/* <AddWilderForm onWilderCreated={handleSubmitWilder} /> */}
    </div>
  );
}

export default App;
