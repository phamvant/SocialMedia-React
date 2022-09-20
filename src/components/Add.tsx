import React, { useState } from "react";
import { Box } from "@mui/system";
import { Add as AddIcon } from "@mui/icons-material";
import {
  Button,
  ButtonGroup,
  Fab,
  Modal,
  styled,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";

const StyledModal = styled(Modal)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const Add = () => {
  const [addPopup, showPopup] = useState(false);
  const [value, setValue] = useState("");

  return (
    <>
      <Tooltip
        title="Add"
        sx={{
          position: "fixed",
          bottom: 40,
          left: { xs: "calc(45%)", md: "40px" },
        }}
        onClick={(e) => showPopup(true)}
      >
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Tooltip>
      <StyledModal
        open={addPopup}
        onClose={(e) => showPopup(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{ width: { md: 600, xs: 300 }, height: { md: 200, xs: 200 } }}
          bgcolor="white"
          padding={3}
          borderRadius={5}
        >
          <Typography variant="h6" color={"gray"} textAlign="center">
            Create Post
          </Typography>
          <TextField
            onChange={(e) => setValue(e.target.value)}
            sx={{ position: "relative", top: "20%" }}
            fullWidth
            multiline
            maxRows={3}
            id="standard-search"
            label="What's on your mind?"
            variant="standard"
          />
          <ButtonGroup
            sx={{
              position: "relative",
              top: { md: "35%", xs: "40%" },
              left: { md: "70%", xs: "25%" },
            }}
            disableElevation
            variant="contained"
            aria-label="Disabled elevation buttons"
          >
            <Button>Post</Button>
            <Button onClick={(e) => showPopup(false)}>Cancel</Button>
          </ButtonGroup>
        </Box>
      </StyledModal>
    </>
  );
};

export default Add;
