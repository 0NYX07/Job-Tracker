import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBookmark, FaRegBookmark, FaEdit, FaTrash } from "react-icons/fa";
import { toast } from "react-toastify";
import { getLogoUrl } from "../services/api";
import { formatDate, getStatusColorClass } from "../utils/helpers";
import { useApplications } from "../hooks/useApplications";
 
export default function JobCard({ app }) {
  const { deleteApplication, toggleBookmark } = useApplications();
  const [imgError, setImgError] = useState(false);
 
  const handleDelete = () => {
    toast(
      ({ closeToast }) => (
        <div>
          <p style={{ marginBottom: "10px", fontWeight: "500" }}>
            Delete application for <strong>{app.company}</strong>?
          </p>
          <div style={{ display: "flex", gap: "8px" }}>
            <button
              onClick={() => {
                deleteApplication(app.id);
                closeToast();
                toast.success("Application deleted.");
              }}
              style={{
                padding: "6px 14px",
                borderRadius: "8px",
                border: "none",
                background: "#ff6584",
                color: "white",
                fontWeight: "600",
                cursor: "pointer",
              }}
            >
              Delete
            </button>
            <button
              onClick={closeToast}
              style={{
                padding: "6px 14px",
                borderRadius: "8px",
                border: "1px solid #2a2a38",
                background: "#2a2a38",
                color: "#f0f0f8",
                fontWeight: "600",
                cursor: "pointer",
              }}
            >
              Cancel
            </button>
          </div>
        </div>
      ),
      { autoClose: false, closeButton: false }
    );
  };
 
  return (
    <div className="card">
      <div className="card-actions">
        <Link
          to={`/applications/${app.id}`}
          className="action-btn"
          title="Edit"
          aria-label={`Edit application for ${app.company}`}
        >
          <FaEdit />
        </Link>
        <button
          className="action-btn"
          onClick={handleDelete}
          title="Delete"
          aria-label={`Delete application for ${app.company}`}
        >
          <FaTrash />
        </button>
        <button
          className={`action-btn ${app.bookmarked ? "bookmark-active" : ""}`}
          onClick={() => toggleBookmark(app.id)}
          title={app.bookmarked ? "Remove Bookmark" : "Bookmark"}
          aria-label={app.bookmarked ? `Remove bookmark for ${app.company}` : `Bookmark ${app.company}`}
        >
          {app.bookmarked ? <FaBookmark /> : <FaRegBookmark />}
        </button>
      </div>
 
      <div className="card-top">
        {!imgError ? (
          <img
            src={getLogoUrl(app.company)}
            alt={`${app.company} logo`}
            className="company-logo"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="company-initial">{app.company.charAt(0).toUpperCase()}</div>
        )}
        <div className="card-meta">
          <p className="company-name">{app.company}</p>
          <div className={`status-badge ${getStatusColorClass(app.status)}`}>{app.status}</div>
        </div>
      </div>
 
      <h3 className="role">{app.role}</h3>
 
      <div className="info-row">
        <span className="info">📍 {app.location}</span>
        <span className="info">💰 {app.salary || "N/A"}</span>
      </div>
 
      <div className="info-row" style={{ marginBottom: "8px" }}>
        <span className="info">🏢 {app.platform}</span>
      </div>
      <div className="info-row">
        <span className="info">📅 Applied: {formatDate(app.appliedDate)}</span>
      </div>
 
      {app.interviewDate && (
        <div className="info-row">
          <span className="info" style={{ color: "#f6ad55" }}>
            🎤 Interview: {formatDate(app.interviewDate)}
          </span>
        </div>
      )}
 
      {app.notes && (
        <p className="description" style={{ marginTop: "12px", color: "#7a7a9a", fontSize: "14px" }}>
          {app.notes}
        </p>
      )}
    </div>
  );
}
