import { useState } from "react";
import { useDispatch } from "react-redux";
import addDigimonsThunk from "../../store/modules/digimons/thunks";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { dark } from "@mui/material/styles/createPalette";

const Search = () => {
    const [input, setInput] = useState("");
    const [error, setError] = useState(false);

    const dispatch = useDispatch();

        const notify = () => {
            toast.error('Digimon não encontrado');
        };


    const handleSearch = () => {
        dispatch(addDigimonsThunk(input, setError, notify))
        setError(false);
        setInput("");
    };

    
    return (
        <div>
            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                theme={dark}
                pauseOnHover
            />
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
      
          