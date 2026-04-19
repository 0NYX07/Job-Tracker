export default function SearchBar({ value, onChange }) {
  return (
    <div className="search-wrapper">
      <span className="search-icon">🔍</span>
      <input
        className="search-input"
        type="text"
        placeholder="Search by company, role, or location..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      {value && (
        <button className="clear-btn" onClick={() => onChange("")}>
          ✕
        </button>
      )}
    </div>
  );
}
