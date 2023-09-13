import { Outlet, useLocation } from "react-router-dom";
import SearchAppBar from "../components/SearchAppBar";

const AppLayout = () => {
  const { pathname } = useLocation();
  return (
    <>
      {pathname === "/" ? (
        <SearchAppBar title="MovieBox" transparent 
        withSearchBar />
      ) : (
        <SearchAppBar title="MovieBox"/>
      )}

      <Outlet />
    </>
  );
};

export default AppLayout;
