import { Routes, Route } from "react-router-dom";
import Disciplinary from "./Disciplinary";
import Add from "./Add";
import Edit from "./Edit";

const DisciplinaryIndex = () => {
  return (
    <div className="w-full lg:px-[4em] md:px-[2em] px-[1em]">
      <Routes>
        <Route path="/" element={<Disciplinary />} />
        <Route path="add" element={<Add />} />
        <Route path="edit" element={<Edit />} />
      </Routes>
    </div>
  );
};

export default DisciplinaryIndex;
