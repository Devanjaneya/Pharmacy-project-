import { mockData } from "../utils/mockData";
import MedicineTcard from "./MedicineTcard";
import { Link } from "react-router-dom";

function MedicineType() {
  return (
    <>
      <h1 className="text-2xl font-bold text-blue-600 p-5 text-center">
        Dosage <span className="text-green-500">Forms</span>
      </h1>
      <div className="flex flex-wrap justify-center gap-4">
        {mockData.map((item) => (
          <Link
            to={`/medicine/${encodeURIComponent(item.apiName.toUpperCase())}`}
            key={item.id}
          >
            <MedicineTcard Mdata={item} />
          </Link>
        ))}
      </div>
    </>
  );
}

export default MedicineType;

