import AddIcon from "@mui/icons-material/Add";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

import { Box, Button, Menu, MenuItem, Stack, Typography } from "@mui/material";
import React from "react";
import styled from "styled-components";
import TableBox from "../component/TableBox";
import "../styles/document.css";

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

const Document = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const rows = [
    {
      id: "1",
      name: "Roshik.docx",
      status: "Archived",
    },
    {
      id: "2",
      name: "Roshik.csv",
      status: "Archived1",
    },
    {
      id: "3",
      name: "Roshik.word",
      status: "Archived1",
    },
    {
      id: "4",
      name: "Roshik.csv",
      status: "Archived1",
    },
    {
      id: "5",
      name: "Roshik.docx",
      status: "Archived1",
    },
  ];

  return (
    <div className="document-bar">
      <Box sx={{ width: "100%", bgcolor: "background.paper", height: "100%" }}>
        <Stack
          direction="row"
          justifyContent={"space-between"}
          spacing={5}
          sx={{ padding: "1rem" }}
        >
          <Typography variant="h5" sx={{ fontWeight: "bold" }}>
            {" "}
            Documents
          </Typography>

          <AddIcon
            sx={{
              cursor: "pointer",
              transition: "transform 0.2s",
              "&:hover": {
                transform: "scale(1.2)",
              },
              boxShadow: " rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
              borderRadius: "50%",
              fontSize: "2.1rem",
              padding: "2px",
            }}
            aria-controls="menu"
            aria-haspopup="true"
            onClick={handleOpen}
          />

          <Menu
            id="menu"
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem sx={{ backgroundColor: "white", padding: "0px" }}>
              <Box
                sx={{
                  backgroundColor: "white",
                  padding: "1rem 2rem",
                  border: "none",
                }}
              >
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  Upload File
                </Typography>

                <Typography sx={{ mt: 1 }}>
                  <Button
                    component="label"
                    role={undefined}
                    variant="contained"
                    tabIndex={-1}
                    startIcon={<CloudUploadIcon />}
                    sx={{ fontSize: "0.8rem" }}
                  >
                    Upload file
                    <VisuallyHiddenInput type="file" />
                  </Button>
                </Typography>

                <Box sx={{ display: "flex", justifyContent: "start" }}>
                  <Button
                    sx={{
                      marginTop: "1rem",
                      backgroundColor: "black",
                      color: "white",
                      "&:hover": {
                        backgroundColor: "darkgrey",
                      },
                      fontSize: "0.7rem",
                    }}
                    variant="contained"
                  >
                    Upload
                  </Button>
                </Box>
              </Box>
            </MenuItem>
          </Menu>
        </Stack>

        <TableBox rows={rows} />
      </Box>
    </div>
  );
};

export default Document;
