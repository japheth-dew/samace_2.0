import { Routes, Route } from "react-router-dom";
import { HR, QC, QA, Maintenance, Production, Settings } from "../pages";
import { BiChevronLeftCircle, BiChevronRightCircle } from "react-icons/bi";
import { useContext, useEffect, useState } from "react";
import { DashboardContext } from "../pages/Dashboard/Dashboard";

const DisplayArea = () => {
  const { searchDatas, setSearchDatas, prevNext, set_topbar_value, topbar_value, setPrevNext } =
    useContext(DashboardContext);
  const searchData = searchDatas?.searchData;
  const set_body_data = searchDatas?.set_body_data;
  const [page, setPage] = useState(1);

  useEffect(() => {
    set_topbar_value((topbar_value:any) => (topbar_value = ""));
    setSearchDatas((prev: any) => ({
      ...prev,
      searchData: searchDatas?.searchData,
      header_data: searchDatas?.header_data,
      set_body_data: searchDatas?.set_body_data,
    }));
    // console.log("Searchs: ", searchData);
  }, []);

  const handlePagination = (direction: string) => {
    const availablePages = Math.ceil(searchData?.length / 10);
    console.log("Clicked: ", prevNext, direction);
    if (direction === "next") {
      if (Math.round(prevNext?.next / 10) < availablePages) {
        setPrevNext((prev: any) => ({
          prev: prevNext?.prev + 10,
          next: prevNext?.next + 10,
        }));
        setPage(page + 1);
      }
    }
    if (direction === "prev") {
      if (prevNext?.prev >= 10) {
        setPrevNext((prev: any) => ({
          next: prevNext?.next - 10,
          prev: prevNext?.prev - 10,
        }));
        setPage(page - 1);
      }
    }

    // const startIndex = (searchDatas?.page - 1) * 10;
    // const endIndex = startIndex + 10;
    // set_body_data(searchData?.slice(startIndex, endIndex));
  };

  return (
    <div className="lg:pb-0 ">
      {topbar_value !== "" && (
        <div className="w-full flex py-[1em]">
          <div className="m-auto flex items-center gap-x-[2em] ">
            <button
              onClick={() => handlePagination("prev")}
              className="text-[20px]"
            >
              <BiChevronLeftCircle />
            </button>
            <span className="text-[11px]">PAGE {page}</span>
            <button
              onClick={() => handlePagination("next")}
              className="text-[20px]"
            >
              <BiChevronRightCircle />
            </button>
          </div>
        </div>
      )}
      <Routes>
        <Route path="hr/*" element={<HR />} />
        <Route path="qc" element={<QC />} />
        <Route path="qa" element={<QA />} />
        <Route path="maintenance/*" element={<Maintenance />} />
        <Route path="production/*" element={<Production />} />
        <Route path="settings/*" element={<Settings />} />
      </Routes>
    </div>
  );
};

export default DisplayArea;
