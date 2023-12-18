import React,{useState} from "react";
//make state for formdata, set values to state,..with onchange function.
//make onsubmit on form and creat newdata object. inside function include callback function that takes newdata as paramenter
// define the callback function in parent to update state of toys with new object
// make post request, spread operator to set state
function ToyForm({onHandleSubmit}) {
  const[formData, setFormData] = useState({
    name:'',
    image:''
  })
  //function that sets the values from the form to state
  const handleInputChange = (event) =>{
    setFormData({...formData, [event.target.name]: event.target.value})
  }
  //function that creates a new object and invokes the callback passed down from parent to update state of toys with new object
  //also makes fetch post request in parent component to update state of toys with new object
  const handleSubmit = (e) =>{
    e.preventDefault()

    const newToyData ={
      name: formData.name,
      image: formData.image
    }
    onHandleSubmit(newToyData)
 }
 
  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="add-toy-form">
        <h3>Create a toy!</h3>
        <input
          onChange={handleInputChange}
          value={formData.name}
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
        />
        <br />
        <input
          onChange={handleInputChange}
          value={formData.image}
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;
