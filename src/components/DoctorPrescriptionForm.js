import React, { useState } from "react";
import { useNavigate } from "react-router-dom";  // Importing useNavigate hook
import './DoctorPrescriptionForm.css';

const DoctorPrescriptionForm = () => {
    const [formData, setFormData] = useState({
        patientName: "",
        patientAge: "",
        email: "",
        phone: "",
        gender: "",
        symptoms: "",
        diagnosis: [],
        prescription: "",
        confirm: false,
    });

    const navigate = useNavigate(); // Initialize navigate function

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        if (type === "checkbox") {
            if (name === "confirm") {
                setFormData({ ...formData, confirm: checked });
            } else {
                const updatedDiagnosis = checked
                    ? [...formData.diagnosis, value]
                    : formData.diagnosis.filter((item) => item !== value);
                setFormData({ ...formData, diagnosis: updatedDiagnosis });
            }
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.confirm) {
            alert("Form submitted successfully!");
            console.log("Form Data:", formData);
            navigate("/appointment"); // Navigate to the appointment page after submission
        } else {
            alert("Please confirm the information before submitting.");
        }
    };

    return (
        <div className="form-container">
            <h2 className="form-title">Doctor Prescription Form</h2>
            <form onSubmit={handleSubmit} className="form">
                <label className="form-label">
                    PATIENT NAME
                    <input
                        type="text"
                        name="patientName"
                        placeholder="Enter patient name"
                        value={formData.patientName}
                        onChange={handleInputChange}
                        required
                        className="form-input"
                    />
                </label>
                <label className="form-label">
                    PATIENT AGE
                    <input
                        type="text"
                        name="patientAge"
                        placeholder="Enter patient age"
                        value={formData.patientAge}
                        onChange={handleInputChange}
                        required
                        className="form-input"
                    />
                </label>
                <label className="form-label">
                    EMAIL
                    <input
                        type="email"
                        name="email"
                        placeholder="Enter your email address"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="form-input"
                    />
                </label>
                <label className="form-label">
                    PHONE
                    <input
                        type="tel"
                        name="phone"
                        placeholder="Enter your phone number"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="form-input"
                    />
                </label>
                <div className="form-radio-group">
                    <label className="form-radio-label">
                        <input
                            type="radio"
                            name="gender"
                            value="Male"
                            checked={formData.gender === "Male"}
                            onChange={handleInputChange}
                        />
                        Male
                    </label>
                    <label className="form-radio-label">
                        <input
                            type="radio"
                            name="gender"
                            value="Female"
                            checked={formData.gender === "Female"}
                            onChange={handleInputChange}
                        />
                        Female
                    </label>
                    <label className="form-radio-label">
                        <input
                            type="radio"
                            name="gender"
                            value="Other"
                            checked={formData.gender === "Other"}
                            onChange={handleInputChange}
                        />
                        Other
                    </label>
                </div>
                <label className="form-label">
                    SYMPTOMS
                    <textarea
                        name="symptoms"
                        placeholder="Enter symptoms"
                        value={formData.symptoms}
                        onChange={handleInputChange}
                        rows={3}
                        className="form-textarea"
                    />
                </label>
                <label className="form-label">
                    PRESCRIPTION
                    <textarea
                        name="prescription"
                        placeholder="Enter prescription"
                        value={formData.prescription}
                        onChange={handleInputChange}
                        rows={2}
                        className="form-textarea"
                    />
                </label>
                <label className="form-confirm">
                    <input
                        type="checkbox"
                        name="confirm"
                        checked={formData.confirm}
                        onChange={handleInputChange}
                        className="form-checkbox"
                    />
                    <span>I certify that the above information is true and accurate.</span>
                </label>

                <button type="submit" className="form-submit">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default DoctorPrescriptionForm;
