"use client";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import DataTable from "@/components/langauages-table";
import { useEffect } from "react";
import TranslationEnableStatus from "./TranslationEnableStatus";

function handleSwitch() {
  console.log("onclick switch");
}

const page = () => {
  return (
    <div>
      <FormGroup>
        <FormControlLabel
          control={<Switch defaultChecked onChange={handleSwitch} />}
          label="Enable Translation button in GSP"
          color="secondary"
        />
      </FormGroup>
      {/* <TranslationEnableStatus /> */}
      <DataTable />
    </div>
  );
};

export default page;
