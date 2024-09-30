import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../assets/css/Home.css';


const sharedClasses = {
  card: 'bg-card card grid-item',
  destructive: 'destructive-button',
  mutedForeground: 'text-muted-foreground',
};

const NobelPrize = () => {
  const [nobelPrizes, setNobelPrizes] = useState([]);
  const [categories, setCategories] = useState([]);
  const [scientists, setScientists] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [nobelPrizesRes, categoriesRes, scientistsRes] = await Promise.all([
          axios.get('nobel_prizes'),
          axios.get('categories'),
          axios.get('scientists')
        ]);
        setNobelPrizes(nobelPrizesRes.data);
        setCategories(categoriesRes.data);
        setScientists(scientistsRes.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  const getCategoryName = (categoryId) => {
    const category = categories.find(cat => cat.id === categoryId);
    return category ? category.name : 'Unknown Category';
  };

  const getScientistName = (scientistId) => {
    const scientist = scientists.find(sci => sci.id === scientistId);
    return scientist ? scientist.name : 'Unknown Scientist';
  };

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
            NOBEL PRIZES
          </p>
        </div>
        <div className="grid-container max-w-6xl mx-auto">
          {nobelPrizes.map(prize => (
            <Card
              key={prize.id}
              year={prize.year}
              description={prize.description}
              categoryName={getCategoryName(prize.category_id)}
              scientistName={getScientistName(prize.scientist_id)}
            />
          ))}
        </div>
      </div>
  );
};

const Card = ({ year, description, categoryName, scientistName }) => {
  return (
    <div className={sharedClasses.card}>
      <div className="flex items-center justify-center mb-4">
        <h3 className="text-xl font-semibold">{year}</h3>
      </div>
      <p className={sharedClasses.mutedForeground}>Category: {categoryName}</p>
      <p className={sharedClasses.mutedForeground}>Scientist: {scientistName}</p>
      <p className={sharedClasses.mutedForeground}>{description}</p>
      <button className={sharedClasses.destructive}>Read more</button>
    </div>
  );
};

export default NobelPrize;
