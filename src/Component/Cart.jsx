import React, { useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { BiDollar } from 'react-icons/bi';
import { } from '../Slice/counterSlice';

function Cart() {
    const cartItems = useSelector((state) => state.cart.cartitem);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(cartItems());
    }, []);

    return (
        <div className="px-3">
            <p className="fs-3 fw-medium">Shopping Cart</p>
            {cartItems.length > 0 ? (
                cartItems.map((item, index) => (
                    <Row key={index} className="justify-content-center">
                        <Col xl={1} className="align-content-center">
                            <p
                                className="text-blue cursor-pointer"
                                // onClick={() => dispatch(removeitem(index))}
                            >
                                Remove
                            </p>
                        </Col>
                        <Col xl={2} className="align-content-center">
                            <img src={item.images[0]} alt="" className="w-75" />
                        </Col>
                        <Col xl={5} className="align-content-center">
                            <p className="fs-5 fw-medium mb-1">{item.title}</p>
                            <p className="text-success f-14">{item.availabilityStatus}</p>
                            <p className="mt-1">
                                <span className="fw-medium f-14">Quantity:</span>
                                <select
                                    name="quantity"
                                    className="mx-2"
                                    // value={quantities[index]}
                                    // onChange={(e) => dispatch(getquantity([e.target.value, index]))}
                                >
                                    {[...Array(15).keys()].slice(1).map((qty) => (
                                        <option key={qty} value={qty}>
                                            {qty}
                                        </option>
                                    ))}
                                </select>
                                <sup className="fs-6" title={`Minimum ${item.minimumOrderQuantity} quantity Order`}>
                                    *
                                </sup>
                            </p>
                        </Col>
                        <Col xl={2} className="border-start align-content-center">
                            <p className="mb-0">
                                <BiDollar className="dollar-sign mb-3" />
                                <span className="fs-4 fw-medium">
                                    {(item.price * (1 - item.discountPercentage / 100)).toFixed(2)}
                                </span>
                            </p>
                            <p className="f-13">
                                <span className="f-13 text-secondary mx-1">
                                    M.R.P.
                                    <del className="text-secondary">
                                        <BiDollar className="mb-1" />
                                        {item.price}
                                    </del>
                                </span>
                                <span className="text-black">({item.discountPercentage}% Off)</span>
                            </p>
                        </Col>
                        <Col xl={1} className="border-start align-content-center">
                            <p className="mb-0">
                                <BiDollar className="dollar-sign mb-3" />
                                <span className="fs-4 fw-medium">
                                    {/* {((item.price * (1 - item.discountPercentage / 100)) * quantities[index]).toFixed(2)} */}
                                </span>
                            </p>
                        </Col>
                    </Row>
                ))
            ) : (
                <p className="fs-4 text-center">Your cart is empty</p>
            )}
            {/* {totalAmount !== 0 && (
                <p className="fs-3 text-end">
                    Total cart: <span>{Math.round(totalAmount)}</span>
                </p>
            )} */}
        </div>
    );
}

export default Cart;
