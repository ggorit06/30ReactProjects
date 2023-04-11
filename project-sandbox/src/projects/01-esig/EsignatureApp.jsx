import React, {useState} from 'react';
import Title from '../components/Title';

export default function EsignatureApp() {
    const [name, setName] = useState("Your Signature");
    const [date, setDate] = useState("select date");

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleDateChange = (e) => {
        setDate(e.target.value);
    };


    const inputStyle = {
        border:"none",
        borderBottom: "2px dotted",
        outline:"none",
        padding:".35rem 0",
    };
    document.body.style.background = "#eee";

    return (
        <div className='container text-center'>
            <Title classes={"title"} text={name}/>
            <Title classes={"main-title mb-4"} text={!date? "DOB": date}/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias dolore 
                blanditiis deserunt, sequi assumenda veniam architecto iste
                 accusantium voluptatum numquam facere atque deleniti quibusdam delectus? 
                 Veritatis vitae vero temporibus perspiciatis.</p>

            <footer className='d-flex' 
                    style={{
                        justifyContent:"space-around",
                        position:"relative", 
                        top:"40vh",
                    }}
            >
              <input 
              type="date" value={""} 
              style={inputStyle} 
               onChange={handleDateChange}
               />

              <input 
              type="text" 
              value={"name"} 
              style={inputStyle} 
              onChange={handleNameChange} 
              />  

            </footer>
        </div>
    );
}