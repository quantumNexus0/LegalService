import React, { useState, useEffect, useMemo } from "react";

function LawyerSearch() {
  const [city, setCity] = useState("");
  const [practiceAreas, setPracticeAreas] = useState("");
  const [cities, setCities] = useState([]);
  const [practiceAreasList, setPracticeAreasList] = useState([]);

  // Memoized static data
  const staticCities = useMemo(() => [
    "New York",
    "Los Angeles",
    "Chicago",
    "Houston",
    "Phoenix"
  ], []);

  const staticPracticeAreas = useMemo(() => [
    "Family Law",
    "Criminal Defense",
    "Personal Injury",
    "Business Law",
    "Immigration Law"
  ], []);

  useEffect(() => {
    setCities(staticCities);
    setPracticeAreasList(staticPracticeAreas);
  }, [staticCities, staticPracticeAreas]); // Dependencies are now stable

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle search logic here
    console.log("City:", city);
    console.log("Practice Areas:", practiceAreas);
  };

  return (
    <div className="container mt-5 mb-5 p-5">
      <h2 className="text-center mb-5">Search for top-rated lawyers</h2>
      <div className="row justify-content-center">
        <div className="col-md-10 col-lg-8">
          <form onSubmit={handleSubmit}>
            <div className="row g-3 align-items-center">
              <div className="col-md-4">
                <select
                  className="form-select"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                >
                  <option value="">Select City</option>
                  {cities.map((city, index) => (
                    <option key={index} value={city}>
                      {city}
                    </option>
                  ))}
                </select>
              </div>
              <div className="col-md-4">
                <select
                  className="form-select"
                  value={practiceAreas}
                  onChange={(e) => setPracticeAreas(e.target.value)}
                >
                  <option value="">Select Practice Areas</option>
                  {practiceAreasList.map((area, index) => (
                    <option key={index} value={area}>
                      {area}
                    </option>
                  ))}
                </select>
              </div>
              <div className="col-md-4">
                <button type="submit" className="btn btn-primary w-100">
                  Search
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LawyerSearch;









// import React, { useState, useEffect } from "react";

// function LawyerSearch() {
//   const [city, setCity] = useState("");
//   const [practiceAreas, setPracticeAreas] = useState("");
//   const [cities, setCities] = useState([]);
//   const [practiceAreasList, setPracticeAreasList] = useState([]);
//   const [error, setError] = useState("");

//   // Function to fetch cities
//   const fetchCities = async () => {
//     try {
//       const response = await fetch();
//       if (!response.ok) {
//         throw new Error("Failed to fetch cities");
//       }
//       const data = await response.json();
//       setCities(data);
//     } catch (error) {
//       setError("Error fetching cities. Please try again later.");
//       console.error("Error fetching cities:", error);
//     }
//   };

//   // Function to fetch practice areas
//   const fetchPracticeAreas = async () => {
//     try {
//       const response = await fetch();
//       if (!response.ok) {
//         throw new Error("Failed to fetch practice areas");
//       }
//       const data = await response.json();
//       setPracticeAreasList(data);
//     } catch (error) {
//       setError("Error fetching practice areas. Please try again later.");
//       console.error("Error fetching practice areas:", error);
//     }
//   };

//   useEffect(() => {
//     fetchCities();
//     fetchPracticeAreas();
//   }, []);

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // Handle search logic here
//     console.log("City:", city);
//     console.log("Practice Areas:", practiceAreas);
//   };

//   return (
//     <div className="container mt-5 mb-5 p-5">
//       <h2 className="text-center mb-5">Search for top-rated lawyers</h2>
//       <div className="row justify-content-center">
//         <div className="col-md-10 col-lg-8">
//           <form onSubmit={handleSubmit}>
//             {error && <div className="alert alert-danger">{error}</div>}
//             <div className="row g-3 align-items-center">
//               <div className="col-md-4">
//                 <select
//                   className="form-select"
//                   value={city}
//                   onChange={(e) => setCity(e.target.value)}
//                 >
//                   <option value="">Select City</option>
//                   {cities.map((city, index) => (
//                     <option key={index} value={city}>
//                       {city}
//                     </option>
//                   ))}
//                 </select>
//               </div>
//               <div className="col-md-4">
//                 <select
//                   className="form-select"
//                   value={practiceAreas}
//                   onChange={(e) => setPracticeAreas(e.target.value)}
//                 >
//                   <option value="">Select Practice Areas</option>
//                   {practiceAreasList.map((area, index) => (
//                     <option key={index} value={area}>
//                       {area}
//                     </option>
//                   ))}
//                 </select>
//               </div>
//               <div className="col-md-4">
//                 <button type="submit" className="btn btn-primary w-100">
//                   Search
//                 </button>
//               </div>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default LawyerSearch;
