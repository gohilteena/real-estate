import { useProperties } from "../context/PropertyContext";
import PropertyCard from "./PropertyCard";

const PropertyList = ({ onContact }) => {
  const {visibleProperties,filteredProperties, } = useProperties();

  if (filteredProperties.length === 0) {
    return (
      <div className="no-properties">
        <h3>No properties found</h3>
        <p>Try changing the selected filters.</p>
      </div>
    );
  }

  return (
    <div className="row">

      {visibleProperties.map((property) => (
        <PropertyCard
          key={property.id}
          property={property}
          onContact={onContact}
        />
      ))}

    </div>
  );
};

export default PropertyList;