import React, {useContext} from 'react';
import './App.css';
import {Provider} from './Context.jsx';
import Main from "./Component/Main.jsx";

import SeznamRezepten from "./Component/SeznamRezepten.jsx";
import AddRezept from "./Component/AddRezept.jsx";


function App() {

    return (
        <Provider>
            <Main>
                <SeznamRezepten/>
              {/*  <AddRezept/>*/}
            </Main>
        </Provider>
    );
}

export default App
