import React from 'react';
import './CVDownload.css';
import { FaDownload } from 'react-icons/fa';

const CVDownload = () => {
  // 1. Paste your Google Drive File ID here
  const googleDriveFileId = 'YOUR_GOOGLE_DRIVE_FILE_ID_HERE';

  // 2. This creates the direct download link
  const cvUrl = `https://drive.google.com/file/d/1p2OIaUxBBGs_Cy4Hv1I0DndbQDdnD_Ui/view`;

  return (
    <section className="cv-download-section">
      <a 
        href={cvUrl} 
        className="cv-download-button"
        target="_blank" // Opens the link in a new tab to initiate download
        rel="noopener noreferrer"
      >
        <FaDownload />
        <span>Download CV</span>
      </a>
    </section>
  );
};

export default CVDownload;