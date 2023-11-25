import React, { useState } from "react";
import Dashboard from "../Dashboard/Dashboard";
import "../../styles/adminDashboard.css";

const ImageUploadForm = () => {
  const [file, setFile] = useState(null);
  const [labels, setLabels] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [uploadMessage, setUploadMessage] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleLabelsChange = (event) => {
    setLabels(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("image", file);
    formData.append("labels", labels);

    try {
      const response = await fetch("http://localhost:8080/upload-image", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const result = await response.json();
        console.log("Upload successful:", result);
        setUploadMessage(`File uploaded successfully: ${result.file}`);
      } else {
        console.error("Upload failed:", response.statusText);
        setUploadMessage("Upload failed. Please try again.");
      }
    } catch (error) {
      console.error("Error during upload:", error.message);
      setUploadMessage("Error during upload. Please try again.");
    }
  };

  const handleToggle = () => {
    setShowForm(!showForm);
    setUploadMessage(null);
  };

  return (
    <>
      <div className="adminDashboard">
        <nav className="ad-navbar flex justify-between items-center   p-4">
          <h1 className="ad-navbar text-2xl font-bold">ADMIN DASHBOARD</h1>
          <button
            onClick={handleToggle}
            className="img_upload_btn text-white hover:underline"
          >
            Upload Image
          </button>
        </nav>

        {showForm && (
          <form
            onSubmit={handleSubmit}
            className="upload-img max-w-md mx-auto mt-4 p-6 bg-gradient-to-r from-blue-300 to-blue-400 rounded-md shadow-md"
          >
            <div className=" mb-4">
              <label className="select-image block text-white text-lg font-bold mb-2">
                Select Image:
              </label>
              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="border p-2 w-full"
              />
            </div>
            <div className="mb-4">
              <label className="labels block text-white text-lg font-bold mb-2">
                Labels:
              </label>
              <input
                type="text"
                value={labels}
                onChange={handleLabelsChange}
                className="upload-message border p-2 w-full"
              />
            </div>
            <div>
              <button
                type="submit"
                className="upload-btn bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 focus:outline-none"
              >
                Upload
              </button>
            </div>
            {uploadMessage && (
              <div className=" mt-4 text-white">{uploadMessage}</div>
            )}
          </form>
        )}

        <Dashboard />
      </div>
    </>
  );
};

export default ImageUploadForm;
