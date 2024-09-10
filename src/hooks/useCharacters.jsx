import { useEffect, useState } from "react";
import { reqCharacteres } from "../services/characters";

export const useCharacters = () => {
    const [characters, setCharacters] = useState([]);
    const [offset, setOffset] = useState(0);
    const [limit] = useState(20);
    const [searchTerm, setSearchTerm] = useState('');
    const [speciesFilter, setSpeciesFilter] = useState('');

    useEffect(() => {
        reqCharacteres(offset, limit, searchTerm, speciesFilter).then(data => {
            setCharacters(data.results || []);
        });
    }, [offset, limit, searchTerm, speciesFilter]);

    const fetchNextPage = () => {
        setOffset(prevOffset => prevOffset + limit);
    };

    const fetchPreviousPage = () => {
        if (offset > 0) {
            setOffset(prevOffset => prevOffset - limit);
        }
    };

    const searchCharacters = (term) => {
        setSearchTerm(term);
        setOffset(0);
        setSpeciesFilter(''); 
    };

    const filterBySpecies = (species) => {
        setSpeciesFilter(species);
        setOffset(0);
        setSearchTerm(''); 
    };

    return {
        characters,
        fetchNextPage,
        fetchPreviousPage,
        searchCharacters,
        filterBySpecies
    };
};