import { Navigate, Outlet } from "react-router-dom";

export const AdminAllower = () => {
  const token = localStorage.getItem("accessToken");
  console.log(token);

  if (token) {
    return (
      <div className="Admin">
        <Outlet></Outlet>
      </div>
    );
  } else {
    return <Navigate to={"/admin-login"}></Navigate>;
  }
};
