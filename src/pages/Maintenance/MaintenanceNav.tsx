import { DashboardContext } from "../Dashboard/Dashboard";
import { useContext, useEffect } from "react";
import { NavTablet } from "../../globals";
import { main_nav } from "../utils/sidebar_nav_data";
import facility from "./assets/facility.svg";
import ict from "./assets/ict.svg";
import me from "./assets/me.svg";

const MaintenanceNav = () => {
  const { set_topbar_value, set_sidebar_nav_data } =
    useContext(DashboardContext);

  useEffect(() => {
    set_sidebar_nav_data(main_nav);
    set_topbar_value("Maintenance Department");
  }, [set_sidebar_nav_data, set_topbar_value]);

  return (
    <div className="w-full  flex flex-col gap-[6em] px-[4em]">
      <span className="text-hm text-pri font-[700]">Select Task</span>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 md:gap-[5em] gap-[3em] m-auto">
        <NavTablet name="Mechanical & Electrical" img={me} link={"me"} />
        <NavTablet name="ICT" img={ict} link={"ict"} />
        <NavTablet name="Facility" img={facility} link={"facility"} />
      </div>
    </div>
  );
};

export default MaintenanceNav;
