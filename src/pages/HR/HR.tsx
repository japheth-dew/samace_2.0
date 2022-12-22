import { Routes, Route } from "react-router-dom";
import HRNav from "./HRNav";
import PersonelListIndex from "./PersonelList/PersonelListIndex";
import PRIndex from "./PersonelRecord/PRIndex";
import { useContext, useEffect } from "react";
import { DashboardContext } from "../Dashboard/Dashboard";

const HR = () => {


  return (
    <div className="">
      <Routes>
        <Route path={"/"} element={<HRNav />} />
        <Route path={"pl/*"} element={<PersonelListIndex />} />
        <Route path={"pr/*"} element={<PRIndex />} />
      </Routes>
    </div>
  );
};

export default HR;
