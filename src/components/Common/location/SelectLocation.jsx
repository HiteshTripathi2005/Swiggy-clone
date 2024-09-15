import { Button, Modal } from "flowbite-react";
import { useState } from "react";
import Autocomplete from "@mui/joy/Autocomplete";

const CLOUDFLARE_WORKER_URL =
  "https://swiggy-proxy.tripathihitesh580.workers.dev";

function SelectLocation() {
  const [openModal, setOpenModal] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [locations, setLocations] = useState([]);

  // Fetch locations when input value changes
  const handleInputChange = (event, newValue) => {
    setInputValue(newValue);

    if (newValue.length > 0) {
      fetch(`${CLOUDFLARE_WORKER_URL}/place-autocomplete?input=${newValue}`)
        .then((res) => res.json())
        .then((data) => {
          // Map to get both place_id and description
          const locationData = data.data.map((item) => ({
            description: item.description,
            place_id: item.place_id,
          }));
          setLocations(locationData);
        })
        .catch((err) => console.error("Error fetching locations:", err));
    } else {
      setLocations([]);
    }
  };

  const handleChange = (event, newValue) => {
    setSelectedLocation(newValue); // `newValue` contains both description and place_id
  };

  const handleConfirm = () => {
    if (selectedLocation && selectedLocation.place_id) {
      // Save the selected place_id to localStorage
      localStorage.setItem(
        "selectedLocation",
        JSON.stringify(selectedLocation)
      );

      window.location.reload();

      // Close the modal
      setOpenModal(false);
    }
  };

  // Get the stored location from localStorage
  const storedLocation = JSON.parse(localStorage.getItem("selectedLocation"));
  const displayName = storedLocation
    ? storedLocation.description.slice(0, 5)
    : "other";

  return (
    <>
      <p onClick={() => setOpenModal(true)}>{displayName}</p>

      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>Select your location</Modal.Header>
        <Modal.Body>
          <div className="w-full flex justify-center">
            <Autocomplete
              options={locations}
              getOptionLabel={(option) => option.description}
              onChange={handleChange}
              inputValue={inputValue}
              onInputChange={handleInputChange}
              isOptionEqualToValue={(option, value) =>
                option.place_id === value.place_id
              }
              slotProps={{ input: { placeholder: "Choose your location" } }}
              sx={{ maxWidth: 300 }}
            />
          </div>
        </Modal.Body>
        <Modal.Footer className="flex justify-center">
          <Button onClick={handleConfirm}>Confirm</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default SelectLocation;
