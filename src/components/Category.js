import React, { useState, useEffect } from 'react';

const Category = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredCategories, setFilteredCategories] = useState([]);
  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(null);

  const categories = [
    'Dentist',
    'Cardiologist',
    'Dermatologist',
    'Pediatrician',
    'Ophthalmologist',
    'Neurologist',
    'Orthopedist',
    'Pathologist',
  ];

  const icons = [
    'fas fa-tooth',       // Tooth icon
    'fas fa-heart',       // Heart icon
    'fas fa-user-md',     // Stethoscope icon
    'fas fa-baby',        // Baby bottle icon
    'fas fa-eye',         // Eyeball icon
    'fas fa-brain',       // Brain icon
    'fas fa-wheelchair',  // Accessibility icon
    'fas fa-flask',       // Science icon
  ];

  useEffect(() => {
    setFilteredCategories(categories);
  }, []);

  useEffect(() => {
    const filterCategories = () => {
      const query = searchQuery.toLowerCase();
      setFilteredCategories(
        categories.filter((category) => category.toLowerCase().includes(query))
      );
    };
    filterCategories();
  }, [searchQuery]);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleCategoryClick = (index) => {
    setSelectedCategoryIndex(index);
  };

  return (
    <div style={{ padding: '16px' }}>
      <h2>Select Your Category</h2>
      <input
        type="text"
        value={searchQuery}
        onChange={handleSearchChange}
        placeholder="Search"
        style={{
          padding: '12px',
          fontSize: '16px',
          width: '100%',
          marginBottom: '16px',
          borderRadius: '8px',
          border: '1px solid #ccc',
        }}
      />
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '16px',
        }}
      >
        {filteredCategories.map((category, index) => (
          <div
            key={index}
            onClick={() => handleCategoryClick(index)}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              padding: '16px',
              backgroundColor: selectedCategoryIndex === index ? '#007bff' : '#f0f0f0',
              color: selectedCategoryIndex === index ? '#fff' : '#007bff',
              borderRadius: '8px',
              cursor: 'pointer',
            }}
          >
            <i className={`${icons[categories.indexOf(category)]}`} style={{ fontSize: '40px' }}></i>
            <p style={{ fontSize: '14px', fontWeight: 'bold', textAlign: 'center' }}>
              {category.toUpperCase()}
            </p>
          </div>
        ))}
      </div>
      <div style={{ marginTop: '16px', textAlign: 'center' }}>
        <p style={{ fontSize: '16px', color: '#000' }}>
          Your category is not available?{' '}
          <span style={{ color: '#007bff', textDecoration: 'underline', cursor: 'pointer' }}>
            Suggest Us
          </span>
        </p>
      </div>
      <button
        style={{
          marginTop: '24px',
          padding: '16px',
          width: '100%',
          backgroundColor: '#007bff',
          color: '#fff',
          fontSize: '16px',
          borderRadius: '8px',
          border: 'none',
          cursor: 'pointer',
        }}
        onClick={() => {
          // Handle continue button click
        }}
      >
        Continue
      </button>
    </div>
  );
};

export default Category;
