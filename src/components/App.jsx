import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });
  const [headingText, setHeadingText] = useState("")

  function handleChange(event){
    const {name, value} = event.target;

    setContact((prevValue)=> {
        return {
          ...prevValue,
          [name]: value,
        }
    })

  }
  function updateChange(event){
      setHeadingText(contact)

      event.preventDefault();
  }

  return (
    <div className="container">
      <h1>
        Hello {headingText.lName} {headingText.fName} 
      </h1>
      <p>{contact.email}</p>
      <form onSubmit={updateChange} >
        <input name="fName" onChange={handleChange} placeholder="First Name" value={contact.fName} />
        <input name="lName"  onChange={handleChange} placeholder="Last Name" value={contact.lName}/>
        <input name="email" onChange={handleChange} placeholder="Email" value={contact.email} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;




/* function App(){
    import Header from "./Header";
    import Footer from "./Footer"; 
    import Notes from "./Notes";
    import notes from "../notes";

    return  (
        <div>
            <Header />
            {notes.map((noteItem) => {
                return (
                    <Notes 
                    key= {noteItem.key}
                    title={noteItem.title} 
                    content={noteItem.content}
                    /> 
                )})} 
            <Footer  />
        </div>
    )
    export default App;
} */

