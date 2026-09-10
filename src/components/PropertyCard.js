const PropertyCard = ({ property, onContact }) => {
  return (
    <div className="col-lg-4 col-md-6 mb-4">
      <div className="property-card h-100">

        <img src={property.property_image}
          alt={property.title}
          className="property-image"
        />

        <div className="property-content">

          <span className="property-type">
            {property.property_type}
          </span>

          <h3>{property.title}</h3>

          <p className="property-area">{property.area} </p>
          <p className="property-description"> {property.small_description} </p>

          <p className="property-developer">
            <strong>Developer:</strong>{" "}
            {property.developer}
          </p>

          <div className="property-footer">
            <span className="property-price">
              {property.currency}{" "}
              {property.property_price.toLocaleString()}
            </span>

            <button type="button" className="btn btn-dark" onClick={() => onContact(property)}> Contact </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default PropertyCard;