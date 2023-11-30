import * as React from "react";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "languages", headerName: "Languages", width: 130 },
  {
    field: "label",
    headerName: "Label displayed in GSP",
    type: "string",
    width: 230,
  },
  {
    field: "enabled",
    headerName: "Enable in GSP",
    width: 160,
  },
];

const rows = [
  { id: 1, languages: "English", label: "LANGUAGE", age: 35 },
  { id: 2, languages: "German", label: "SPRACHE", age: 42 },
  { id: 3, languages: "Simplified Chinese", label: "语言", age: 45 },
  { id: 4, languages: "Japanese", label: "言語", age: 16 },
  { id: 5, languages: "French", label: "LANGUE", age: null },
  { id: 6, languages: "Arabic", label: "اللغات", age: 150 },
  { id: 7, languages: "Spanish", label: "IDIOMA", age: 44 },
  { id: 8, languages: "Turkish", label: "Diller", age: 44 },
];

export default function DataTable() {
  return (
    <div style={{ height: 800, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 10 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
}
