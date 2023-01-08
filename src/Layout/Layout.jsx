import { Outlet } from "react-router-dom";

const Layout = () => {
   return (
      <>
         <main className="h-full">
            <Outlet />
         </main>
      </>
   );
}

export default Layout;