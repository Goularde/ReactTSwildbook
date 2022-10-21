import axios from "axios";
import { useEffect, useState } from "react";
import { Iskill, Iwilder } from "../interfaces";
import Select, { components, DropdownIndicatorProps } from "react-select";


interface IaddSkillToWilderProps {
  wilder: Iwilder;
  onCancelClicked: () => void;
}

interface Ioption {
  readonly value: string;
  readonly label: string;
}

const AddSkillToWilder = ({
  wilder,
  onCancelClicked,
}: IaddSkillToWilderProps) => {
  const [skills, setSkills] = useState<Iskill[]>([]);

  useEffect(() => {
    async function fetch(): Promise<void> {
      try {
        const result = await axios.get("http://localhost:5000/api/skills");
        setSkills(result.data.data);
      } catch {
        console.log("nul");
      }
    }
    fetch();
  }, []);
  
  const skillOptions: Ioption[] = [];
  skills.map((skill) => (skillOptions.push({ value: skill.name , label: skill.name})));

  function handleChange(){

  }

  const DropdownIndicator = (props: DropdownIndicatorProps<Ioption, true>) => {
    return (
      <components.DropdownIndicator {...props}></components.DropdownIndicator>
    );
  };

  return (
    <div>
      <h2>Ajouter des skills à : {wilder.name}</h2>
      <form action="">
        <Select
          closeMenuOnSelect={false}
          components={{ DropdownIndicator }}
          isMulti
          options={skillOptions}
          onChange={handleChange}
        />
      </form>
      <button onClick={onCancelClicked}>Fermer</button>
    </div>
  );
};
export default AddSkillToWilder;
