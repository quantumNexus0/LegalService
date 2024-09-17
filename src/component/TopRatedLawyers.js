// import React, { useState } from 'react';
// import { Carousel, Container, Row, Col, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is imported
import React from 'react';
import { Carousel, Card, Button } from 'react-bootstrap';
function TopRatedLawyers() {
  // const [index, setIndex] = useState(0);

  // const handleSelect = (selectedIndex, e) => {
  //   setIndex(selectedIndex);
  // };

  // const lawyers = [
  //   {
  //     category: 'Divorce',
  //     name: 'Advocate Sudershani Ray',
  //     rating: 4.6,
  //     reviews: '100+ user',
  //     location: 'Kailash Hills, Delhi',
  //     experience: 17,
  //     areas: 'Divorce + 3 more',
  //     image: 'https://via.placeholder.com/350x200' // Add image URL here
  //   },
  //   {
  //     category: 'Family',
  //     name: 'Advocate Rajesh K.S',
  //     rating: 4.7,
  //     reviews: '100+ user',
  //     location: 'Subedar Chatram Road (SC Road), Bangalore / Bengaluru',
  //     experience: 18,
  //     areas: 'Family + 3 more',
  //     image: 'https://via.placeholder.com/350x200' // Add image URL here
  //   },
  //   {
  //     category: 'Civil',
  //     name: 'Advocate Ricky Chopra',
  //     rating: 4.7,
  //     reviews: '50+ user',
  //     location: 'Sector - 49, Gurgaon / Gurugram',
  //     experience: 23,
  //     areas: 'Civil + 3 more',
  //     image: 'https://via.placeholder.com/350x200' // Add image URL here
  //   },
  // ];

  return (
    <>

    
    {/* <Container className="mt-5 mb-5">
      <h2 className="text-center mb-4 p-5">Top-rated lawyers in India</h2>
      <Carousel activeIndex={index} onSelect={handleSelect} variant="dark">
        {lawyers.map((lawyer, i) => (
          <Carousel.Item key={i}>
            <Row className="justify-content-center align-items-center min-vh-50">
              <Col xs={12} md={8} lg={6} className="d-flex justify-content-center">
                <div className="card shadow-sm" style={{ width: '100%', maxWidth: '250px' }}>
                  <img
                    src={lawyer.image}
                    alt={lawyer.name}
                    className="card-img-top"
                    style={{ width: '100%', height: 'auto' }} // Make image responsive
                  />
                  <div className="card-body">
                    <h5 className="card-title">{lawyer.name}</h5>
                    <div className="rating mb-2">
                      <span className="fa fa-star checked"></span>
                      <span className="fa fa-star checked"></span>
                      <span className="fa fa-star checked"></span>
                      <span className="fa fa-star checked"></span>
                      <span className="fa fa-star"></span>
                      <span className="ml-2">{lawyer.rating}</span>
                      <span className="ml-2">|</span>
                      <span className="ml-2">{lawyer.reviews}</span>
                    </div>
                    <ul className="list-unstyled mb-3">
                      <li>
                        <span className="fa fa-map-marker-alt mr-2"></span>
                        {lawyer.location}
                      </li>
                      <li>
                        <span className="fa fa-suitcase mr-2"></span>
                        {lawyer.experience} years Experience
                      </li>
                    </ul>
                    <p className="card-text mb-3">
                      PRACTICE AREAS: {lawyer.areas}
                    </p>
                    <Button variant="primary">
                      View more {lawyer.category} Lawyers
                    </Button>
                  </div>
                </div>
              </Col>
            </Row>
          </Carousel.Item>
        ))}
      </Carousel>
    </Container> */}
    <div className="container mt-5">
      <h2 className="text-center mb-5 p-5">Legal Services by Lawyers from LawRato</h2>
      <Carousel>
        {/* Slide 1 */}
        <Carousel.Item>
          <div className="row">
            <div className="col-md-4 mb-4">
              <Card className="h-100">
                <Card.Body>
                  <Card.Title>Sexual Harassment Complaint</Card.Title>
                  <Card.Text>File a complaint against sexual harassment in India</Card.Text>
                  <Card.Text>
                    Obtain quick legal advice online from LawRato's verified lawyers to file a sexual
                    harassment complaint or to defend yourself against false allegations made in violation
                    of IPC 354A.
                  </Card.Text>
                  <Button variant="primary">View Details</Button>
                </Card.Body>
              </Card>
            </div>
            <div className="col-md-4 mb-4">
              <Card className="h-100">
                <Card.Body>
                  <Card.Title>Cruelty Against Woman</Card.Title>
                  <Card.Text>Steps to prove cruelty against women</Card.Text>
                  <Card.Text>
                    File a domestic violence complaint or defend yourself in a false DV case with legal
                    help from LawRato's network of experienced lawyers.
                  </Card.Text>
                  <Button variant="primary">View Details</Button>
                </Card.Body>
              </Card>
            </div>
            <div className="col-md-4 mb-4">
              <Card className="h-100">
                <Card.Body>
                  <Card.Title>Contested Divorce</Card.Title>
                  <Card.Text>One sided divorce and its process in India</Card.Text>
                  <Card.Text>
                    Connect with a divorce lawyer at LawRato to file a divorce petition or obtain expert
                    legal guidance on one-sided divorce.
                  </Card.Text>
                  <Button variant="primary">View Details</Button>
                </Card.Body>
              </Card>
            </div>
          </div>
        </Carousel.Item>

        {/* Slide 2 */}
        <Carousel.Item>
          <div className="row">
            <div className="col-md-4 mb-4">
              <Card className="h-100">
                <Card.Body>
                  <Card.Title>Child Custody</Card.Title>
                  <Card.Text>Understand the process of obtaining child custody in India</Card.Text>
                  <Card.Text>
                    Get legal advice on filing for child custody or defending yourself in custody disputes with LawRato's lawyers.
                  </Card.Text>
                  <Button variant="primary">View Details</Button>
                </Card.Body>
              </Card>
            </div>
            <div className="col-md-4 mb-4">
              <Card className="h-100">
                <Card.Body>
                  <Card.Title>Property Dispute</Card.Title>
                  <Card.Text>Resolve property disputes with expert legal assistance</Card.Text>
                  <Card.Text>
                    Seek help from LawRato's experienced lawyers for property disputes, including inheritance and ownership issues.
                  </Card.Text>
                  <Button variant="primary">View Details</Button>
                </Card.Body>
              </Card>
            </div>
            <div className="col-md-4 mb-4">
              <Card className="h-100">
                <Card.Body>
                  <Card.Title>Employment Dispute</Card.Title>
                  <Card.Text>Legal support for employment-related issues</Card.Text>
                  <Card.Text>
                    Get expert legal advice for employment disputes, including wrongful termination and workplace harassment.
                  </Card.Text>
                  <Button variant="primary">View Details</Button>
                </Card.Body>
              </Card>
            </div>
          </div>
        </Carousel.Item>

        {/* Slide 3 */}
        <Carousel.Item>
          <div className="row">
            <div className="col-md-4 mb-4">
              <Card className="h-100">
                <Card.Body>
                  <Card.Title>Bankruptcy</Card.Title>
                  <Card.Text>Understand the process of declaring bankruptcy</Card.Text>
                  <Card.Text>
                    Connect with LawRato's lawyers to understand the bankruptcy process and get legal help for financial recovery.
                  </Card.Text>
                  <Button variant="primary">View Details</Button>
                </Card.Body>
              </Card>
            </div>
            <div className="col-md-4 mb-4">
              <Card className="h-100">
                <Card.Body>
                  <Card.Title>Immigration Issues</Card.Title>
                  <Card.Text>Get help with immigration and visa problems</Card.Text>
                  <Card.Text>
                    Obtain legal assistance for immigration-related issues including visa applications and deportation cases.
                  </Card.Text>
                  <Button variant="primary">View Details</Button>
                </Card.Body>
              </Card>
            </div>
            <div className="col-md-4 mb-4">
              <Card className="h-100">
                <Card.Body>
                  <Card.Title>Consumer Protection</Card.Title>
                  <Card.Text>File complaints and seek redressal</Card.Text>
                  <Card.Text>
                    Seek legal help for consumer rights issues, including product defects and service complaints.
                  </Card.Text>
                  <Button variant="primary">View Details</Button>
                </Card.Body>
              </Card>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
    </>
    
  );
}

export default TopRatedLawyers;


