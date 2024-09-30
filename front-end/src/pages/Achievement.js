import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../assets/css/Achievement.css'; // Import the Achievement CSS file
import { Table } from 'react-bootstrap';

const Achievement = () => {
  const [achievements, setAchievements] = useState([]);

  useEffect(() => {
    axios.get('achievement')
      .then(response => {
        setAchievements(response.data);
      })
      .catch(error => {
        console.error('Error fetching achievements:', error);
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
          ACHIEVEMENTS
        </p>
      </div>
      <div className="max-w-6xl mx-auto">
        <Table striped bordered hover responsive className="bg-card">
          <thead>
            <tr>
              <th>Title</th>
              <th>Description</th>
              <th>Publication Date</th>

            </tr>
          </thead>
          <tbody>
            {achievements.map(achievement => (
              <tr key={achievement.id}>
                <td>{achievement.title}</td>
                <td>{achievement.descriptipn}</td>
                <td>{achievement.publication_date}</td>

              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default Achievement;
