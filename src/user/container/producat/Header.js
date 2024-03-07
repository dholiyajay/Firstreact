import React from 'react';

function Header(props) {
  const Header = ({ setSearchQuery }) => {
    const handleSearch = (e) => {
      setSearchQuery(e.target.value);
    };
    return (
      <div>
        <nav>

        </nav>
      </div>
    );
  }

}

export default Header;