import React from "react";
// create onClick to button and in handleDelete function
//make a callback function that takes toy.
//take function up to parent and to grandparent(app)
//define the callback function which takes toy as argument
//filter toy.id that matches the selected toy
function ToyCard({toy, handleDeleteClick, handleLikeClick}) {
  
  return (
    <div className="card">
      <h2>{toy.name}</h2>
      <img
        src={toy.image}
        alt={toy.name}
        className="toy-avatar"
      />
      <p>{toy.likes} Likes </p>
      <button onClick ={()=>handleLikeClick(toy)}className="like-btn">Like {"<3"}</button>
      <button onClick={()=>handleDeleteClick(toy)} className="del-btn">Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
