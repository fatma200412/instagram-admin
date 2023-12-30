import React from "react";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { useState, useEffect } from "react";
import {
  User,
  getUsers,
  getDeleteUsers,
} from "./../../../redux/slices/userSlice";
import { Grid } from "@mui/material";
import Dashboard from "../dashboard";
import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "username", headerName: "User name", width: 130 },
  { field: "imgSRC", headerName: "Post", width: 130 },

  {
    field: "delete",
    headerName: "Delete",
    width: 70,
    renderCell: (params) => {
      <Button
        variant="outlined"
        color="error"
        onClick={() => {
          let userId = params.row.id;
        }}
      >
        DELETE
      </Button>;
    },
  },
];

type Props = {};

function Posts({}: Props) {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    getUsers()
      .then((user) => {
        setUsers(user);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, []);

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1 style={{ color: "red" }}>ERROR!!</h1>;

  return (
    <>
      <Grid container>
        <Dashboard />
        <Grid item xs={4} style={{ margin: "0 auto" }}>
          <div style={{ height: "100vh", minWidth: "600px" }}>
            <DataGrid
              rows={users}
              columns={columns}
              initialState={{
                pagination: {
                  paginationModel: { page: 0, pageSize: 5 },
                },
              }}
              pageSizeOptions={[5, 10]}
              checkboxSelection
            />
          </div>
        </Grid>
      </Grid>
    </>
  );
}

export default Posts;
