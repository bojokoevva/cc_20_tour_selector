import React, { useState } from "react";

const DestinationSelector = ({ tours, onDestinationChange }) => {
    // State to keep track of the selected destination
    const [selectedDestination, setSelectedDestination] = useState("");

    // Extract unique destinations from the list of tours
    const uniqueDestinations = [
        "All Destinations", // Option to reset the filter and show all tours
        ...new Set(
            tours.map((tour) => {
                const words = tour.name.split(" "); // Split the tour name into words
                return words[2] || ""; // Extract the third word, assuming it's the destination
            }).filter((destination) => destination) // Remove empty strings (in case there is no third word)
        ),
    ];

    // Handle the dropdown selection change
    const handleChange = (event) => {
        const destination = event.target.value; // Get the selected value from the dropdown
        setSelectedDestination(destination); // Update the local state with the selected value

        // If "All Destinations" is selected, pass an empty string to reset the filter
        onDestinationChange(destination === "All Destinations" ? "" : destination);
    };

    return (
        <div className="destination-selector">
            <label htmlFor="destination">Select a Destination: </label>
            <select
                id="destination"
                value={selectedDestination} // Bind the selected value to state
                onChange={handleChange} // Call the function when the value changes
            >

                {uniqueDestinations.map((destination) => (
                    <option key={destination} value={destination}>
                        {destination} {/* Display each destination */}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default DestinationSelector;