import { useState } from "react";
import { Formik } from 'formik';

export default function CommentsForm() {
    const [formData, setFormData] = useState({
        username: "",
        remarks: "",
        rating: 5
    });

    const handleInputChange = (event) => {
        setFormData((currData) => {
            return { ...currData, [event.target.name]: event.target.value };
        });
    };

    const handleSubmit = (event) => {
        console.log(formData);
        addNewComment(formData);
        event.preventDefault();
        setFormData({
            username:"",
            remarks:"",
            raating: 5
        });
    };

    return (
        <div>
            <h3>Give a Comment</h3>
            <form onSubmit={handleSubmit}>
                <input
                    placeholder="Username"
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleInputChange}
                /><br /><br />
                <textarea
                    placeholder="Remarks"
                    name="remarks"
                    value={formData.remarks}
                    onChange={handleInputChange}
                /><br /><br />
                <input
                    type="number"
                    min={1}
                    max={5}
                    name="rating"
                    value={formData.rating}
                    onChange={handleInputChange}
                    placeholder="Rating"
                /><br /><br />
                <button type="submit">Add Comment</button>
            </form>
        </div>
    );
}
