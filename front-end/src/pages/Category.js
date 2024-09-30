import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../assets/css/Home.css';


const sharedClasses = {
  card: 'bg-card card grid-item',
  destructive: 'destructive-button',
  mutedForeground: 'text-muted-foreground',
};

const Category = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios.get('category')
      .then(response => {
        setCategories(response.data);
      })
      .catch(error => {
        console.error('Error fetching categories:', error);
      });
  }, []);

  return (

      <div className="bg-background text-foreground py-12">
        <div>
          <p style={{
            textAlign: 'center',
            color: '#808080',
            fontWeight: 'bold',
            fontSize: '2em',
            marginTop: '1em',
            marginBottom: '1em'
          }}>
            CATEGORIES
          </p>
        </div>
        <div className="grid-container max-w-6xl mx-auto">
          {categories.map(category => (
            <Card
              key={category.id}
              name={category.name}
              description={category.description}
            />
          ))}
        </div>
      </div>

  );
};

const Card = ({ name, description }) => {
  return (
    <div className={sharedClasses.card}>
      <div className="flex items-center justify-center mb-4">
        <h3 className="text-xl font-semibold">{name}</h3>
      </div>
      <p className={sharedClasses.mutedForeground}>{description}</p>
      <button className={sharedClasses.destructive}>Read more</button>
    </div>
  );
};

export default Category;
