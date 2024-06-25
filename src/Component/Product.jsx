import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addcart } from '../Slice/counterSlice';

function Product() {
  const [prodcut, setproduct] = useState([]);
  const [category, setcategory] = useState([]);

  useEffect(() => {

    fetch('https://dummyjson.com/products/category-list')
      .then(res => res.json())
      .then(caterory => setcategory(caterory))
    
      fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then(data => setproduct(data.products))
  
    }, []);



  // const count = useSelector((state) =>  state.counter.value)
  const dispatch = useDispatch();

  if (prodcut != null) {
    return (
      <>
        <Container>
          <Row>
            <Col xl={3}>
              {
                category.map((item) => {
                  return (
                    <p className='mt-3 fs-5 fw-bold'>{item}</p>
                  )
                })
              }
            </Col>
            <Col>
              <Row className='gy-5'>
                {
                  prodcut.map((item) => {
                    return (
                      <Col xl={4} lg={4} md={6}>
                        <div className='main shadow mt-4'>
                          <div className="p_img">
                            <Link to={`/caterory/${item.id}`}>
                              <img src={item.thumbnail} alt="" />
                            </Link>
                          </div>
                          <div className="text text-center">
                            <p className='mt-2 fw-bold fs-5'>{item.title}</p>
                            <p className='fw-bold fs-5'>Rating: {item.rating}</p>
                            <p className='mt-2 fw-bold fs-5'>Discount: {item.discountPercentage}</p>
                            <button className='px-4 py-2 border border-none' onClick={() => dispatch(addcart(item))}>Add Cart</button>
                          </div>
                        </div>
                      </Col>
                    )
                  })
                }
              </Row>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default Product;
