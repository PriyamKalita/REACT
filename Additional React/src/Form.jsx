import { useState } from "react";

export default function Form() {
    // State Variables
    let [formData, setFormData] = useState({
        fullName: "",
        username: ""
    });

    let handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData((currentData) => ({
            ...currentData,
            [name]: value
        }));
    };

    let handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
        setFormData({
            fullName: "",
            username: ""
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="fullName">Full Name </label>
            <input
                placeholder="Enter Full Name"
                type="text"
                value={formData.fullName}
                onChange={handleInputChange}
                id="fullName"
                name="fullName"
            />

            <br></br>
            <br></br>
            <br></br>

            <label htmlFor="username">User Name </label>
            <input
                placeholder="Enter User Name"
                type="text"
                value={formData.username}
                onChange={handleInputChange}
                id="username"
                name="username"
            />
            <button type="submit">Submit</button>
        </form>
    );
}
