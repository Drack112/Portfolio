import React from "react";
import classes from "../../styles/form.module.css";

const Form = () => {
  return (
    <form
      className={`${classes.form}`}
      action="https://formsubmit.co/joaosagrado3@outlook.com"
      method="POST"
    >
      <div className={`${classes.form__group}`}>
        <input type="text" placeholder="Seu nome" required />
      </div>
      <div className={`${classes.form__group}`}>
        <input type="email" placeholder="Seu email" required />
      </div>
      <div className={`${classes.form__group}`}>
        <textarea type="text" rows={5} placeholder="Mensagem" required />
      </div>

      <button className="primary__btn" type="submit">
        Enviar
      </button>
    </form>
  );
};

export default Form;
