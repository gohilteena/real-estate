import { useProperties } from "../context/PropertyContext";

const Filters = () => {
  const {
    properties,
    selectedType,
    selectedDeveloper,
    changeType,
    changeDeveloper,
    resetFilters,
  } = useProperties();

  const propertyTypes = [
    ...new Set(
      properties.map((item) => item.property_type)
    ),
  ];

  const developers = [
    ...new Set(
      properties.map((item) => item.developer)
    ),
  ];

  return (
    <div className="filters-box">
      <div className="row g-3">

        <div className="col-md-4">
          <label className="form-label">Property Type</label>

          <select className="form-select" value={selectedType} onChange={(event) => changeType(event.target.value) } >
            <option value="">
              All Property Types
            </option>

            {propertyTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>

        <div className="col-md-4">
          <label className="form-label"> Developer </label>

          <select className="form-select" value={selectedDeveloper}onChange={(event) => changeDeveloper(event.target.value)}>
            <option value="">All Developers</option>

            {developers.map((developer) => (
              <option
                key={developer}
                value={developer}
              >
                {developer}
              </option>
            ))}
          </select>
        </div>

        <div className="col-md-4 d-flex align-items-end">
          <button type="button" className="btn btn-outline-dark reset-button" onClick={resetFilters}>Reset All Filters </button>
        </div>

      </div>
    </div>
  );
};

export default Filters;