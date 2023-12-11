import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Col, Row } from "react-bootstrap";

function ViewProduct() {
  const [products, setProducts] = useState([]);

  const { id } = useParams();

  const getProducts = async () => {
    const result = await axios.get(`https://fakestoreapi.com/products/${id}`);

    setProducts(result.data);
    // console.log(result.data);
  };

  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div>
      <Row className="my-5 ">
        <Col>
          <img src={products.image} alt="" />
        </Col>
        <Col>
          <h1 className=" mb-2">Name: {products.title}</h1>
          <h1 className=" mb-2">Category: {products.category}</h1>
          <h1 className=" mb-2">Price: {products.price}</h1>
          <div className=" border border-2 p-2">
            <h1 className=" mb-2 ">Description: {products.description}</h1>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default ViewProduct;
