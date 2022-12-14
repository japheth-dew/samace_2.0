import InputComp from "../../../../utils/InputComp";
import { useContext } from "react";
import { DashboardContext } from "../../../../Dashboard/Dashboard";
import { ProductionNavResolve } from "./POR";

const Edit = () => {
  const { set_show_decision_modal } = useContext(DashboardContext);

  const handleCancel = () => {
    window.scrollTo(0, 0);
    set_show_decision_modal(true);
  };
  return (
    <div>
      <ProductionNavResolve name="Edit" />

      <div className="w-full mt-[2em]  ">
        <div className="bg-pri m-auto rounded-md lg:w-[65%] md:w-[80%] w-[90%]  py-[2em] md:px-[5em] px-[2em]">
          <InputComp name="Date" type="date" placeholder="Enter date" />
          <InputComp
            name="Producr"
            type="drop"
            optionList={["prod1", "prod2", "prod3"]}
          />

          <InputComp
            name="Batch Number Starts"
            type="number"
            placeholder="Enter Batch Number Starts"
          />
          <InputComp
            name="Batch Number Starts"
            type="number"
            placeholder="Enter Batch Number ends"
          />
          <InputComp
            name="Total Quantity"
            type="number"
            placeholder="Enter Total Quantity"
          />
          <InputComp
            name="Schedule Start Date"
            type="date"
            placeholder="Enter Schedule Start Date"
          />
          <InputComp
            name="Schedule End Date"
            type="date"
            placeholder="Enter Schedule End Date"
          />

          <InputComp
            name="Officer's Name"
            type="text"
            placeholder="Enter Officer's Name"
          />

          <div className="text-white flex md:gap-[3em] gap-[2em] mt-[4em]">
            <button className="rounded-md bg-[#2F5597] font-[700]  py-[1em] w-full">
              Save
            </button>
            <button
              onClick={handleCancel}
              className="rounded-md bg-[#FF5552] font-[700]  py-[1em] w-full"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Edit;
