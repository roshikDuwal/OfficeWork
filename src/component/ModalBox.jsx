import { Box, Button, Divider, Modal, Stack, Typography } from "@mui/material";
import React from "react";

import CloseIcon from "@mui/icons-material/Close";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import styled from "styled-components";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

const ModalBox = ({ open, handleClose }) => {
  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        sx={{ display: "flex",justifyContent:"flex-end"}}
      >
        <Box
          sx={{
            backgroundColor: "white",
            padding: "1rem 2rem",
            border: "none",
          }}
        >
          <Stack
            direction="row"
            justifyContent={"space-between"}
            spacing={5}
            sx={{ padding: "0.5rem" }}
          >
            <Typography variant="h5" component="h3" sx={{fontWeight:"semi-bold"}}>
              Upload File
            </Typography>

            <CloseIcon
              onClick={handleClose}
              sx={{
                fontSize: "2.1rem",
                padding: "2px",
                cursor: "pointer",
              }}
            />
          </Stack>

          <Typography sx={{ mt: 2 }}>
            <Button
              component="label"
              role={undefined}
              variant="contained"
              tabIndex={-1}
              startIcon={<CloudUploadIcon />}
            >
              Upload file
              <VisuallyHiddenInput type="file" />
            </Button>
          </Typography>

          <Box sx={{ display: "flex", justifyContent: "start" }}>
            <Button
              sx={{
                marginTop: "2rem",
                backgroundColor: "black",
                color: "white",
                "&:hover": {
                  backgroundColor: "darkgrey", 
                },
                fontSize:"0.7rem"
              }}
              variant="contained"
            >
              Upload
            </Button>
          </Box>
        </Box>
      </Modal>
    </>
  );
};

export default ModalBox;
