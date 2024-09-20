import axios from "axios"
import { useContext, useEffect, useState } from "react"
import { useNavigate, useParams, Link } from "react-router-dom"
import { FaAngleRight } from "react-icons/fa6";
// import { CartContext } from "./CartContext";

const Singleproduct = () => {
    // const { addToCart } = useContext(CartContext);
    const [data, setdata] = useState([])

    const [quantity, setQuantity] = useState(1);
    const increment = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
    };

    const decrement = () => {
        setQuantity(prevQuantity => (prevQuantity > 1 ? prevQuantity - 1 : 1));
    };

    const { id } = useParams()

    useEffect(() => {
        const params = new FormData()
        params.set("id", id)

        axios.post('http://localhost/cycle/single.php', params)
            .then(function (response) {
                console.log(response.data.userdata);
                setdata(response.data.userdata)
            })
            .catch(function (error) {
                console.log(error);
            })
    }, [])
    var navigate = useNavigate();
    const handleshipping = () => {
        // addToCart(data, quantity);
        navigate('/Shipping');
    }
    return (
        <>

            <div className="pageis-main">
                <hr />
                <div className="container">
                    <div className="pageis-main-inneer">
                        {/* <!-- --------------------------------------------------------------- --> */}
                        <div className="pageis-main-flex">
                            <div className="pageis-home">
                                <span className="pagies-home-name"> <Link to="/"> home</Link>  <FaAngleRight />&nbsp;
                                </span>
                            </div>
                            <div className="pageis-home">
                                {/* &nbsp;  */}
                                <span className="pagies-home-name"><Link to='/Shop'>Shop</Link>  </span>

                            </div>
                        </div>
                        {/* <!-- --------------------------------------------------- --> */}
                        <div className="column-main">

                            <div className="columan-main-inner">
                                <div className="column-image-main">
                                    <div className="column-image-main-inner">
                                        <div className="coluamn-img">
                                            <img src={`http://localhost/cycle/assets/img/${data.img}`} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="columan-main-inner">
                                <div className="column-content">
                                    <div className="column-title">
                                        <h1>
                                            <span className="base">{data.name}</span>
                                        </h1>
                                    </div>
                                    <div className="column-review">
                                        <a href="#" className="">Be the first to review this product </a>
                                    </div>

                                    <div className="column-main-price">
                                        <span className="p-price">${data.price}</span>
                                    </div>
                                    <div className="column-stock-info">
                                        <div className="column-stock-ckeck">
                                            <span>In stock</span>
                                        </div>
                                        <div className="column-Sku">
                                            <span><strong>SKU#:</strong>PROD004</span>
                                        </div>
                                    </div><br />

                                    <div className="jj"></div>

                                    <div className="column-product-info">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor<br />
                                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                                            nostrud<br />
                                            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                        <ul>
                                            <li>Duis aute irure dolor in reprehenderit in voluptate.</li>
                                            <li>Velit esse cillum dolore eu fugiat nulla pariatur.</li>
                                        </ul>
                                    </div>
                                    <div className="je"></div>

                                    <div className="column-qty">
                                        <p>Qty</p>
                                        <div className="cantrol">
                                            <input
                                                type="text"
                                                className="counter-input"
                                                value={quantity}
                                                readOnly
                                            />
                                            <span className="qty-button">
                                                <span className="qty-sum" onClick={increment}>
                                                    <i className="fa-solid fa-plus"></i>
                                                </span>

                                                <span className="qty-sub" onClick={decrement}>
                                                    <i className="fa-solid fa-minus"></i>
                                                </span>
                                            </span>
                                            <span>
                                                <div className="column-action">
                                                    <a href="#" onClick={handleshipping}>ADD TO CART</a>
                                                </div>
                                            </span>
                                        </div>
                                    </div>

                                    <div className="column-social-icon">
                                        <span className="social-icon">
                                            <i className="fa-solid fa-heart"> </i>
                                            &nbsp; <span className="soical">LIKE TO WISH LIST</span>
                                        </span>
                                        <span className="social-icon">
                                            <i className="fa-solid fa-chart-simple"></i>
                                            &nbsp;&nbsp;
                                            <span className="soical">ADD TO COMPARE</span>
                                        </span>
                                    </div>

                                    <div className="coluam-shopping">
                                        <div className="truck-icon"></div>
                                        <div className="shoping-content">
                                            <div className="shoping-text">
                                                <span>Delivery: 3-4 Working Days</span>
                                                <span>Expected Delivery Date is 6th August, 2024</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="column-offer">
                                        <p>
                                            <strong><i className="fa fa-star"></i> Special Offer!</strong>
                                        </p>
                                        <p>
                                            Ut enim ad minim veniam quis nostrud laboris nisi 20% off. Sed aliquip do eiusmod tempor: <span>XYZ20</span>
                                        </p>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Singleproduct