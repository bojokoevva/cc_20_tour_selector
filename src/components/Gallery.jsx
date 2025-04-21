import React, { useEffect, useState } from "react";
import TourCard from "./TourCard";

// TourList component is responsible for fetching and rendering a list of tours.
// It also manages loading, error states, and displays available tours.
const TourList = ({ tours, setTours, onRemove }) => {
    // State to manage loading and error states
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    // Fetch function to get tour data from the API (this is essential for the functionality of your app)
    const fetchTours = async () => {
        try {
            // Making a request to the API to fetch tour data
            const response = await fetch("https://api.allorigins.win/raw?url=https://course-api.com/react-tours-project");
            
            // If the response is not ok, throw an error and display an error message
            if (!response.ok) {
                throw new Error("Failed to fetch tours");
            }
            
            // Convert the response to JSON
            const data = await response.json();
            
            // Set the fetched data into the tours state
            setTours(data);
        } catch (error) {
            // If something goes wrong during the fetch, show an error message
            setError(true);
            console.log(error); // Log the error to the console for debugging
        } finally {
            // Once data is fetched (or if an error occurs), stop the loading state
            setLoading(false);
        }
    };

    // Calling fetchTours when the component mounts
    useEffect(() => {
        fetchTours();  
    }, []); // The empty array means this effect runs only once, when the component is first mounted

    // Render the loading state: shows a loading message while waiting for the API data
    if (loading) {
        return <h2>Loading...</h2>;
    }

    // Render error state: shows an error message if fetching fails
    if (error) {
        return <h2>Something went wrong...</h2>;
    }

    // Render a message if no tours are available (this could happen if no data is fetched)
    if (tours.length === 0) {
        return (
            <div className="no-tours">
                <h2>No Tours Available</h2>
                <button onClick={fetchTours} className="refresh-btn">Refresh</button>
            </div>
        );
    }

    // If tours are successfully fetched, render the list of TourCard components
    return (
        <section className="tour-list">
            {tours.map((tour) => {
                return (
                    // Each tour card is rendered here. Pass the individual tour data as props to TourCard
                    <TourCard
                        key={tour.id} 
                        {...tour} 
                        onRemove={onRemove} 
                    />
                );
            })}
        </section>
    );
};

export default TourList;