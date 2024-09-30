import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../assets/css/Scientist.css';
import { Button, Card, Col, Form, Row, Table } from 'react-bootstrap';
import { faArrowLeftLong, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';

const sharedClasses = {
  mutedForeground: 'text-muted-foreground',
  destructive: 'destructive-button',
};

const Scientist = () => {
  const [scientists, setScientists] = useState([]);
  const [result, setResult] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [scientistsPerPage] = useState(12);
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('scientists')
      .then(response => {
        setScientists(response.data);
        setResult(response.data);
      })
      .catch(error => {
        console.error('Error fetching scientists:', error);
      });
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const indexOfLastScientist = currentPage * scientistsPerPage;
  const indexOfFirstScientist = indexOfLastScientist - scientistsPerPage;
  const currentScientists = result.slice(indexOfFirstScientist, indexOfLastScientist);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const handleSearch = () => {
    setResult(scientists.filter(item => item.name.toLowerCase().includes(query.toLowerCase())));
  };

  return (
    <div className="bg-background text-foreground py-12">
      <div>
        <p className="text-center text-gray-500 font-bold text-2xl my-4">SCIENTISTS</p>
      </div>
      <div className="container">
        <Form>
          <div className="input-group mb-3">
            <input type="text" className="form-control" placeholder="Search..." value={query} onChange={e => setQuery(e.target.value)} />
            <div className="input-group-append">
              <Button variant="secondary" onClick={handleSearch}>
                <FontAwesomeIcon icon={faSearch} />
              </Button>
              <Button variant="danger" onClick={() => { setResult(scientists); setQuery('') }}>
                <FontAwesomeIcon icon={faArrowLeftLong} />
              </Button>
            </div>
          </div>
        </Form>
      </div>
      <div className="container mx-auto">
        <Row>
          {
            currentScientists.map(scientist =>
              <Col sm={6} md={3} key={scientist.id} >
                <Card style={{ width: '18rem' }} className='h-100'>
                  <Card.Img variant="top" src={`http://127.0.0.1:8000${scientist.image}`} />
                  <Card.Body>
                    <Card.Title>{scientist.name}</Card.Title>
                    <Card.Text>
                      Date of birth: {scientist.date_of_birth}
                    </Card.Text>
                    <Card.Text>
                      Nationality: {scientist.nationality}
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer className='border-0 bg-white'>
                    <Button variant="primary" onClick={() => navigate(`/scientist/${scientist.id}`)}>Read more</Button>
                  </Card.Footer>
                </Card>
              </Col>
            )
          }
        </Row>

        <PaginationComponent
          scientistsPerPage={scientistsPerPage}
          totalScientists={result.length}
          paginate={paginate}
          currentPage={currentPage}
        />
      </div>
    </div>
  );
};

const PaginationComponent = ({ scientistsPerPage, totalScientists, paginate, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalScientists / scientistsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="pagination">
      <ul className="pagination">
        {pageNumbers.map(number => (
          <li key={number} className={`pagination-item ${number === currentPage ? 'active' : ''}`} onClick={() => paginate(number)}>
            {number}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Scientist;
