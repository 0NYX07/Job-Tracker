export default function Filters({
  statusFilter, setStatusFilter,
  platformFilter, setPlatformFilter,
  locationFilter, setLocationFilter,
}) {
  return (
    <div className="filter-bar">
      <select
        className="filter-dropdown"
        value={statusFilter}
        onChange={(e) => setStatusFilter(e.target.value)}
      >
        <option value="All">All Statuses</option>
        <option value="Applied">Applied</option>
        <option value="Interviewing">Interviewing</option>
        <option value="Offer">Offer</option>
        <option value="Rejected">Rejected</option>
      </select>

      <select
        className="filter-dropdown"
        value={platformFilter}
        onChange={(e) => setPlatformFilter(e.target.value)}
      >
        <option value="All">All Platforms</option>
        <option value="LinkedIn">LinkedIn</option>
        <option value="Referral">Referral</option>
        <option value="Company Site">Company Site</option>
        <option value="Naukri">Naukri</option>
        <option value="Internshala">Internshala</option>
      </select>

      <select
        className="filter-dropdown"
        value={locationFilter}
        onChange={(e) => setLocationFilter(e.target.value)}
      >
        <option value="All">All Locations</option>
        <option value="Bengaluru">Bengaluru</option>
        <option value="Hyderabad">Hyderabad</option>
        <option value="Pune">Pune</option>
        <option value="Mumbai">Mumbai</option>
        <option value="Chennai">Chennai</option>
        <option value="Noida">Noida</option>
        <option value="Remote">Remote</option>
        <option value="Gurgaon">Gurgaon</option>
        <option value="Kolkata">Kolkata</option>
        <option value="Ahmedabad">Ahmedabad</option>
      </select>
    </div>
  );
}
