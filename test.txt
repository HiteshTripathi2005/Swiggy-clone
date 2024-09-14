import { Button, Modal } from "flowbite-react";
import { useState } from "react";
import Autocomplete from "@mui/joy/Autocomplete";

function SelectLocation() {
  const [openModal, setOpenModal] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [selectedLocation, setSelectedLocation] = useState(null);

  const handleChange = (event, newValue) => {
    setSelectedLocation(newValue);
  };

  const handleInputChange = (event, newValue) => {
    setInputValue(newValue);
  };

  const handleConfirm = () => {
    if (selectedLocation) {
      // Remove the old location from local storage
      localStorage.removeItem("selectedLocation");

      // Add the new location to local storage
      localStorage.setItem(
        "selectedLocation",
        JSON.stringify(selectedLocation)
      );
      window.location.reload();
    }
    setOpenModal(false);
  };

  const storedLocation = JSON.parse(localStorage.getItem("selectedLocation"));
  const displayName = storedLocation ? storedLocation.shortName : "other";

  return (
    <>
      <p onClick={() => setOpenModal(true)}>{displayName}</p>
      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>Select your location</Modal.Header>
        <Modal.Body>
          <div className="w-full flex justify-center">
            <Autocomplete
              options={allStations}
              getOptionLabel={(option) => option.label}
              onChange={handleChange}
              inputValue={inputValue}
              onInputChange={handleInputChange}
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

const allStations = [
  {
    label: "Churchgate",
    value: "Churchgate",
    shortName: "CG",
    latitude: 18.9393,
    longitude: 72.8258,
  },

  {
    label: "Charni Road",
    value: "Charni Road",
    shortName: "CR",
    latitude: 18.9341,
    longitude: 72.8198,
  },
  {
    label: "Grant Road",
    value: "Grant Road",
    shortName: "GR",
    latitude: 18.9318,
    longitude: 72.8235,
  },
  {
    label: "Mumbai Central",
    value: "Mumbai Central",
    shortName: "MC",
    latitude: 18.975,
    longitude: 72.8281,
  },
  {
    label: "Mahalaxmi",
    value: "Mahalaxmi",
    shortName: "MX",
    latitude: 18.9504,
    longitude: 72.8234,
  },
  {
    label: "Lower Parel",
    value: "Lower Parel",
    shortName: "LP",
    latitude: 18.9988,
    longitude: 72.8231,
  },
  {
    label: "Prabhadevi (Elphinstone Road)",
    value: "Prabhadevi (Elphinstone Road)",
    shortName: "PD",
    latitude: 19.0048,
    longitude: 72.8262,
  },
  {
    label: "Dadar",
    value: "Dadar",
    shortName: "DR",
    latitude: 19.0183,
    longitude: 72.8323,
  },
  {
    label: "Matunga Road",
    value: "Matunga Road",
    shortName: "MR",
    latitude: 19.0176,
    longitude: 72.8435,
  },
  {
    label: "Mahim",
    value: "Mahim",
    shortName: "MH",
    latitude: 19.0423,
    longitude: 72.8364,
  },
  {
    label: "Bandra",
    value: "Bandra",
    shortName: "BR",
    latitude: 19.059,
    longitude: 72.8376,
  },
  {
    label: "Khar Road",
    value: "Khar Road",
    shortName: "KR",
    latitude: 19.0577,
    longitude: 72.8318,
  },
  {
    label: "Santacruz",
    value: "Santacruz",
    shortName: "SC",
    latitude: 19.073,
    longitude: 72.8344,
  },
  {
    label: "Vile Parle",
    value: "Vile Parle",
    shortName: "VP",
    latitude: 19.0976,
    longitude: 72.8269,
  },
  {
    label: "Andheri",
    value: "Andheri",
    shortName: "AD",
    latitude: 19.1183,
    longitude: 72.834,
  },
  {
    label: "Jogeshwari",
    value: "Jogeshwari",
    shortName: "JW",
    latitude: 19.1298,
    longitude: 72.834,
  },
  {
    label: "Ram Mandir",
    value: "Ram Mandir",
    shortName: "RM",
    latitude: 19.1322,
    longitude: 72.8433,
  },
  {
    label: "Goregaon",
    value: "Goregaon",
    shortName: "GO",
    latitude: 19.1735,
    longitude: 72.847,
  },
  {
    label: "Malad",
    value: "Malad",
    shortName: "MLD",
    latitude: 19.1999,
    longitude: 72.8496,
  },
  {
    label: "Kandivali",
    value: "Kandivali",
    shortName: "KV",
    latitude: 19.2264,
    longitude: 72.8458,
  },
  {
    label: "Borivali",
    value: "Borivali",
    shortName: "BRV",
    latitude: 19.2394,
    longitude: 72.8448,
  },
  {
    label: "Dahisar",
    value: "Dahisar",
    shortName: "DSR",
    latitude: 19.2531,
    longitude: 72.8471,
  },
  {
    label: "Mira Road",
    value: "Mira Road",
    shortName: "MRD",
    latitude: 19.2957,
    longitude: 72.8341,
  },
  {
    label: "Bhayandar",
    value: "Bhayandar",
    shortName: "BHY",
    latitude: 19.3032,
    longitude: 72.8348,
  },
  {
    label: "Naigaon",
    value: "Naigaon",
    shortName: "NGN",
    latitude: 19.3144,
    longitude: 72.8328,
  },
  {
    label: "Vasai Road",
    value: "Vasai Road",
    shortName: "VSR",
    latitude: 19.3757,
    longitude: 72.8404,
  },
  {
    label: "Nalasopara",
    value: "Nalasopara",
    shortName: "NSR",
    latitude: 19.4181,
    longitude: 72.8327,
  },
  {
    label: "Virar",
    value: "Virar",
    shortName: "VR",
    latitude: 19.435,
    longitude: 72.8327,
  },
  {
    label: "Vaitarna",
    value: "Vaitarna",
    shortName: "VT",
    latitude: 19.5021,
    longitude: 72.8118,
  },
  {
    label: "Saphale",
    value: "Saphale",
    shortName: "SPL",
    latitude: 19.6096,
    longitude: 72.8237,
  },
  {
    label: "Kelve Road",
    value: "Kelve Road",
    shortName: "KLR",
    latitude: 19.6587,
    longitude: 72.8222,
  },
  {
    label: "Palghar",
    value: "Palghar",
    shortName: "PLR",
    latitude: 19.7211,
    longitude: 72.7401,
  },
  {
    label: "Umroli",
    value: "Umroli",
    shortName: "UMR",
    latitude: 19.7877,
    longitude: 72.735,
  },
  {
    label: "Boisar",
    value: "Boisar",
    shortName: "BSR",
    latitude: 19.915,
    longitude: 72.743,
  },
  {
    label: "Vangaon",
    value: "Vangaon",
    shortName: "VGN",
    latitude: 19.982,
    longitude: 72.7438,
  },
  {
    label: "Dahanu Road",
    value: "Dahanu Road",
    shortName: "DHR",
    latitude: 20.09,
    longitude: 72.8276,
  },
];
