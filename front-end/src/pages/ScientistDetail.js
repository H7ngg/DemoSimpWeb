import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import '../assets/css/Scientist.css';

const ScientistDetail = () => {
  const { id } = useParams();
  const [scientist, setScientist] = useState(null);

  useEffect(() => {
    axios.get(`scientists/details/${id}`)
      .then(response => {
        setScientist(response.data);
      })
      .catch(error => {
        console.error('Error fetching scientist details:', error);
      });
  }, [id]);

  if (!scientist) return <p>Loading...</p>;

  return (
    <div className="bg-background text-foreground py-12">
      <div className="container">
        <h1 className="text-center mb-4">{scientist.name}</h1>
        <div className="card-detail">
          <img src={`http://127.0.0.1:8000${scientist.image}`} alt={scientist.name} className="card-image" />
          <div className="card-content">
            <p><strong>Birth Place:</strong> {scientist.birth_place}</p>
            <p><strong>Nationality:</strong> {scientist.nationality}</p>
            <p><strong>Date of Birth:</strong> {scientist.date_of_birth}</p>
            {scientist.date_of_death && <p><strong>Date of Death:</strong> {scientist.date_of_death}</p>}
            <p><strong>Biography:</strong> {scientist.biography}</p>
            <p><strong>Quote:</strong> {scientist.quote}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScientistDetail;