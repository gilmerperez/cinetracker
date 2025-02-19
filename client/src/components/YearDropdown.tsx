// Props for passing the selected year to the parent component
interface YearDropdownProps {
  onYearChange: (year: string) => void;
}

const YearDropdown: React.FC<YearDropdownProps> = ({ onYearChange }) => {
  const setSelectedYear = (year: string) => {
    onYearChange(year); // Notify parent component about the selected year
  };

  const handleYearSelect = (year: string) => {
    setSelectedYear(year); // Update local state
    onYearChange(year); // Notify parent component about the selected year
  };

  return (
    <div className="dropdown">
      <button
        className="btn btn-secondary dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false">
        Year
      </button>
      <ul className="dropdown-menu">
        {[
          "2024",
          "2023",
          "2022",
          "2021",
          "2020",
          "2019",
          "2018",
          "2017",
          "2016",
          "2015",
          "2014",
          "2013",
          "2012",
          "2011",
          "2010",
          "2009",
          "2008",
          "2007",
          "2006",
          "2005",
          "2004",
          "2003",
          "2002",
          "2001",
          "2000",
        ].map((year) => (
          <li key={year}>
            <a className="dropdown-item" href="#" onClick={() => handleYearSelect(year)}>{year}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default YearDropdown;
