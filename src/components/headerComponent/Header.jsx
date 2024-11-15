import React from 'react';
import './Header.css'
const Header = () => {
    return (
        <>
        <header>
            <div className="navbar-logo">
                <a href="#">
                <img src="../../../public/logo/logo.jpg" alt="logo"></img></a>
            </div>
            <div className="navbar-container">
                <div className="navbar-text">
                    <h2>Chia sẻ đam mê CNTT</h2>
                </div>
            <div className="navbar-search">
                <input type="text" id="search-input" placeholder="Tìm kiếm khóa học..."></input>
            </div>
            <ul>
                <li><a href="#">Đăng ký</a></li>
                <li><a className="login" href="#">Đăng nhập</a></li>
            </ul>
            </div>
        </header>
        </>
    );
};

export default Header;
