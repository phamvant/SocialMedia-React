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
          width={600}
          height={200}
          bgcolor="white"
          padding={3}
          borderRadius={5}
        >
          <Typography variant="h6" color={"gray"} textAlign="center">
            Create Post
          </Typography>
          <TextField
            sx={{ position: "relative", top: "20%" }}
            fullWidth
            multiline
            maxRows={3}
            id="standard-search"
            label="What's on your mind?"
            variant="standard"
          />
          <ButtonGroup
            sx={{ position: "relative", top: "35%", left: "70%" }}
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
