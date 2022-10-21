import { IonWilderCreated } from "../interfaces";

const AddWilderForm = ({ onWilderCreated }: IonWilderCreated) => {
  return (
    <div>
      <h2>Ajouter un wilder</h2>
      <form onSubmit={onWilderCreated}>
        <label htmlFor="name">
          Nom :
          <input id="name" type="text" name="name" />
        </label>
        <br />
        <label htmlFor="city">
          Ville :
          <input id="city" type="text" name="city" />
        </label>
        <button type="submit">Ajouter</button>
      </form>
    </div>
  );
};
export default AddWilderForm;
