import { Outlet } from "react-router-dom";
import Search from "../components/shared/Search";

const MainLayout = () => {
  return (
    <>
      <Search />
      <Outlet />
    </>
  );
};

export default MainLayout;
