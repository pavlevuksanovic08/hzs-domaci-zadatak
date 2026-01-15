
import '../styles/profile.css';

export default function Profile() {
    // Sample data - replace with actual data from state/props
    const profileData = {
        image: 'https://via.placeholder.com/150',
        name: 'Pavle',
        surname: 'Jovanovic',
        dateOfBirth: '1995-05-15',
        categories: ['Fitness', 'Health', 'Wellness'],
        height: 185,
        weight: 80
    };

    return (
        <div className="profile-container">
            <div className="profile-card">
                <div className="profile-header">
                    <img src={profileData.image} alt={`${profileData.name} ${profileData.surname}`} className="profile-image" />
                </div>

                <div className="profile-content">
                    <div className="profile-info">
                        <h1 className="profile-name">{profileData.name} {profileData.surname}</h1>
                        <p className="profile-dob">
                            <span className="label">Date of Birth:</span>
                            <span className="value">{new Date(profileData.dateOfBirth).toLocaleDateString()}</span>
                        </p>
                    </div>

                    <div className="profile-categories">
                        <h2 className="section-title">Categories</h2>
                        <div className="categories-list">
                            {profileData.categories.map((category, index) => (
                                <span key={index} className="category-badge">{category}</span>
                            ))}
                        </div>
                    </div>

                    <div className="profile-measurements">
                        <div className="measurement-item">
                            <span className="measurement-label">Height</span>
                            <span className="measurement-value">{profileData.height} cm</span>
                        </div>
                        <div className="measurement-item">
                            <span className="measurement-label">Weight</span>
                            <span className="measurement-value">{profileData.weight} kg</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}