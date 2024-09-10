export const reqCharacteres = async (offset = 0, limit = 20, searchTerm = '', speciesFilter = '') => {
    let api_url = `https://rickandmortyapi.com/api/character/?page=${offset / limit + 1}`;

    if (searchTerm) {
        api_url += `&name=${searchTerm}`;
    }
    
    if (speciesFilter) {
        api_url += `&species=${speciesFilter}`;
    }

    const resp = await fetch(api_url);
    const data = await resp.json();

    return data;
};