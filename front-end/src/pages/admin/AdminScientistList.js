import { useEffect, useState } from "react";
import axios from 'axios';
import { Button, Col, Container, Form, Image, Modal, Row, Table } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faPen, faPlus, faSearch, faTimes } from "@fortawesome/free-solid-svg-icons";



const AdminScientistList = () => {
    const [scientists, setScientists] = useState([]);
    const [result, setResult] = useState([]);

    const [filter, setFilter] = useState({});


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

    const handleChageSearch = (e) => {
        setFilter({ ...filter, [e.target.name]: e.target.value });
    }

    const handleFilter = () => {

        setResult(scientists.filter(item => item.name.toLowerCase().includes(filter.name?.toLowerCase() ?? ''))
            .filter(item => item.nationality.toLowerCase().includes(filter.nationality?.toLowerCase() ?? '')));
    }


    const [selectedScientist, setSelectedScientist] = useState({});

    const handleAdd = () => {
        if (mode) {
            axios.post('scientists/create', newScientist)
                .then(res => {
                    setScientists([...scientists, newScientist]);
                    handleCloseAddModal();
                });
        }
        else {
            axios.put(`scientists/${newScientist.id}`, newScientist)
                .then(res => {
                    let data = scientists;
                    let index = data.findIndex(item => item.id == newScientist.id);
                    data[index] = newScientist;
                    setScientists(data);
                    handleCloseAddModal();
                })
        }
    }

    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const handleCloseDeleteModal = () => setShowDeleteModal(false);
    const handleShowDeleteModal = () => setShowDeleteModal(true);
    const handleDelete = () => {
        axios.delete(`scientists/${selectedScientist.id}`)
            .then(res => {
                setScientists(scientists.filter(item => item.id !== selectedScientist.id));
                handleCloseDeleteModal();
            });
    }

    const handleChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setNewScientist({ ...newScientist, [name]: value });
    }
    const [newScientist, setNewScientist] = useState({});

    // State showAddModal cho phép ẩn/hiện modal thêm nhà khoa học
    const [showAddModal, setShowAddModal] = useState(false);
    const handleCloseAddModal = () => setShowAddModal(false);
    const handleShowAddModal = () => setShowAddModal(true);

    const [mode, setMode] = useState(true);

    return (
        <>
            <h2>Scientist List</h2>
            <Container>
                <Form>
                    <Form.Group as={Row} className="mb-3">
                        <Form.Label column sm="1">
                            Name:
                        </Form.Label>
                        <Col sm="4">
                            <Form.Control type="text" name="name" onChange={handleChageSearch} />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" >
                        <Form.Label column sm="1">
                            Nationality:
                        </Form.Label>
                        <Col sm="4">
                            <Form.Control type="text" name="nationality" onChange={handleChageSearch} />
                        </Col>
                    </Form.Group>
                    <Button variant="primary" className="mb-2" onClick={handleFilter}>
                        <FontAwesomeIcon icon={faSearch} /> Filter
                    </Button>
                    <Button variant="danger" className="mb-2" onClick={() => { setResult(scientists) }}>
                        <FontAwesomeIcon icon={faTimes} /> Back
                    </Button>
                </Form>

                <Button variant="success" style={{ marginBottom: '5px' }} onClick={() => { setMode(true); setNewScientist({}); handleShowAddModal() }}>
                    <FontAwesomeIcon icon={faPlus} /> Add Scientist
                </Button>

                <Table className="table-light">
                    <thead className="table-dark">
                        <tr>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Birth Place</th>
                            <th>Nationality</th>
                            <th>Date Of Birth</th>
                            <th>Date Of Death</th>
                            <th>Biography</th>
                            <th>Quote</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            result.map(item =>
                                <>
                                    <tr key={item.id}>
                                        <td>
                                            <Image className="w-100" src={`http://127.0.0.1:8000${item.image}`} />
                                        </td>
                                        <td>{item.name}</td>
                                        <td>{item.birth_place}</td>
                                        <td>{item.nationality}</td>
                                        <td>{item.date_of_birth}</td>
                                        <td>{item.date_of_death}</td>
                                        <td>{item.biography}</td>
                                        <td>{item.quote}</td>
                                        <td>
                                            <Button variant="warning" style={{ marginBottom: '5px' }}
                                                onClick={() => { setMode(false); setNewScientist(item); setSelectedScientist(item); handleShowAddModal() }}>
                                                <FontAwesomeIcon icon={faPen} />
                                            </Button>
                                            <Button variant="danger" style={{ marginBottom: '5px', marginRight: '5px' }}
                                                onClick={() => { setSelectedScientist(item); handleShowDeleteModal() }}>
                                                <FontAwesomeIcon icon={faTimes} />
                                            </Button>
                                        </td>
                                    </tr>
                                </>
                            )
                        }
                    </tbody>
                </Table>
            </Container>
            <Modal show={showAddModal} centered onHide={handleCloseAddModal}>
                <Modal.Header closeButton>
                    <Modal.Title> {mode ? 'Add new scientist' : 'Edit'}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Name:</Form.Label>
                            <Form.Control type="text" name="name" value={newScientist.name} onChange={handleChange} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                            <Form.Label>Birth Place:</Form.Label>
                            <Form.Control type="text" name="birth_place" value={newScientist.birth_place} onChange={handleChange} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
                            <Form.Label>Nationality:</Form.Label>
                            <Form.Control type="text" name="nationality" value={newScientist.nationality} onChange={handleChange} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput4">
                            <Form.Label>Date of birth:</Form.Label>
                            <Form.Control type="text" name="date_of_birth" value={newScientist.date_of_birth} onChange={handleChange} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput5">
                            <Form.Label>Date of death:</Form.Label>
                            <Form.Control type="number" name="date_of_death" value={newScientist.date_of_death} onChange={handleChange} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput6">
                            <Form.Label>Biography:</Form.Label>
                            <Form.Control type="text" name="biography" value={newScientist.biography} onChange={handleChange} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput7">
                            <Form.Label>Quote:</Form.Label>
                            <Form.Control type="text" name="quote" value={newScientist.quote} onChange={handleChange} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput8">
                            <Form.Label>Image:</Form.Label>
                            <Form.Control type="text" name="image" value={newScientist.image} onChange={handleChange} />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Modal.Footer>
                        <Button variant="success" onClick={handleAdd}>
                            <FontAwesomeIcon icon={faCheck} /> Save
                        </Button>
                        <Button variant="secondary" onClick={handleCloseAddModal}>
                            <FontAwesomeIcon icon={faTimes} /> Cancel
                        </Button>
                    </Modal.Footer>
                </Modal.Footer>

            </Modal >
            <Modal show={showDeleteModal} onHide={handleCloseDeleteModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Confirm delete</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you sure you want to delete scientist: {selectedScientist.name}?</Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={handleDelete}>
                        <FontAwesomeIcon icon={faCheck} /> Confirm
                    </Button>
                    <Button variant="secondary" onClick={handleCloseDeleteModal}>
                        <FontAwesomeIcon icon={faTimes} /> Cancel
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );

};

export default AdminScientistList;