import React from "react";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { useMediaQuery } from "@mui/material";

const JailProformaItem = ({ row, columns }) => {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  return (
    <TableRow
      hover
      role="checkbox"
      tabIndex={-1}
      key={row.code}
      onClick={() => console.log(row)}
    >
      {columns.map((column) => {
        const value = row[column.id];
        return (
          <TableCell
            key={column.id}
            align={column.align}
            sx={{
              fontSize: isMobile ? "10px" : "inherit",
              padding: isMobile? 1 : 2,
            }}
          >
            {column.format && typeof value === "number"
              ? column.format(value)
              : value}
          </TableCell>
        );
      })}
    </TableRow>
  );
};

export default JailProformaItem;
