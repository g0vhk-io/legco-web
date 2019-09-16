import React from 'react';
import {
  Card,
  CardBody,
  Col,
  Container,
  Row,
} from 'reactstrap';
import styles from './Dashboard.module.scss';
import area from 'constants/area';
import NewsCarousel from './NewsCarousel';
import SearchInput from './SearchInput';


function Dashboard({ history }) {
  return (
    <div>
      <Container fluid>
        <div className="animated fadeIn">
          <Row>
            <Col>
              <SearchInput />
            </Col>
          </Row>
        </div>
      </Container>
      <NewsCarousel />
      <Container fluid>
        <div className="animated fadeIn">
          <CardBody>
            <Row>
              {area.map(loc => (
                <Col sm={4} lg={3} xs={6} className="px-2 my-1">
                  <Card
                    className={`m-0 bg-primary text-dark text-center pointer ${styles.button}`}
                    onClick={() => { history.push('/result')}}
                    style={{ 'background-image': `url(${loc.img})`, position: 'relative' }}
                  >
                    <CardBody>
                      <div className={styles.overlay} />
                      <img src={loc.map} width="100px" />
                      <h5>{loc.label}</h5>
                    </CardBody>
                  </Card>
                </Col>
              ))}
            </Row>
          </CardBody>
        </div>
      </Container>
    </div>
  );
}

export default Dashboard;
