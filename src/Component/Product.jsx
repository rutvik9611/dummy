import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import { Link, useNavigate, } from 'react-router-dom';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useDispatch, useSelector } from 'react-redux';
import { addtoCart, increment } from '../Slice/counterSlice';
function Product() {

    const [arr, setArr] = useState([])
    const [items, setItems] = useState([])
    const [categoryf, setcategory] = useState()

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const navigate = useNavigate();
    const serch = useSelector((state) => state.counter.searching)

    useEffect(() => {
        fetch('https://dummyjson.com/products/category-list')
            .then(res => res.json())
            .then(data => setArr(data));

        fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then(data => setItems(data.products));
            console.log(items)
    }, []);

    useEffect(() => {
        if (categoryf) {
            fetch(`https://dummyjson.com/products/category/${categoryf}`)
                .then(response => response.json())
                    .then(data => setItems(data.products));
        }
        console.log(categoryf)
    }, [categoryf]);

    useEffect(() => {
        if(serch != ''){
         fetch(`https://dummyjson.com/products/search?q=${serch}`)
         .then(response => response.json())
         .then(data => setItems(data.products));
        }
       }, [serch]);

    const handle = (v) => {
        setcategory(v);
    }

    const handleAddToCart = (item) => {
        dispatch(addtoCart(item));
        dispatch(increment());
        // navigate('/cart'); // Ensure this path is correct    
    };
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()

    if (items != null) {
        return (

            <div className='p-3'>

                <Row >
                    <Col lg={3} md={3} className='border-end '>
                        <div className="d-none d-lg-block  positione ">
                            {
                                arr.map((item) => {
                                    return (
                                        <>
                                            <div id="example-fade-text">
                                                <Link  href='' className='d-block text-decoration-none text-white p-2 fw-bold fs-5'  onClick={() => handle(item)}>{item}</Link>
                                            </div>
                                        </>
                                    )
                                })
                            }
                        </div>

                        <div className="d-block d-lg-none">
                            <Button variant="primary" onClick={handleShow}>
                               Categories
                            </Button>

                            <Offcanvas show={show} onHide={handleClose}>
                                <Offcanvas.Header closeButton>
                                    <Offcanvas.Title>Offcanvas</Offcanvas.Title>
                                </Offcanvas.Header>
                                <Offcanvas.Body>
                                    {
                                        arr.map((item) => {
                                            return (
                                                <>
                                                    <div id="example-fade-text">
                                                        <Link href="#" className='d-block text-decoration-none text-dark p-2 fw-bold fs-5'  >{item}</Link>
                                                    </div>
                                                </>
                                            )
                                        })
                                    }
                                </Offcanvas.Body>
                            </Offcanvas>
                        </div>




                    </Col>
                    <Col lg={9} md={9}>
                        <Row>
                            {
                                items.map((item) => {
                                    return (
                                        <Col lg={4} md={6} key={item.id} className='g-3'>
                                            <div className="main shadow w-100 h-100">
                                                <div className="image">
                                                    <Link to={`/data/${item.id}`}>
                                                        <img src={item.thumbnail} alt="" className='w-100 h-75 mt-5'/>
                                                    </Link>
                                                </div>
                                                <div className="text px-2">
                                                    <h5>{item.title}</h5>
                                                    <div className='d-flex justify-content-between mt-1'>
                                                        <h5>Rating {item.rating}</h5>
                                                        <h4>₹{item.price} <span className='fs-6 text-danger'>{item.discountPercentage}</span> </h4>
                                                    </div>
                                                    <div className='d-flex cart justify-content-between'>
                                                        <p className='mt-2'>{item.category}</p>
                                                        <button className='bg-danger border-0 text-white' style={{ padding: "5px 20px", margin: '5px' }} onClick={() => { handleAddToCart(item) }}>Add Cart</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </Col>
                                    )
                                })
                            }
                        </Row>
                    </Col>
                </Row>

            </div>

        )
    }
}

export default  Product