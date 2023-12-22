import React from "react";
import { Outlet } from "react-router-dom";

type Props = {};

function AdminRoot({}: Props) {
  return (
    <div>
      <Outlet />
    </div>
  );
}

export default AdminRoot;
