import AddUser from "../pages/admin/addUser";
import AdminRoot from "../pages/admin/adminRoot";
import Dashboard from "../pages/admin/dashboard";
import Posts from "../pages/admin/posts";
import Users from "../pages/admin/users";
import NoPage from "../pages/noPage";

export const routers = [
  {
    path: "/",
    element: <AdminRoot />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/users",
        element: <Users />,
      },
      {
        path: "/addUser",
        element: <AddUser />,
      },
      {
        path: "/posts",
        element: <Posts />,
      },
    ],
  },

  {
    path: "*",
    element: <NoPage />,
  },
];
