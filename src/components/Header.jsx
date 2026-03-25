import React, { useState } from "react";



function Header({ searchTerm, setSearchTerm, isDarkTheme, setIsDarkTheme }) {
  const [showSearch, setShowSearch] = useState(false);

  return (
    <header className="header">
      
      {/* 🔍 LEFT SIDE SEARCH */}
      <div className="left-section">
        {!showSearch ? (
          <span
            className="icon"
            onClick={() => setShowSearch(true)}
          >
            🔍
          </span>
        ) : (
          <input
            type="text"
            placeholder="Search..."
            className="search-input"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            autoFocus
            onBlur={() => setShowSearch(false)}
          />
        )}
      </div>

      {/* 🏷️ TITLE */}
      <h1 className="header-title">Todo</h1>

      {/* 🎨 RIGHT SIDE THEME */}
      <div className="right-section">
        <span
          className="icon"
          onClick={() => setIsDarkTheme(!isDarkTheme)}
        >
          {isDarkTheme ? "🌙" : "☀️"}
        </span>
      </div>

    </header>
  );
}

export default Header;