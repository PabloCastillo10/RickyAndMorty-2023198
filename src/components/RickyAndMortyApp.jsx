import { useCharacters } from "../hooks/useCharacters"
import { ContainerCharacters } from "./ContainerCharacters"
import { BuscarCharacters } from "./BuscarCharacters"

export const RickyAndMortyApp = () => {
    const { characters, fetchNextPage, fetchPreviousPage, searchCharacters, filterBySpecies } = useCharacters()

    return (
        <>
            <div className="container mt-4">
                <BuscarCharacters 
                    onSearch={searchCharacters} 
                    onFilterSpecies={filterBySpecies}
                />
                <ContainerCharacters 
                    characters={characters} 
                    nextPage={fetchNextPage} 
                    previousPage={fetchPreviousPage}
                />
            </div>
        </>
    )
}
