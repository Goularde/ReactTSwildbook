import blank_profile from "./../assets/blank_profile.png";
import Skill from "./Skill";
import { MouseEvent } from "react";
import { Iupvote } from "../interfaces";

interface IwilderProps{
    id?: number;
  name: string;
  city: string;
  upvotes?: Iupvote[];
  onWilderDeleted: (event: MouseEvent) => void;
  onAddSkill: () => void;
}

const Wilder = ({ name, upvotes, city, id, onWilderDeleted, onAddSkill }: IwilderProps) => {
  console.log(id);
  return (
    <div>
      <main className="container">
        <article className="card">
          <img src={blank_profile} alt={`${name} Profile`} />
          <h3>{name}</h3>
          <h4>{city}</h4>
          <p>
            Ingrédients POUR 4 PERSONNES 1 camembert au lait cru, dans une boîte
            en bois
          </p>
          <h4>Wild Skills</h4>
          <ul className="skills">
            {upvotes && upvotes.length >= 1 ? (
              upvotes.map((upvote) => (
                <Skill
                  key={upvote.id}
                  id={upvote.id}
                  name={upvote.skill.name}
                  votes={upvote.upvote}
                />
              ))
            ) : (
                <p>Pas de skills</p>
            )}
          </ul>
          <button onClick={onAddSkill}>Ajouter un skill</button>
          <br />
          <button onClick={onWilderDeleted}>Supprimer</button>
        </article>
      </main>
    </div>
  );
};

export default Wilder;