import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import EachDetail from "./EachDetail";

function MedicineDetails() {
  const { id } = useParams(); 
  const decodedId = decodeURIComponent(id).toUpperCase();

  const [filtered, setFiltered] = useState([]);
  const [loading, setLoading] = useState(true);

  // 👇 Add these 2 lines
  const [searchText, setSearchText] = useState("");
  const [searchTriggered, setSearchTriggered] = useState(false);

  // 👇 Search by dosage_form from URL param (default)
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const base = "https://api.fda.gov/drug/ndc.json";
        const url = `${base}?search=dosage_form:"${decodedId}"&limit=50`;

        const res = await fetch(url);
        const data = await res.json();
        setFiltered(data.results || []);
      } catch (err) {
        console.error("API error or no data:", err);
        setFiltered([]);
      } finally {
        setLoading(false);
      }
    };

    if (!searchTriggered) fetchData(); // only run if not searching by brand
  }, [decodedId, searchTriggered]);

  // 👇 Handle brand name search
  const handleSearch = async () => {
    if (!searchText.trim()) return;

    setLoading(true);
    setSearchTriggered(true); // prevent dosage fetch

    try {
      const base = "https://api.fda.gov/drug/ndc.json";
      const url = `${base}?search=brand_name:"${searchText.toUpperCase()}"&limit=50`;

      const res = await fetch(url);
      const data = await res.json();
      setFiltered(data.results || []);
    } catch (err) {
      console.error("API error in brand search:", err);
      setFiltered([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4">
      {/* 🔍 Search Bar */}
      <div className="w-full md:w-1/3 flex mx-auto mb-4">
        <input
          type="text"
          placeholder="Search by brand name..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-l-full focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          type="button"
          className="px-4 py-2 border border-l-0 border-gray-300 bg-white rounded-r-full text-xl"
          onClick={handleSearch}
        >
          🔍
        </button>
      </div>

      {/* Title */}
      <h2 className="text-xl font-bold text-center mb-4">
        {searchTriggered
          ? `Search Results for Brand: ${searchText.toUpperCase()}`
          : `Dosage Form: ${decodedId}`}
      </h2>

      {/* Results */}
      {loading ? (
        <p className="text-center text-gray-500">Loading medicines...</p>
      ) : filtered.length === 0 ? (
        <p className="text-center text-red-500">No results found.</p>
      ) : (
        filtered.map((item, idx) => (
          <EachDetail key={idx} mitem={item} />
        ))
      )}
    </div>
  );
}

export default MedicineDetails;




