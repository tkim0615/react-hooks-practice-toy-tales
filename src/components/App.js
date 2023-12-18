import React, { useState, useEffect } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";
const url = 'http://127.0.0.1:3001/toys'
//1useEffect to fetch data from the API
//2. create state for data we get and send down to Toycontainer
//3. map over array to render Toycard(make key, and passdown object to Toycard)
//4. replace toy's name, image likes,
function App() {
  const [showForm, setShowForm] = useState(false);
  const [toys, setToys] = useState([])

  useEffect(()=>{
    fetch(url)
      .then(res => res.json())
      .then(toys => setToys(toys))
  }, [])

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

   const handleDeleteClick =(deletedToy) =>{
      const filteredToy = toys.filter(toy =>{
        if (toy.id!== deletedToy.id) {
          return true
   }})
    fetch(`http://127.0.0.1:3001/toys/${deletedToy.id}`,{ 
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }})
    .then(res => res.json())
      setToys(filteredToy)
   }

  //function that takes data from ToyForm and sends it to the API
  const onHandleSubmit =(data) =>{
    fetch(url,{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(newData=> setToys([...toys, newData]))
  }

  const handleLikeClick = (likedToy) =>{
   const updatedToys = toys.map(toy => {
      if(toy.id === likedToy.id) {
        return {...toy, likes: toy.likes + 1}
      }        return toy
    }
  )
  setToys(updatedToys)
  }






  return (
    <>
      <Header />
      {showForm ? <ToyForm onHandleSubmit={onHandleSubmit} /> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer handleLikeClick={handleLikeClick} handleDeleteClick={handleDeleteClick} toys={toys} />
    </>
  );
}

export default App;
