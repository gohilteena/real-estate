import { createContext, useContext, useState } from "react";
import propertyData from "../data/property-list-data.json";

const PropertyContext = createContext();

export const PropertyProvider = ({ children }) => {
  const [properties] = useState(propertyData.properties);

  const [selectedType, setSelectedType] = useState("");
  const [selectedDeveloper, setSelectedDeveloper] = useState("");

  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 9;

  const filteredProperties = properties.filter((property) => {
    const typeMatches = selectedType === "" || property.property_type === selectedType;
    const developerMatches = selectedDeveloper === "" || property.developer === selectedDeveloper;

    return typeMatches && developerMatches;
  });

  const totalPages = Math.ceil(filteredProperties.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;

  const visibleProperties = filteredProperties.slice(startIndex, startIndex + itemsPerPage);

  const changeType = (value) => {
    setSelectedType(value);
    setCurrentPage(1);
  };

  const changeDeveloper = (value) => {
    setSelectedDeveloper(value);
    setCurrentPage(1);
  };

  const resetFilters = () => {
    setSelectedType("");
    setSelectedDeveloper("");
    setCurrentPage(1);
  };

  return (
    <PropertyContext.Provider
      value={{
        properties,
        filteredProperties,
        visibleProperties,

        selectedType,
        selectedDeveloper,

        changeType,
        changeDeveloper,

        currentPage,
        setCurrentPage,

        totalPages,

        resetFilters,
      }}
    >
      {children}
    </PropertyContext.Provider>
  );
};

export const useProperties = () => {
  return useContext(PropertyContext);
};