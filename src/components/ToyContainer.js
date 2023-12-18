import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({toys, handleDeleteClick, handleLikeClick}) {

  return (
    <div id="toy-collection">{toys.map(toy=> <ToyCard handleLikeClick={handleLikeClick} handleDeleteClick={handleDeleteClick}key={toy.id} toy={toy}/>)}</div>
  );
}

export default ToyContainer;

