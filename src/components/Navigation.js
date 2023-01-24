import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav>
      <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
        Accueil
      </NavLink>
      <NavLink
        to="/pour-moi"
        className={(nav) => (nav.isActive ? "nav-active" : "")}
      >
        Coups de coeur
      </NavLink>
    </nav>
  );
};

export default Navigation;
