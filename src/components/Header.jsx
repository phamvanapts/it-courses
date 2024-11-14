import React from 'react';

const Header = () => {
    return (
        <header style={headerStyle}>
            <h1>Khóa học Công nghệ Thông tin</h1>
        </header>
    );
};

const headerStyle = {
    backgroundColor: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '10px 0'
};

export default Header;
