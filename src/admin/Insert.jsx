import axios from "axios";
import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Insert = () => {
    const txtname = useRef();
    const txtprice = useRef();
    const image = useRef();
    const navigate = useNavigate();

    // Handle form submission
    const handlesubmit = (e) => {
        e.preventDefault();

        // Get the values
        const name = txtname.current.value;
        const price = txtprice.current.value;
        const selectedImage = image.current.files[0];

        // Validation: Check if all fields are filled
        if (!name) {
            toast.error("Name is required!");
            return;
        }

        if (!price) {
            toast.error("Price is required!");
            return;
        }

        if (!selectedImage) {
            toast.error("Image is required!");
            return;
        }

        const formData = new FormData();
        formData.append('name', name);
        formData.append('price', price);
        formData.append('image', selectedImage);

        axios.post('http://localhost/cycle/insert.php', formData)
        .then(function(response){
            console.log(response);
            if(response.data.status === 'Product add sucessfully') {
                toast.success(response.data.status);
            } else {
                toast.success(response.data.status);

                setTimeout(() => {
                    navigate("/hello1");
                }, 1500);
            }
        })
        .catch(error => {
            console.error('There was an error uploading the image:', error);
            toast.error('Error uploading the product. Please try again.');
        });
    };

    return (
        <>
            <ToastContainer />
            <form 
                method="post" 
                encType="multipart/form-data" 
                onSubmit={handlesubmit} 
                className="form-container"
            >
                <table className="form-table">
                    <tbody>
                        <tr>
                            <td className="form-label">Name:</td>
                            <td>
                                <input 
                                    type="text" 
                                    name="name" 
                                    ref={txtname} 
                                    className="form-input" 
                                />
                            </td>
                        </tr>
                        <tr>
                            <td className="form-label">Price:</td>
                            <td>
                                <input 
                                    type="number" 
                                    name="price" 
                                    ref={txtprice} 
                                    className="form-input" 
                                />
                            </td>
                        </tr>
                        <tr>
                            <td className="form-label">Image:</td>
                            <td>
                                <input 
                                    type="file" 
                                    name="image" 
                                    ref={image} 
                                    className="form-input" 
                                />
                            </td>
                        </tr>
                        <tr>
                            <td colSpan="2" style={{ textAlign: 'center' }}>
                                <input 
                                    type="submit" 
                                    value="Submit" 
                                    className="submit-button" 
                                />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </>
    );
};

export default Insert;
