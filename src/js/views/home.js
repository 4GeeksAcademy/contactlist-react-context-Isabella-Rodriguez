import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Home = () => {
    const [inputName, setInputName] = useState("")
    const [inputEmail, setInputEmail] = useState("")
    const [inputPhone, setInputPhone] = useState("")
    const [inputAddress, setInputAddress] = useState("")
	const { store, actions } = useContext(Context);

     
    return (
        <div className="container" style={{ backgroundColor: "white", width: "70%", paddingBottom: "10%" }}>
            <h1 style={{ marginLeft: "30%" }}>Add a new contact</h1>
            <form>
                <div className="mb-3">
                    <label htmlFor="Fullname" className="form-label">Full name</label>
                    <input type="text" className="form-control" id="Fullname" placeholder="Full name"   
                            onChange={(e) => setInputName(e.target.value)} value={inputName}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="Email" className="form-label">Email</label>
                    <input type="email" className="form-control" id="Email" placeholder="Email"  onChange={(e) => setInputEmail(e.target.value)} value={inputEmail} />
                </div>
                <div className="mb-3">
                    <label htmlFor="Phone" className="form-label">Phone</label>
                    <input type="text" className="form-control" id="Phone" placeholder="Phone"  onChange={(e) => setInputPhone(e.target.value)} value={inputPhone} />
                </div>
                <div className="mb-3">
                    <label htmlFor="Adress" className="form-label">Address</label>
                    <input type="text" className="form-control" id="Adress" placeholder="Address"  onChange={(e) => setInputAddress(e.target.value)} value={inputAddress} />
                </div>
                <button onClick={()=> {
                    if(store.contactId.length == 1){
                        actions.postContact(inputName, inputPhone, inputEmail, inputAddress)
                    } else {
                        actions.addNewContact(inputName, inputPhone, inputEmail, inputAddress);
                    }
                    
                     setInputName(""); 
                     setInputPhone("");
                     setInputEmail("") ; 
                     setInputAddress("")}} 
                    
                    type="submit" className="btn btn-primary w-100 mb-4">Save</button>
            </form>
            <Link to="/demo">
                or get back to contacts
            </Link>
        </div>
    );
}