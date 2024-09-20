import React from "react";
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';
import { FaThLarge, FaThList } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Shop1 from './Shop1';

const items = [
    {
      key: '1',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
          Best seller
        </a>
      ),
    },
    {
      key: '2',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
          Relevance
        </a>
      )
    },
    {
      key: '3',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
          Name,A to Z
        </a>
      ),
  
    },
    {
      key: '4',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
          Name,Z to A
        </a>
      ),
  
    },
    {
      key: '5',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
          Price,low to high
        </a>
      ),
  
    },
    {
      key: '6',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
          Price high to low
        </a>
      ),
    },
  ];
const Second =() =>{
    return(
        <>

              <div className='s-sort'>
                <div className='s-child'>
                  <Link to="#" className='icon1'><FaThLarge /></Link>
                  <Link to="#" className='icon1'><FaThList /></Link>
                  <span className='sort-s1'>There is 16 Products.</span>
                </div>

                <div className='s-child'>
                  <span className='sort-s1'>Sort by:</span>
                  <Dropdown
                    menu={{
                      items,
                    }}
                  >
                    <a onClick={(e) => e.preventDefault()}>
                      <Space className='r1'>
                        Relevance
                        <DownOutlined className='sicon' />
                      </Space>
                    </a>
                  </Dropdown>
                </div>
              </div>

              <div className='s-pro'>
                <Shop1 image={"assests/img/p11.jpg"} name={"Perspiciatis Unde"} prise={"$99.00"} />
                <Shop1 image={"assests/img/p10.jpg"} name={"omnis iste"} prise={"$199.00"} />
                <Shop1 image={"assests/img/p9.jpg"} name={"accusantium dolore"} prise={"$299.00"} />
                <Shop1 image={"assests/img/p12.jpg"} name={"rem aperiam"} prise={"$249.00"} />
                <Shop1 image={"assests/img/p13.jpg"} name={"adipisci velit"} prise={"$289.00"} />
                <Shop1 image={"assests/img/p7.jpg"} name={"numquam eius"} prise={"$279.00"} />
                <Shop1 image={"assests/img/p8.jpg"} name={"modi tempora"} prise={"$349.00"} />
                <Shop1 image={"assests/img/p14.jpg"} name={"dolore magnam"} prise={"$399.00"} />
                <Shop1 image={"assests/img/p15.jpg"} name={"voluptas nulla"} prise={"$389.00"} />
                <Shop1 image={"assests/img/p5.jpg"} name={"iure reprehenderit"} prise={"$379.00"} />
                <Shop1 image={"assests/img/p2.jpg"} name={"porro quisquam"} prise={"$319.00"} />
                <Shop1 image={"assests/img/p3.jpg"} name={"architecto beatae"} prise={"$359.00"} />
              </div>
        </>
    )
}

export default Second
