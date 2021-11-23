import api from "../../../services/api";
import { addDigimons } from "./actions";

const addDigimonsThunk = (digimon, setError) => (dispatch) => {
    api.get(`name/${digimon}`)
    .then((response)=> dispatch(addDigimons((response.data[0]))))
    .catch((err) => setError(err))
}
export default addDigimonsThunk