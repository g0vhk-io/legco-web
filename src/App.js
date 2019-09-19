import React, { Fragment, useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Card from 'react-bootstrap/Card';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import {Typeahead} from 'react-bootstrap-typeahead'; 
import 'react-bootstrap-typeahead/css/Typeahead.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


class CustomNavBar extends React.Component {
    constructor(props) {
      super(props);
      this.state = {members: []}
    }

    componentDidMount() {
      this.getMembers();
    }

    async getMembers() {
      const response = await fetch('https://api.g0vhk.io/legco/councils/');
      const json = await response.json();
      let party = ''
      
      const members = json[0]['members'];
      console.log(members);
      this.setState({members:members})
    }

    render() {
      return (
        <Navbar bg="light">
          <Navbar.Brand href="#home">立法會議員資料庫</Navbar.Brand>
          <Typeahead
            align="right"
            labelKey="name_ch"
            options={this.state.members}
            placeholder="議員名字"
            renderMenuItemChildren={(option, props) => (<div><img width="40" src={"https://g0vhk.io" + option.image}/>&nbsp;{option.name_ch}</div>)}
          />
        </Navbar>
        );

    }
}


function App() {
  return (
    <div className="App">
      <header className="App-header">
        {<CustomNavBar />}
        <Container fluid={true}>
          <Row>&nbsp;</Row>
          <Row>
            <Col><Link to="/nteast"><Button variant="primary" block size="lg">新界東</Button></Link></Col>
            <Col><Link to="/ntwest"><Button variant="secondary" block size="lg">新界西</Button></Link></Col>
          </Row>
          <Row>&nbsp;</Row>
          <Row>
            <Col><Link to="/kleast"><Button variant="success" block size="lg">九龍東</Button></Link></Col>
            <Col><Link to="/klwest"><Button variant="warning" block size="lg">九龍西</Button></Link></Col>
          </Row>
          <Row>&nbsp;</Row>
          <Row>
            <Col><Link to="/island"><Button variant="danger" block size="lg">港島</Button></Link></Col>
            <Col><Link to="/fc"><Button variant="info" block size="lg">功能</Button></Link></Col>
          </Row>
        </Container>
      </header>
    </div>
  );
}


class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {members: []}
  }

  componentDidMount() {
    this.getMembers();
  }

  async getMembers() {
    const response = await fetch('https://api.g0vhk.io/legco/council/2016/' + this.props.type);
    const json = await response.json();
    let party = ''
    
    const members = json;
    console.log(members);
    this.setState({members:members})
  }

  render() {
    return (
       <div>
          <Container fluid={true}>
            <Breadcrumb>
              <Breadcrumb.Item><Link to="/">議員</Link></Breadcrumb.Item>
              <Breadcrumb.Item>
                {this.props.title}
              </Breadcrumb.Item>
            </Breadcrumb>
          <div>
            {this.state.members.map(member => 
              <Link to={"/member/" + member.member.id}>
              <Card style={{'padding':'4pt'}}>
              <div style={{'display': 'flex'}}>
              
                  <div><img variant="primary" src={"https://g0vhk.io" + member.member.image} width="80"/></div>
                  <div><Card.Body>
                    <Card.Title>{member.member.name_ch} {member.member.ma}</Card.Title>
                    <Card.Subtitle>{member.member.party ? member.member.party.name_ch : "獨立"}</Card.Subtitle>
                  </Card.Body></div>
              </div>
              </Card>
              </Link>
            )}
          </div>
          </Container>
      </div>
    
    );
  }
}


class Detail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {member: {}}
  }

  componentDidMount() {
    this.getMember();
  }

  async getMember() {
    const { memberId } = this.props.match.params
    const response = await fetch('https://api.g0vhk.io/legco/individual/' + memberId);
    const json = await response.json();
    let party = ''
    this.setState({member:json})
  }

  render() {
  const { member } = this.state;
  return (
    <div>
      <Container fluid={true}>
        <Breadcrumb>
          <Breadcrumb.Item><Link to="/">議員</Link></Breadcrumb.Item>
          <Breadcrumb.Item>
            新界東
          </Breadcrumb.Item>
        </Breadcrumb>
      <div>
          <Card style={{'padding':'4pt'}}>
          <div style={{'display': 'flex'}}>
          
              <div><img variant="primary" src={"https://g0vhk.io" + member.image} width="80"/></div>
              <div><Card.Body>
                <Card.Title>{member.name_ch} &nbsp;&nbsp; {member.present / (member.present + member.absent) * 100 }</Card.Title>
                <Card.Subtitle>{member.party && member.party.name_ch}</Card.Subtitle>
              </Card.Body></div>
          </div>
          </Card>
          <Tabs defaultActiveKey="vote" id="uncontrolled-tab-example">
            <Tab eventKey="vote" title="投票">
            </Tab>
            <Tab eventKey="speech" title="發言">
            </Tab>
            <Tab eventKey="question" title="質詢">
            </Tab>
            <Tab eventKey="news" title="新聞">
            </Tab>
          </Tabs>
      </div>
      </Container>


    </div>);
  }
}


function NTWList() {
  return (<List type="NTW" title="新界西"/>);
}

function NTEList() {
  return (<List type="NTE" title="新界東"/>);
}

function KLWList() {
  return (<List type="KLW" title="九龍西"/>);
}

function KLEList() {
  return (<List type="KLE" title="九龍東"/>);
}

function IslandList() {
  return (<List type="ISLAND" title="港島"/>);
}

function FCList() {
  return (<List type="FC" title="功能"/>);
}




function AppRouter() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div>
        <Route path="/" exact component={App} />
        <Route path="/nteast" exact component={NTEList} />
        <Route path="/ntwest" exact component={NTWList} />
        <Route path="/kleast" exact component={KLEList} />
        <Route path="/klwest" exact component={KLWList} />
        <Route path="/island" exact component={IslandList} />
        <Route path="/fc" exact component={FCList} />
        <Route path="/member/:memberId" exact component={Detail} />
      </div>
    </Router>    
  );
}

export default AppRouter;
