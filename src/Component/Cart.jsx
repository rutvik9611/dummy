import React, { useEffect, useState } from 'react';
import { Col, Container, Row, Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, removeFromCart } from '../Slice/counterSlice';

function Cart() {
    const cartData = useSelector((state) => state.counter.cart);
    const dispatch = useDispatch();
    const [total, setTotal] = useState(0);

    useEffect(() => {
        let totalPrice = 0;
        cartData.forEach(item => {
            totalPrice += item.price * item.quantity;
        });
        setTotal(totalPrice);
    }, [cartData]);

    const handleRemoveFromCart = (productId) => {
        dispatch(removeFromCart(productId));
    };

    const handleIncrement = (productId) => {
        dispatch(increment(productId));
    };

    const handleDecrement = (productId) => {
        dispatch(decrement(productId));
    };

    return (
        <Container>
            <Row>
                <Col lg={9} className='mt-4 pb-5 border'>
                    {
                        cartData.map((item, index) => (
                            <div className='d-flex flex-md-nowrap gap-3 p-2 flex-wrap justify-content-center w-100'>
                                <div className="image-cart"><img src={item.thumbnail} alt="" /></div>
                                <div className="text-cart w-100 mt-5">
                                    <h5 className='mt-2'>{item.title} ({item.category})</h5>
                                    <h6 style={{ color: '#878dae' }}>Category : <span   >{item.category}</span> </h6>
                                    <p>{item.price}   {item.discountPercentage}%</p>
                                    <div className='mt-2 d-flex w-100 justify-content-around'>
                                        <div className='d-flex align-items-center justify-content-between'>
                                            <button onClick={() => handleDecrement(item.id)} style={{ border: '0', padding: '5px 15px ' }}>-</button>
                                            <input type='number' className='mx-auto' value={item.quantity} readOnly style={{ width: '40px', border: '0', textAlign: 'center' }} />
                                            <button onClick={() => handleIncrement(item.id)} style={{ border: '0', padding: '5px 15px ' }}>+</button>
                                        </div>
                                        <div className='d-flex'>
                                            <h5> Total : {(item.price * item.quantity).toFixed(2)}</h5>
                                            <button onClick={() => handleRemoveFromCart(item.id)} className='ms-5'>Remove</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }

                </Col>
                <Col lg={3} className='mt-4'>
                    <div className="total-cart border p-3">
                        <p className='fs-6 m-0'>Total: ₹ {total.toFixed(2)}</p>
                    </div>
                </Col>
            </Row>
        </Container >
    )
}

export default Cart;