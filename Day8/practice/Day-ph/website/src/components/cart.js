//carts.js
import React, { useState } from "react";
import { connect } from "react-redux";
import { addItem, removeItem } from "./redux";
import {
  TextField,
  Button,
  Typography,
  Card,
  CardContent,
  IconButton,
  Badge,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
// import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";
import "../App.css";

const Cart = ({ items, addItem, removeItem }) => {
  const [newItem, setNewItem] = useState("");
  const [count, setCount] = useState(0);

  const handleInputChange = (event) => {
    setNewItem(event.target.value);
  };

  const handleAddItem = () => {
    addItem(newItem);
    setNewItem("");
    setCount(count + 1);
  };

  const handleRemove = (index) => {
    removeItem(index);
    setCount(count - 1);
  };

  return (
    <div>
      <Typography variant="h4" sx={{ textAlign: "center" }}>
        show Output {"  "}
        <Badge badgeContent={count} color="info" sx={{}}>
          <ShoppingCartIcon />
        </Badge>
      </Typography>
      <TextField
        type="text"
        value={newItem}
        onChange={handleInputChange}
        sx={{ display: "flex", justifyContent: "center" }}
      />
      <br />
      <br />
      <Button
        variant="contained"
        onClick={handleAddItem}
        sx={{
          display: "flex",
          alignItems: "center",
          color: "success",
          marginLeft: "250px",
        }}
      >
        Increment Here
      </Button>
      {/* <hr /> */}
      <br />

      {items.map((item, index) => (
        <Card key={index}>
          <CardContent sx={{ display: "flex" }}>
            <Typography variant="h5">{item}</Typography>
            <IconButton
              onClick={() => handleRemove(index)}
              sx={{ marginLeft: "10px" }}
            ></IconButton>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    items: state.items,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addItem: (item) => dispatch(addItem(item)),
    removeItem: (index) => dispatch(removeItem(index)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
