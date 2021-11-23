import api from "../../../services/api";
import { addDigimons } from "./actions";


const addDigimonsThunk = (digimon, setError, notify) => (dispatch) => {
    api.get(`name/${digimon}`)
    .then((response)=> dispatch(addDigimons((response.data[0]))))
    .catch((_) => {
        setError(true)
        notify()
    })

}
export default addDigimonsThunk