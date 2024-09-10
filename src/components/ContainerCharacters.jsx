import React from 'react';

export const ContainerCharacters = ({ characters, nextPage, previousPage }) => {
    return (
        <div style={{
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            minHeight: '100vh',
            padding: '20px'
        }}>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {
                    characters &&
                    characters.map((char) => (
                        <div key={char.id} className="col">
                            <div className="card" style={{ width: '18rem' }}>
                                <img 
                                    src={char.image} 
                                    className="card-img-top" 
                                    alt={char.name} 
                                />
                                <div className="card-body">
                                    <h5 className="card-title">{char.name}</h5>
                                </div>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">Estado: {char.status}</li>
                                    <li className="list-group-item">Género: {char.gender}</li>
                                    <li className="list-group-item">Origen: {char.origin.name}</li>
                                </ul>
                               
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className="d-flex justify-content-between m-3">
                <button className="btn btn-success" onClick={previousPage}>Anterior</button>
                <button className="btn btn-success" onClick={nextPage}>Siguiente</button>
            </div>
        </div>
    );
}
