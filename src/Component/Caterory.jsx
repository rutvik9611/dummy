import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import { CiDeliveryTruck } from "react-icons/ci";
import { MdFindReplace } from "react-icons/md";
import { FaShippingFast } from "react-icons/fa";
import { GiAutoRepair, GiHandTruck } from "react-icons/gi";

function Caterory() {

  const [separate, setseprate] = useState(null);
  const [image, setImage] = useState('')
  const { id } = useParams();
  useEffect(() => {
    fetch('https://dummyjson.com/products/' + id)
      .then(response => response.json())
      .then(data => setseprate(data));
  }, []);

  const imageHandle = (item) => {
    setImage(item);
  };

  if (separate != null) {

    return (
      <Container>
        <Row className='mt-3'>
          <Col lg={6}>
            <div className="image-main flex-column">
                <img src={image ? image : separate.thumbnail} alt={separate.title} className='w-100 shadow'/>
              <div className="images d-flex flex-nowrap">{
                separate.images.map((item, index) => {
                  return (
                    <Link key={index}>
                      <img src={item} alt='Product'
                        onClick={() => imageHandle(item)} className='h-25 product_thumbanil mt-3 border p-2'
                      />
                    </Link>
                  )
                })
              }
              </div>
            </div>
          </Col>
          <Col lg={6}>
            <div className="box-main ">
              <h3>{separate.title}-({separate.tags}) {separate.brand}</h3>
              <p className=' d-inline-block text-white px-1 m-0 rounded'
                style={{

                  backgroundColor:
                    separate.rating > 4 ? 'green' : separate.rating > 3 ? 'red' : separate.rating > 2 ? 'orenge' : '',
                }}
              >{separate.rating}⭐ </p><span> 377 Ratings & 38 Reviews</span>
              <p className='fs-6'>Brand: {separate.brand}</p>
              <p className='m-0'>Special price  </p>
              <div className="price d-flex gap-3  align-items-center">
                <h2> ${separate.price}</h2>
                <span className='fs-5 text-danger text-decoration-line-through'>₹2,999</span>
                <span className='fs-5 fw-bold'>{separate.discountPercentage}% Discount</span>
              </div>
              <p>Inclusive of all taxes</p>
              <ul>
                <p className='fw-bold'>Product Details :  </p>
                <li><h6 className='fw-bold'>Brand : <span className='fs-6 fw-lighter'>{separate.brand}</span></h6></li>
                <li><h6 className='fw-bold'>category : <span className='fs-6 fw-lighter'>{separate.category}</span></h6></li>
                <li><h6 className='fw-bold'>Item Weight : <span className='fs-6 fw-lighter'>{separate.weight}</span></h6></li>
                <li><h6 className='fw-bold'>Product Dimensions : <span className='fs-6 fw-lighter'>{separate.dimensions.width}w   X&nbsp; {separate.dimensions.height}L</span></h6></li>
              </ul>

              <div className="delivery-area d-flex justify-content-around border-top border-bottom">
                <div className="box-1">
                  <i className='fs-1'><CiDeliveryTruck /></i>
                  <p>Free Deliver</p>
                </div>

                <div className="box-1">
                  <i className='fs-1'><MdFindReplace /></i>
                  <p>10 days <br /> Replacement</p>
                </div>

                <div className="box-1">
                  <i className='fs-1'><GiAutoRepair /></i>
                  <p>{separate.warrantyInformation}</p>
                </div>

                <div className="box-1">
                  <i className='fs-1'><FaShippingFast /></i>
                  <p>{separate.shippingInformation}</p>
                </div>

                <div className="box-1">
                  <i className='fs-1'><GiHandTruck /></i>
                  <p>{separate.availabilityStatus}</p>
                </div>
              </div>

              {/* Description  */}
              <div className="description">
                <p className=''>Description</p>
                <p>{separate.description}</p>
              </div>

            </div>
          </Col>
        </Row>
      </Container>
    )
  }
  else {
    return (
      <div className="load"><span class="loader"></span></div>

    )
  }
}
export default Caterory