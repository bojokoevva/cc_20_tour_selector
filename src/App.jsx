import { useState } from "react";
import TourList from "./components/Gallery"; // Component to display list of tours
import DestinationSelector from "./components/DestinationSelector"; // Dropdown component to select destination
import "./styles/styles.css"; // Importing custom styles

function App() {
  // State to hold all tour data fetched from API
  const [tours, setTours] = useState([]);

  // State to track the selected tour destination (from dropdown)
  const [selectedDestination, setSelectedDestination] = useState("");

  // Function to remove a tour card when user clicks "Not Interested"
  const onRemove = (id) => {
    // Filter out the tour with the given ID
    setTours((prevTours) => prevTours.filter((tour) => tour.id !== id));
  };

  // Filter tours by selected destination
  // If none selected, show all
  const filteredTours = selectedDestination
    ? tours.filter((tour) => tour.name === selectedDestination)
    : tours;

  return (
    <>
      <h1 className="title">🌍 Tour Explorer</h1>
      <DestinationSelector
        tours={tours} // Send all tours to generate dropdown options
        onDestinationChange={setSelectedDestination} // Update selected destination
      />

      <TourList 
        tours={filteredTours} setTours={setTours} onRemove={onRemove} 
      />
    </>
  );
}

export default App;