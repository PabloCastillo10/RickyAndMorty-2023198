import { useState, useEffect } from "react";

export const BuscarCharacters = ({ onSearch, onFilterSpecies }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleInputChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleSearch = () => {
        onSearch(searchTerm);
    };

    const handleFilterSpecies = (species) => {
        onFilterSpecies(species);
    };

    return (
        <div className="">
            <input
                type="text"
                placeholder="Buscar personaje"
                className="form-control"
                value={searchTerm}
                onChange={handleInputChange}
            />
            <button className="btn btn-info mt-2" onClick={handleSearch}>Buscar</button>

            <div className="dropdown mt-3">
                <button className="btn btn-info dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Filtrar Por Especie
                </button>
                <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#" onClick={() => handleFilterSpecies('Alien')}>Alien</a></li>
                    <li><a className="dropdown-item" href="#" onClick={() => handleFilterSpecies('Humano')}>Humano</a></li>
                    <li><a className="dropdown-item" href="#" onClick={() => handleFilterSpecies('Robot')}>Robot</a></li>
                    <li><a className="dropdown-item" href="#" onClick={() => handleFilterSpecies('unknown')}>Desconocido</a></li>
                </ul>
            </div>
        </div>
    );
};