import * as React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import classes from "./ButtonGroup.module.css";
import CartContext from "../Store/cart-context";
import { useContext } from "react";
export default function BasicButtonGroup() {
  const cartCtx = useContext(CartContext);
  return (
    <ButtonGroup
      className={classes["mobile-width-for-group-button"]}
      variant="outlined"
      size="small"
      aria-label="success button group"
    >
      <Button
        className={classes["individual-width-for-group-button"]}
        onClick={cartCtx.onSubtract}
      >
        <RemoveIcon className={classes["MuiSlider-root"]} />
      </Button>
      <Button className={classes["individual-width-for-group-button"]}>
        {cartCtx.count}
      </Button>
      <Button
        className={classes["individual-width-for-group-button"]}
        onClick={cartCtx.onAdd}
      >
        <AddIcon className={classes["MuiSlider-root"]} />
      </Button>
    </ButtonGroup>
  );
}
