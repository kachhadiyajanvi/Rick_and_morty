import './App.css';
import { useEffect, useState } from "react";
import axios from 'axios';
import { Col, Container, Row, Spinner } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaCircle } from "react-icons/fa6";
import logo from "./image/logo.PNG";
import info2 from "./image/info1.jpg";
import info1 from "./image/info2.jpg";
import { FaGithub, FaTwitter, FaHeart } from "react-icons/fa";
import { PiBracketsAngleBold } from "react-icons/pi";

function App() {
  let [data, setdata] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/character')
      .then(function (response) {
        // handle success
        console.log(response.data.results);
        setdata(response.data.results);
        setLoading(false);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
        setLoading(false);
      })
  }, [])
  return (
    <div className="App">
      {
        loading ?
          (
            <div className='flex'>
              <Spinner animation="border" variant="dark" />
            </div>
          ) :
          (
            <>
              <header>
                <Container>
                  <div className='header'>
                    <div className='header_logo'>
                      <img src={logo}></img>
                    </div>

                    <ul className='Main_menu'>
                      <li>Docs</li>
                      <li>About</li>
                      <a href='#' className='theme_btn'> Support Us</a>
                    </ul>
                  </div>

                  <Row>
                    <Col><h1 className='heading'>The Rick and Morty API</h1></Col>
                  </Row>
                </Container>
              </header>
              <div className='bgcolor'>
                <Container>
                  <Row>
                    <Col>
                      <div className='spacer'>
                        <div className='main_details'>
                          {
                            data.map((ele, ind) => {
                              return (
                                <div className='single_details' key={ind}>
                                  <div className='single_img'>
                                    <img src={ele.image}></img>
                                  </div>
                                  <div className='single_info'>
                                    <h3>{ele.name}</h3>
                                    <div>
                                      <p><FaCircle className='circle' style={{ color: ele.status === "Alive" ? 'green' : (ele.status === "unknown" ? 'gray' : 'red') }}></FaCircle>{ele.status} - {ele.species}</p>
                                    </div>
                                    <div className='location'>
                                      <span>Last known location:</span>
                                      <p>{ele.origin.name}</p>
                                    </div>
                                    <div className='location'>
                                      <span>First seen in:</span>
                                      <p>{ele.location.name}</p>
                                    </div>
                                  </div>
                                </div>
                              )
                            })
                          }
                        </div>
                      </div>
                    </Col>
                  </Row>
                </Container>
              </div>
              <footer>
                <div className='bggray'>
                  <center className='spacer'>
                    <div className='footer_info'>
                      <ul className='footer_menu'>
                        <li>
                          <a href='#'>CHARACTERS: 826</a>
                        </li>
                        <li>
                          <a href='#'>CHARACTERS: 826</a>
                        </li>
                        <li>
                          <a href='#'>CHARACTERS: 826</a>
                        </li>
                      </ul>
                      <div className='footer_status'>
                        <h4>SERVER STATUS</h4><div className='status_icon'></div>
                      </div>
                      <div className='f_logo'>
                        <div className='one1'>
                          <div className='img_f'>
                            <img src={info1}></img>
                          </div>
                          <div className='one11'>
                            <p className='DEPLOYS'>DEPLOYS BY</p>
                            <p className='netlify'>netlify</p>
                          </div>
                        </div>
                        <div className='one1'>
                          <div className='img_f'>
                            <img src={info2}></img>
                          </div>
                          <div className='one11'>
                            <p className='DEPLOYS'>POWERED BY</p>
                            <p className='netlify'>Stellate</p>
                          </div>
                        </div>
                      </div>
                      <ul className='footer_icons'>
                          <li>
                            <a href='#'><i><FaGithub></FaGithub></i></a>
                          </li>
                          <li>
                            <a href='#'><i><FaTwitter></FaTwitter></i></a>
                          </li>
                          <li>
                            <a href='#'><i><FaHeart ></FaHeart></i></a>
                          </li>
                        </ul>

                      <div className='footer_last'>
                        <span><i><PiBracketsAngleBold></PiBracketsAngleBold></i> by</span> <a href='#'>Axcel Fuhemann</a> <span>2024</span>
                      </div>
                    </div>
                  </center>
                </div>
              </footer>

            </>
          )
      }

    </div>
  );
}

export default App;
