import React, { Component } from 'react'
import Menu from "./Menu"
import '../PageFormat.css'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export default class LR extends Component {
  render() {
    return (
        <div>
            <Menu />
            <div className='header'>
              <h5>Literacy Research</h5>
            </div>
            <div className="header">
              <h7>One possible layout:</h7>
              <ol className='list'>
                <li>
                  (Source 1)
                </li>
                <li>
                  (Source 2)
                </li>
                <li>
                  (Source 3)
                </li>
              </ol>
            </div>
            <h7 className="header">Another possible layout:</h7>
            <div className="card-list">
              <Card style={{ width: '18rem', margin: '1rem', minWidth: '18rem'}}>
                <Card.Img variant="top" src={require("../images/ColorImage.jpg")} alt="Image of color scheme" />
                <Card.Body>
                  <Card.Title>Source 1</Card.Title>
                  <Card.Text>
                    This is an template for one literary reference. 
                  </Card.Text>
                  <Card.Text>
                    Citation: 
                  </Card.Text>
                  <Button target="_blank" style={{backgroundColor: '#ef9273', color: '#0d0d0d', borderColor: '#0d0d0d'}} href="https://99designs.com/blog/tips/website-color-schemes/">
                    Go to website
                  </Button>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem', margin: '1rem', minWidth: '18rem'}}>
                <Card.Img variant="top" src={require("../images/ColorImage.jpg")} alt="Image of color scheme" />
                <Card.Body>
                  <Card.Title>Source 2</Card.Title>
                  <Card.Text>
                    This is an template for one literary reference.
                  </Card.Text>
                  <Card.Text>
                    Citation: 
                  </Card.Text>
                  <Button target="_blank" style={{backgroundColor: '#ef9273', color: '#0d0d0d', borderColor: '#0d0d0d'}} href="https://www.editorx.com/shaping-design/article/font-size">
                    Go to website
                  </Button>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem', margin: '1rem', minWidth: '18rem'}}>
                <Card.Img variant="top" src={require("../images/ColorImage.jpg")} alt="Image of color scheme" />
                <Card.Body>
                  <Card.Title>Source 3</Card.Title>
                  <Card.Text>
                    This is an template for one literary reference. 
                  </Card.Text>
                  <Card.Text>
                    Citation: 
                  </Card.Text>
                  <Button target="_blank" style={{backgroundColor: '#ef9273', color: '#0d0d0d', borderColor: '#0d0d0d'}} href="https://elementor.com/blog/font-pairing/?utm_source=google&utm_medium=cpc&utm_campaign=13060922353&utm_term=&gclid=Cj0KCQjwkOqZBhDNARIsAACsbfLhCmFjcybA_6P3AdhdRzKlXdMubkLGuXiubcUbTcAYo9mKvwsNoKUaAlIFEALw_wcB">
                    Go to website
                  </Button>
                </Card.Body>
            </Card>
          </div>
        </div>
    )
  }
}