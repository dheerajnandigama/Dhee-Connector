import React, { Fragment } from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from 'mdbreact';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import dev from '../../img/dev.jpg';

const FooterPage = ({ isAuthenticated }) => {
  return (
    <Fragment>
      {!isAuthenticated && (
        <MDBFooter
          style={{ backgroundColor: '#202020', color: 'white' }}
          className='font-small pt-4'
        >
          <MDBContainer fluid className='text-center text-md-left'>
            <MDBRow>
              <MDBCol md='6'>
                <h5 className='title'>Students Connector</h5>
                <hr style={{ color: 'white', backgroundColor: 'white' }}></hr>
                <p>
                  A web application which is used to connect students and help
                  them by sharing their questions and solutions. Students can
                  add a profile/portfolio in which they can add their experience
                  and education.
                </p>
                <br />
                <p>
                  This online application helps students to connect via this
                  platform and post their questions and solutions , discuss the
                  problem in discussion block. Therefore making communication
                  easier.
                </p>
              </MDBCol>
              <MDBCol md='2'>
                <h5 className='title' style={{ marginLeft: '45px' }}>
                  Links
                </h5>
                <hr style={{ color: 'white', backgroundColor: 'white' }}></hr>
                <ul>
                  <Link className='nav-link Active' to='/'>
                    Home
                  </Link>
                  <Link className='nav-link Active' to='/register'>
                    Register{' '}
                  </Link>
                  <Link className='nav-link Active' to='/login'>
                    Login
                  </Link>
                </ul>
              </MDBCol>
              <MDBCol md='4'>
                <h5 className='title' style={{ marginLeft: '45px' }}>
                  Reach Us
                </h5>
                <hr style={{ color: 'white', backgroundColor: 'white' }}></hr>
                <MDBRow>
                  <MDBCol md='4' style={{ textalign: 'center' }}>
                    <span style={{ aligncontent: 'center' }}>
                      <i class='fab fa-instagram'></i>{' '}
                      <a href='https://www.instagram.com/dheeraj_nandigama/'>
                        Instgram
                      </a>
                    </span>
                    <br />
                    <br />
                    <span>
                      <i class='fab fa-facebook-square'></i>{' '}
                      <a href='https://www.facebook.com'>Facebook</a>
                    </span>
                    <br />
                    <br />
                    <span>
                      <i class='fab fa-twitter-square'></i>{' '}
                      <a href='https://twitter.com'>Twiter</a>
                    </span>
                  </MDBCol>
                  <MDBCol md='6' style={{ textalign: 'center' }}>
                    <span>
                      <img
                        src={dev}
                        alt='developer'
                        height='190px'
                        width='150px'
                      />
                      <br />
                      <br />
                      <h5>Dheeraj Nandigama</h5>
                    </span>
                  </MDBCol>
                </MDBRow>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
          <hr style={{ color: 'white', backgroundColor: 'white' }}></hr>
          <div className='footer-copyright text-center py-3'>
            <MDBContainer fluid>
              &copy; {new Date().getFullYear()} Copyright: dheeraj_nandigama
              {/* <a href="https://www.mdbootstrap.com"> MDBootstrap.com </a> */}
            </MDBContainer>
          </div>
          <hr style={{ color: 'white', backgroundColor: 'white' }}></hr>
        </MDBFooter>
      )}
    </Fragment>
  );
};

FooterPage.propTypes = {
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(FooterPage);
