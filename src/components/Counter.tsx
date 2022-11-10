import { Tooltip, Fab } from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Add as AddIcon } from "@mui/icons-material";
import { increment } from "../features/counter/counterSlide";

const Counter = () => {
  const [incrementAmount, setIncrementAmout] = useState("2");
  const dispatch = useDispatch();
  const incrementValue = Number(incrementAmount) || 0;

  return (
    <>
      {" "}
      <Tooltip
        title="Add"
        sx={{
          position: "fixed",
          bottom: 40,
          left: { xs: "calc(45%)", md: "calc(15%)" },
        }}
        onClick={() => dispatch(increment())}
      >
        <Fab color="secondary" aria-label="add">
          <AddIcon />
        </Fab>
      </Tooltip>
    </>
  );
};

export default Counter;
