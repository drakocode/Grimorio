import { useState } from 'react';
import '../../styles/BirthdateSearch.styles.css';

const BirthdateSearch = ({ onSearch, placeholder = "Pesquisar por mês/zodíaco..." }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch(value);
  };

  const handleClear = () => {
    setSearchTerm('');
    onSearch('');
  };

  return (
    <div className="birthdate-search-container">
      <div className="search-title font-mono">// SEARCH_BY_BIRTHDATE</div>

      <div className="search-input-wrapper">
        <input
          type="text"
          value={searchTerm}
          onChange={handleChange}
          placeholder={placeholder}
          className="birthdate-search-input font-mono"
        />
        {searchTerm && (
          <button
            onClick={handleClear}
            className="search-clear-btn"
            aria-label="Limpar pesquisa"
          >
            ✕
          </button>
        )}
      </div>

      <div className="search-help-text font-mono">
        Ex: "Áries", "Janeiro", "5°", "20° Gêmeos"
      </div>
    </div>
  );
};

export default BirthdateSearch;
