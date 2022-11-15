import { Routes, Route } from "react-router-dom";
import PersonelRecord from "./PersonelRecord";
import { Disciplinary, Medical } from "./Tabs";
import TrainingIndex from "./Tabs/Training/TrainingIndex";
import AssessmentIndex from "./Tabs/Assessment/AssessmentIndex";
import PayIndex from "./Tabs/Pay/PayIndex";

const PRIndex = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<PersonelRecord />} />
        <Route path="training/*" element={<TrainingIndex />} />
        <Route path="pay/*" element={<PayIndex />} />
        <Route path="disciplinary" element={<Disciplinary />} />
        <Route path="assessment/*" element={<AssessmentIndex />} />
        <Route path="medical" element={<Medical />} />
      </Routes>
    </div>
  );
};

export default PRIndex;
