import React, { useContext } from "react";
import httpClient from "../../../services/services";
import { AuthContext } from "../../../auth/AuthContext";
import CardItem from "../../ui/CardItem";

const Cards = ({ idBook, title, author }) => {
  const { user } = useContext(AuthContext);

 
  return (
    <>
      <CardItem
        idBook={idBook}
        title={title}
        author={author}
        url={`student/details`}
      />
    </>
  );
};

export default Cards;
