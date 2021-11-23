import {Switch, Route} from "react-router-dom"
import DigimonPage from "../Pages/DigimonPage"

function Routes(){
    return(
        <>
            <Switch>
                <Route exact path="/">
                    <DigimonPage/>
                </Route>
            </Switch>
            
        </>
    )
}

export default Routes