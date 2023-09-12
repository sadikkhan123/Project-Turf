import * as React from "react";
import IconButton from "@mui/joy/IconButton";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import { useState } from "react";
import "./bookButton.scss";

const BookButton = (props) => {
  const [selected, setSelected] = useState(false);
  return (
    <IconButton
      value={props.data}
      disabled={props.disabled}
      className={""}
      style={
        selected
          ? { backgroundColor: "green", borderBlock: "solid" }
          : { backgroundColor: "white" }
      }
      onClick={() => {
        setSelected(!selected);
        props.updateValues(props.data);
      }}
    >
      {props.data}
    </IconButton>
  );
};

export default BookButton;
