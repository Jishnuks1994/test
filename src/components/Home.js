import axios from "axios";
import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import ButtonGroup from "react-bootstrap/ButtonGroup";

function Home() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);


  const getProducts = async () => {
    const result = await axios.get("https://fakestoreapi.com/products");

    setProducts(result.data);
    setFilteredProducts(result.data);
  };

  const filterProducts = (category) => {
    if (category === "All") {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter((product) =>
        product.category.includes(category)
      );
      setFilteredProducts(filtered);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div>
      {products.length > 0 ? (
        <div>
          <Row>
            <ButtonGroup aria-label="Basic example" className="my-2">
            <Button variant="warning" onClick={() => filterProducts("All")}>All Products</Button>
              <Button variant="warning" onClick={() => filterProducts("men's clothing")}>Mens Clothings</Button>
              <Button variant="warning" onClick={() => filterProducts("jewelery")}>Jewelery</Button>
              <Button variant="warning" onClick={() => filterProducts("electronics")}>Electronics</Button>
              <Button variant="warning" onClick={() => filterProducts("women's clothing")}>Women's Clothings</Button>
            </ButtonGroup>
          </Row>
        </div>
      ) : null}

      <Row style={{ marginTop: "20px" }}>
        {filteredProducts?.length > 0 ? (
          filteredProducts.map((i) => (
            <Card className="p-2" style={{ width: "18rem" }}>
              <Card.Img variant="top" src={i.image} />
              <Card.Body>
                <Card.Title>{i.title}</Card.Title>
                <Card.Text>{i.description.slice(1, 40)}</Card.Text>
                <Card.Text>Price: {i.price}</Card.Text>
                <Card.Text>Rating: {i.rating.rate}</Card.Text>

                <Link to={`/view/${i.id}`}>
                  {" "}
                  <Button variant="primary">View Product</Button>
                </Link>
              </Card.Body>
            </Card>
          ))
        ) : (
          <h1>No Products Available</h1>
        )}
      </Row>
    </div>
  );
}

export default Home;
