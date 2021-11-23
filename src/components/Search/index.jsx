import { useState } from "react";
import { useDispatch } from "react-redux";
import addDigimonsThunk from "../../store/modules/digimons/thunks";

const Search = () => {
    const [input, setInput] = useState("");
    const [error, setError] = useState(false);

    const dispatch = useDispatch();

    const handleSearch = () => {
        dispatch(addDigimonsThunk(input, setError))
        setError(false);
        setInput("");
        
    };

    return (
        <div>
            <div>
                <input
                    value={input}
                    onChange={(e) => setInput(e.target.value)} 
                    placeholder="Procure seu Digimon"
                ></input>
                </div>
                <div>
                <button onClick={handleSearch}>Pesquisar</button> 
        
            </div>
        </div>
    );
};

export default Search;
      
          