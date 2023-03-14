function Character(character) {
    // return <h3>Character</h3>;

    // display API information
    return(
       <div className="col-3">
         <img src={character.image} alt={character.name}
        width='300' className="card-img-top" />
        <div className="card-body">
            <div className="card">
                <h3 className="card-title">{character.name}</h3>
                <p>{'Origin: ${character.origin && character.origin.name}'}</p>
            </div>
        </div>
       </div>
    )
  };
  export default Character;