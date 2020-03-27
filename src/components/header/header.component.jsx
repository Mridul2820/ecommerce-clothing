import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from "../../firebase/firebase.utils";


import './header.styles.scss';

const Header = ({ currentUser }) => (
    <div className="header">
        <Link to="/" className="logo-container" >
            <Logo className="logo"/>
        </Link>
        <div className="options">
            <Link className="option" to="/shop">
                Shop
            </Link>
            <Link className="option" to="/Contact">
                Contact
            </Link>
            {
                currentUser ?
                <div className="option" onClick={() => auth.signOut()}>Sign Out</div>
                :
                <Link className="option" to="/signin">
                    Sign In
                </Link>
            }
        </div>
    </div>
)

const mapStateToProps = state => ({
    currentUser : state.user.currentUser
})

export default connect(mapStateToProps)(Header);