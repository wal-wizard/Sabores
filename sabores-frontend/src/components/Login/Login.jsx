import React from "react";
import { useForm } from "react-hook-form";
import { FaLock, FaUserAlt } from "react-icons/fa"

import "./Login.css";
import { Link } from "react-router-dom";

const Login = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div className="form-container">
      <div className="a-side">
        <img src={require("../images/Sabores-Logo.png")} alt="logo" className="logo"/>
      </div>
      <div className="b-side">
        <form onSubmit={handleSubmit(onSubmit)}>
          <FaUserAlt className="icon-style"/>
          <input {...register("usuario")} placeholder="Usuario" />
          <FaLock className="icon-style"/>
          <input {...register("usuario")} placeholder="Senha" type="password"/>
          <button type="submit">Entrar</button>
        </form>
        <h4 className="new__account">
          Ainda nao é usuario ? &nbsp;
          <span><Link to={"/register"}>crie sua conta</Link></span>
        </h4>
      </div>
    </div>
  );
};

export default Login;