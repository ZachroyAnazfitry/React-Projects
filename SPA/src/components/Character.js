function Character(character) {
    // return <h3>Character</h3>;

    // display API information
    return(
       <div>
         <h3>{character.name}</h3>
        <img src={character.image} alt={character.name}
        width='300' />
        <p>{'Origin: ${character.origin && character.origin.name}'}</p>
       </div>


    )
  };
  export default Character;