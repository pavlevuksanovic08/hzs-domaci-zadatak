import { useState } from 'react';
import '../styles/createAcc.css';
import { api } from '../services/api';

export default function CreateAcc() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        dateOfBirth: '',
        weight: '',
        height: '',
        image: null,
        categories: {
            sleep: false,
            food: false,
            exercise: false,
            water: false
        }
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setFormData(prev => ({
                ...prev,
                image: file
            }));
        }
    };

    const handleCategoryChange = (e) => {
        const { name, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            categories: {
                ...prev.categories,
                [name]: checked
            }
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await api.createUser({
                first_name: formData.firstName,
                last_name: formData.lastName,
                gender: 'M',
                date_of_birth: formData.dateOfBirth
            });
            
            localStorage.setItem('userID', response.user_id);
            window.location.href = '/dashboard';
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <main className="createacc-main">
            <div className="createacc-container">
                <div className="createacc-card">
                <h1 className="createacc-title">Create Your Account</h1>
                
                <form onSubmit={handleSubmit} className="createacc-form">
                    <div className="form-section">
                        <label htmlFor="image" className="form-label">Profile Image</label>
                        <div className="image-upload-wrapper">
                            {formData.image ? (
                                <img src={URL.createObjectURL(formData.image)} alt="Preview" className="image-preview" />
                            ) : (
                                <div className="image-placeholder">
                                    <span>📷</span>
                                </div>
                            )}
                            <input
                                type="file"
                                id="image"
                                name="image"
                                accept="image/*"
                                onChange={handleImageChange}
                                className="file-input"
                            />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-section">
                            <label htmlFor="firstName" className="form-label">First Name</label>
                            <input
                                type="text"
                                id="firstName"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleInputChange}
                                className="form-input"
                                placeholder="Enter first name"
                                required
                            />
                        </div>

                        <div className="form-section">
                            <label htmlFor="lastName" className="form-label">Last Name</label>
                            <input
                                type="text"
                                id="lastName"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleInputChange}
                                className="form-input"
                                placeholder="Enter last name"
                                required
                            />
                        </div>
                    </div>

                    <div className="form-section">
                        <label htmlFor="dateOfBirth" className="form-label">Date of Birth</label>
                        <input
                            type="date"
                            id="dateOfBirth"
                            name="dateOfBirth"
                            value={formData.dateOfBirth}
                            onChange={handleInputChange}
                            className="form-input"
                            required
                        />
                    </div>

                    <div className="form-row">
                        <div className="form-section">
                            <label htmlFor="height" className="form-label">Height (cm)</label>
                            <input
                                type="number"
                                id="height"
                                name="height"
                                value={formData.height}
                                onChange={handleInputChange}
                                className="form-input"
                                placeholder="180"
                                required
                            />
                        </div>

                        <div className="form-section">
                            <label htmlFor="weight" className="form-label">Weight (kg)</label>
                            <input
                                type="number"
                                id="weight"
                                name="weight"
                                value={formData.weight}
                                onChange={handleInputChange}
                                className="form-input"
                                placeholder="75"
                                required
                            />
                        </div>
                    </div>

                    <div className="form-section">
                        <label className="form-label">Categories</label>
                        <div className="categories-container">
                            <label className="category-checkbox">
                                <input
                                    type="checkbox"
                                    name="sleep"
                                    checked={formData.categories.sleep}
                                    onChange={handleCategoryChange}
                                />
                                <span className="checkbox-label">Sleep</span>
                            </label>

                            <label className="category-checkbox">
                                <input
                                    type="checkbox"
                                    name="food"
                                    checked={formData.categories.food}
                                    onChange={handleCategoryChange}
                                />
                                <span className="checkbox-label">Food</span>
                            </label>

                            <label className="category-checkbox">
                                <input
                                    type="checkbox"
                                    name="exercise"
                                    checked={formData.categories.exercise}
                                    onChange={handleCategoryChange}
                                />
                                <span className="checkbox-label">Exercise</span>
                            </label>

                            <label className="category-checkbox">
                                <input
                                    type="checkbox"
                                    name="water"
                                    checked={formData.categories.water}
                                    onChange={handleCategoryChange}
                                />
                                <span className="checkbox-label">Water</span>
                            </label>
                        </div>
                    </div>

                    <button type="submit" className="submit-button">Create Account</button>
                </form>
            </div>
        </div>
        </main>
    )
}