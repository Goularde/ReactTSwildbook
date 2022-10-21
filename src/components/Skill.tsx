
import React, { useEffect } from "react";

interface IskillProps{
    id?: number;
    name: string;
    votes: number;
}

const Skill = ({id, name, votes }: IskillProps) => {
    return (
    <li>
        {name}
        <span className="votes">{votes}</span>
    </li>
    );
};
export default Skill;
