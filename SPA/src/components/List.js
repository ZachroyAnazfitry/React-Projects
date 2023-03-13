// import { useState } from "react";
import { useEffect, useState } from "react";
import Character from "./Character";
function List() {
    // adding loading state
    const [loading, setLoading] = useState(true);
    // adding hook
    const [characters, setCharacters] = useState([]);
    useEffect(() => {
        async function fetchData(){
            const data = await fetch(
                "https://rickandmortyapi.com/api/character"
            );
            const {results} = await data.json();
            setCharacters(results);
            setLoading(false);
        }
        fetchData();
    }, [characters.length]);
    // return <h2>Characters</h2>;
    return(
        <div>
            <h2>Characters</h2>
            {/* below is html of Character component */}
            {/* <Character />
            <Character /> */}
            {loading ? (
                <div>Loading...</div>
            ) : (
                characters.map((character) => (
                    <Character
                        key={character.id}
                        name={character.name}
                        origin={character.origin}
                        image={character.image}
                    />
                ))
            )}

        </div>
    );
}
export default List;