import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { useMediaQuery } from "@mui/material";
import OrganizationalDossierItem from "./OrganizationalDossierItem";

const columns = [
  { id: "sr_no", label: "Sr.No", minWidth: 10, align: "center" },
  { id: "daw", label: "DAW Id", minWidth: 80, align: "center" },
  {
    id: "name",
    label: "Organization Name",
    minWidth: 170,
    align: "center",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "ats",
    label: "Concerned ATS",
    minWidth: 170,
    align: "center",
    format: (value) => value.toFixed(2),
  },
  {
    id: "status",
    label: "Status",
    minWidth: 170,
    align: "center",
    format: (value) => value.toFixed(2),
  },
];

const rows = [
  {
    daw: "DAW1023725973",
    unit: "TE52H6S89",
    name: "Rehan Pathan",
    ats: "Nagpada",
    category: "UAPA",
    district: "CP Navi Mumbai",
    status: "Approved By SP",
  },
  {
    daw: "DAW1023725973",
    unit: "TE52H6S89",
    name: "Rehan",
    ats: "Bhiwandi",
    category: "UAPA",
    district: "CP Navi Mumbai",
    status: "Approved By SP",
  },
  {
    daw: "DAW1023725973",
    unit: "TE52H6S89",
    name: "Rehan",
    ats: "Bhiwandi",
    category: "UAPA",
    district: "CP Navi Mumbai",
    status: "Approved By SP",
  },
  {
    daw: "DAW1023725973",
    unit: "TE52H6S89",
    name: "Rehan Pathan",
    ats: "Nagpada",
    category: "UAPA",
    district: "CP Navi Mumbai",
    status: "Approved By SP",
  },
  {
    daw: "DAW1023725973",
    unit: "TE52H6S89",
    name: "Rehan Pathan",
    ats: "Nagpada",
    category: "UAPA",
    district: "CP Navi Mumbai",
    status: "Approved By SP",
  },
  {
    daw: "DAW1023725973",
    unit: "TE52H6S89",
    name: "Rehan Pathan",
    ats: "Nagpada",
    category: "UAPA",
    district: "CP Navi Mumbai",
    status: "Approved By SP",
  },
  {
    daw: "DAW1023725973",
    unit: "TE52H6S89",
    name: "Rehan Pathan",
    ats: "Nagpada",
    category: "UAPA",
    district: "CP Navi Mumbai",
    status: "Approved By SP",
  },
  {
    daw: "DAW1023725973",
    unit: "TE52H6S89",
    name: "Rehan Pathan",
    ats: "Nagpada",
    category: "UAPA",
    district: "CP Navi Mumbai",
    status: "Approved By SP",
  },
  {
    daw: "DAW1023725973",
    unit: "TE52H6S89",
    name: "Rehan Pathan",
    ats: "Nagpada",
    category: "UAPA",
    district: "CP Navi Mumbai",
    status: "Approved By SP",
  },
  {
    daw: "DAW1023725973",
    unit: "TE52H6S89",
    name: "Rehan Pathan",
    ats: "Nagpada",
    category: "UAPA",
    district: "CP Navi Mumbai",
    status: "Approved By SP",
  },
  {
    daw: "DAW1023725973",
    unit: "TE52H6S89",
    name: "Rehan Pathan",
    ats: "Nagpada",
    category: "UAPA",
    district: "CP Navi Mumbai",
    status: "Approved By SP",
  },
  {
    daw: "DAW1023725973",
    unit: "TE52H6S89",
    name: "Rehan Pathan",
    ats: "Nagpada",
    category: "UAPA",
    district: "CP Navi Mumbai",
    status: "Approved By SP",
  },
  {
    daw: "DAW1023725973",
    unit: "TE52H6S89",
    name: "Rehan Pathan",
    ats: "Nagpada",
    category: "UAPA",
    district: "CP Navi Mumbai",
    status: "Approved By SP",
  },
  {
    daw: "DAW1023725973",
    unit: "TE52H6S89",
    name: "Rehan Pathan",
    ats: "Nagpada",
    category: "UAPA",
    district: "CP Navi Mumbai",
    status: "Approved By SP",
  },
  {
    daw: "DAW1023725973",
    unit: "TE52H6S89",
    name: "Rehan Pathan",
    ats: "Nagpada",
    category: "UAPA",
    district: "CP Navi Mumbai",
    status: "Approved By SP",
  },
  {
    daw: "DAW1023725973",
    unit: "TE52H6S89",
    name: "Rehan Pathan",
    ats: "Nagpada",
    category: "UAPA",
    district: "CP Navi Mumbai",
    status: "Approved By SP",
  },
  {
    daw: "DAW1023725973",
    unit: "TE52H6S89",
    name: "Rehan Pathan",
    ats: "Nagpada",
    category: "UAPA",
    district: "CP Navi Mumbai",
    status: "Approved By SP",
  },
  {
    daw: "DAW1023725973",
    unit: "TE52H6S89",
    name: "Rehan Pathan",
    ats: "Nagpada",
    category: "UAPA",
    district: "CP Navi Mumbai",
    status: "Approved By SP",
  },
  {
    daw: "DAW1023725973",
    unit: "TE52H6S89",
    name: "Rehan Pathan",
    ats: "Nagpada",
    category: "UAPA",
    district: "CP Navi Mumbai",
    status: "Approved By SP",
  },
  {
    daw: "DAW1023725973",
    unit: "TE52H6S89",
    name: "Rehan Pathan",
    ats: "Nagpada",
    category: "UAPA",
    district: "CP Navi Mumbai",
    status: "Approved By SP",
  },
  {
    daw: "DAW1023725973",
    unit: "TE52H6S89",
    name: "Rehan Pathan",
    ats: "Nagpada",
    category: "UAPA",
    district: "CP Navi Mumbai",
    status: "Approved By SP",
  },
  {
    daw: "DAW1023725973",
    unit: "TE52H6S89",
    name: "Rehan Pathan",
    ats: "Nagpada",
    category: "UAPA",
    district: "CP Navi Mumbai",
    status: "Approved By SP",
  },
  {
    daw: "DAW1023725973",
    unit: "TE52H6S89",
    name: "Rehan Pathan",
    ats: "Nagpada",
    category: "UAPA",
    district: "CP Navi Mumbai",
    status: "Approved By SP",
  },
  {
    daw: "DAW1023725973",
    unit: "TE52H6S89",
    name: "Rehan Pathan",
    ats: "Nagpada",
    category: "UAPA",
    district: "CP Navi Mumbai",
    status: "Approved By SP",
  },
  {
    daw: "DAW1023725973",
    unit: "TE52H6S89",
    name: "Rehan Pathan",
    ats: "Nagpada",
    category: "UAPA",
    district: "CP Navi Mumbai",
    status: "Approved By SP",
  },
  {
    daw: "DAW1023725973",
    unit: "TE52H6S89",
    name: "Rehan Pathan",
    ats: "Nagpada",
    category: "UAPA",
    district: "CP Navi Mumbai",
    status: "Approved By SP",
  },
  {
    daw: "DAW1023725973",
    unit: "TE52H6S89",
    name: "Rehan Pathan",
    ats: "Nagpada",
    category: "UAPA",
    district: "CP Navi Mumbai",
    status: "Approved By SP",
  },
  {
    daw: "DAW1023725973",
    unit: "TE52H6S89",
    name: "Rehan Pathan",
    ats: "Nagpada",
    category: "UAPA",
    district: "CP Navi Mumbai",
    status: "Approved By SP",
  },
  {
    daw: "DAW1023725973",
    unit: "TE52H6S89",
    name: "Rehan Pathan",
    ats: "Nagpada",
    category: "UAPA",
    district: "CP Navi Mumbai",
    status: "Approved By SP",
  },
];

rows.forEach((row, index) => {
  row.sr_no = index + 1;
});

const OrganizationalDossierTable = () => {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [searchValues, setSearchValues] = useState({});

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleSearchChange = (event, columnId) => {
    const { value } = event.target;
    setSearchValues((prevSearchValues) => ({
      ...prevSearchValues,
      [columnId]: value,
    }));
    setPage(0);
  };

  const filteredRows = rows.filter((row) =>
    Object.entries(searchValues).every(([columnId, searchValue]) => {
      const columnValue = row[columnId];
      return (
        columnValue &&
        columnValue.toString().toLowerCase().includes(searchValue.toLowerCase())
      );
    })
  );

  return (
    <TableContainer component={Paper}>
      <Table stickyHeader aria-label="sticky table">
        <TableHead>
          <TableRow>
            {columns.map((column) => (
              <TableCell
                key={column.id}
                align={column.align}
                style={{
                  minWidth: isMobile ? "100px" : column.minWidth,
                  // fontWeight: "bold",
                  // color: "#ffffff",
                  position: "sticky",
                  top: 0,
                  padding: isMobile ? 3 : {},
                  fontSize: isMobile ? "12px" : {},
                  backgroundColor: "#b2b2b2",
                  lineHeight: 1.3,
                }}
              >
                {column.label}
                <br />
                <input
                  type="text"
                  value={searchValues[column.id] || ""}
                  onChange={(event) => handleSearchChange(event, column.id)}
                  style={{
                    fontSize: isMobile ? "10px" : "13px",
                    width: isMobile ? "70%" : "70%",
                    backgroundColor: "transparent",
                    border: "none",
                    borderBottom: "2px solid #ffff",
                    borderRight: "2px solid #ccc",
                    borderRadius: "5px",
                    padding: "5px 30px 5px 25px", // Adjusted padding to accommodate the search icon
                    marginTop: "5px",
                    outline: "none",
                    backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><path d="M18.707 17.293l-4.733-4.732A7.93 7.93 0 0 0 16 8c0-4.411-3.589-8-8-8S0 3.589 0 8s3.589 8 8 8c1.756 0 3.382-.568 4.707-1.525l4.732 4.733c.195.196.45.293.707.293s.512-.097.707-.293a1.024 1.024 0 0 0 0-1.414zM2 8c0-3.309 2.691-6 6-6s6 2.691 6 6-2.691 6-6 6-6-2.691-6-6zm14 6a.998.998 0 0 1-.707-.293l-4.25-4.25a1.03 1.03 0 0 1 0-1.465 1.03 1.03 0 0 1 1.465 0l4.25 4.25A.998.998 0 0 1 16 14z" fill="%23FFFFFF"/></svg>')`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "5px center", // Adjusted backgroundPosition to move the icon a little to the left
                    backgroundSize: "auto 60%",
                  }}
                  placeholder=" "
                />
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {filteredRows
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((row, index) => (
              <OrganizationalDossierItem key={index} row={row} columns={columns} />
            ))}
        </TableBody>
      </Table>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25, 100]}
        component="div"
        count={filteredRows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        sx={isMobile ? { minWidth: "400px" } : { bgcolor: "#b2b2b2" }}
      />
    </TableContainer>
  );
};

export default OrganizationalDossierTable;
