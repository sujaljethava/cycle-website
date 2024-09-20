import React from 'react'
import { IoLocationSharp, IoCall } from "react-icons/io5";
import { FaAngleDown } from "react-icons/fa6";
import { FaUser, FaSearch, FaShoppingBag } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom'
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';



const Header = () => {

  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate("/login")
  }

  const items = [
    {
      label: <Link to="/Ragi">Registration</Link>,
      key: '1',
    },
    {
      label: <Link to="/login" onClick={logout}>logout</Link>
    },
    {
      label: <Link to="/User">{localStorage.getItem("name")}</Link>,
      key: '2',
    }
  ];

  return (
    <>
      {/* haed part start */}

      <div className="my-main">
        <div className="container">
          <div className="my-inner-main">
            <div className="my-child">
              <div className="my-inner-child">
                <div className="address">
                  <div className="my-city">
                    <p>  <IoLocationSharp className='my' />123,Street Name,City,England</p>
                  </div>
                  <div className="my-city">
                    <p> <IoCall className='my' />+123456789</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="my-child">
              <div className="my-inner-child">
                <div className="address">
                  <div className="my-city1">
                    <p>
                      USD$<FaAngleDown className='my' /> </p>
                  </div>
                  <div className="my-city1">
                    <p>
                      <Dropdown
                        menu={{
                          items,
                        }}
                        trigger={['click']}
                      >
                        <a onClick={(e) => e.preventDefault()}>
                          <Space>
                            My Account
                            <DownOutlined />
                          </Space>
                        </a>

                      </Dropdown>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* haed part end */}


      {/* nav part start */}
      <div className="nav-main">
        <div className="container">
          <   div className="nav-inner-main">
            <div className="nav-child">
              <div className="nav-inner-child">
                <div className="nav-logo">
                  <img src="assests/img/logo.jpg" alt="" />
                </div>
              </div>
            </div>
            <div className="nav-child">
              <div className="nav-inner-child">
                <div className="nav-middle">
                  <ul className="main-menu">
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>
                      <Link to="/Shop">Shop<FaAngleDown className='my' /></Link>
                      <ul className="mega-menu">
                        <li>
                          <Link to="#">Fashion<FaAngleDown className='my1' /></Link>
                          <ul className="sub-menu">
                            <li>
                              <Link to="#">Man</Link>
                            </li>
                            <li>
                              <Link to="#">Woman</Link>
                            </li>
                            <li>
                              <Link to="#">Kids</Link>
                            </li>
                            <li>
                              <Link to="#">Accessories</Link>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <Link to="#">Jewellwery<FaAngleDown className='my1' /></Link>
                          <ul className="sub-menu">
                            <li>
                              <Link to="#">Rings</Link>
                            </li>
                            <li>
                              <Link to="#">Bracelets</Link>
                            </li>
                            <li>
                              <Link to="#">Neklaces</Link>
                            </li>
                            <li>
                              <Link to="#">Wedding bands</Link>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <Link to="#">Furniture<FaAngleDown className='my1' /></Link>
                          <ul className="sub-menu">
                            <li>
                              <Link to="#">Living room</Link>
                            </li>
                            <li>
                              <Link to="#">Kitchen</Link>
                            </li>
                            <li>
                              <Link to="#">Office</Link>
                            </li>
                            <li>
                              <Link to="#">Home Decor</Link>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <Link to="#">Autoparts<FaAngleDown className='my1' /></Link>
                          <ul className="sub-menu">
                            <li>
                              <Link to="#">Engine parts</Link>
                            </li>
                            <li>
                              <Link to="#">Exhust parts</Link>
                            </li>
                            <li>
                              <Link to="#">Brake parts</Link>
                            </li>
                            <li>
                              <Link to="#">Body parts</Link>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link to="/Furniture">Furniture<FaAngleDown className='my' /></Link>
                      <ul className="mega-menu">
                        <li>
                          <Link to="#">Living room</Link>
                        </li>
                        <li>
                          <Link to="#">Kitchen</Link>
                        </li>
                        <li>
                          <Link to="#">Office</Link>
                        </li>
                        <li>
                          <Link to="#">Home Decor</Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link to="/Sale">Sale</Link>
                    </li>
                    <li>
                      <Link to="/Contact">Contact Us</Link>
                    </li>
                  </ul>
                </div>

                <div className="nav-inner-child">
                  <div className="nav-middle">
                    <div className="nav-icons" id='navi'>
                      <Link to="#"><FaSearch /></Link >
                    </div>
                    <div className="nav-icons">
                      <Link to="#"><FaShoppingBag />
                      </Link>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* nav part end */}
    </>
  )
}

export default Header
