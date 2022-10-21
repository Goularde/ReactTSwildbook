import { FormEvent, MouseEvent } from "react";

export interface Iwilder {
  id?: number;
  name: string;
  city: string;
  upvotes?: Iupvote[];
  onWilderDeleted: (event: MouseEvent) => void;
}

export interface Iupvote {
  id?: number;
  skill: Iskill;
  wilder: Iwilder;
  upvote: number;
}

export interface Iskill {
  id?: number;
  name: string;
}

export interface IonWilderCreated {
  onWilderCreated: (event: FormEvent) => void;
}
