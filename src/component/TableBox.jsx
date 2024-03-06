import { List, ListItem, ListItemButton, ListItemIcon, ListItemText, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import React from "react";
import { FaFileExcel, FaRegFileWord } from "react-icons/fa";
import InboxIcon from "@mui/icons-material/Inbox";

const TableBox = ({rows}) => {
  return (
    <TableContainer component={Paper} sx={{ maxHeight: "75vh" }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell sx={{ fontSize: "15px", fontWeight: "bold" }}>
              Documents
            </TableCell>
            <TableCell sx={{ fontSize: "15px", fontWeight: "bold" }}>
              Status
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => {
            return (
              <TableRow key={row.id}>
                <TableCell sx={{ padding: "0px 5px", margin: "0px" }}>
                  <List>
                    <ListItem sx={{ padding: "0.5px", margin: "0px" }}>
                      <ListItemButton>
                        <ListItemIcon sx={{ fontSize: "20px" }}>
                          {row.name.endsWith(".csv") ? (
                            <FaFileExcel />
                          ) : row.name.endsWith(".docx") ? (
                            <FaRegFileWord />
                          ) : (
                            <InboxIcon />
                          )}
                        </ListItemIcon>
                        <ListItemText sx={{ fontSize: "small" }}>
                          <Typography variant="body2">{row.name}</Typography>
                        </ListItemText>
                      </ListItemButton>
                    </ListItem>
                  </List>
                </TableCell>
                <TableCell
                  sx={{
                    fontSize: "13px",
                    fontWeight: "600",
                    color: row.status === "Archived" ? "green" : "red",
                  }}
                >
                  {row.status}
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableBox;
