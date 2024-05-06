import React, { useState } from 'react';
import App from './App';

export const multiStepContext = React.createContext();
const UserContext = () => {

    const [userData, setUserData] = useState([]);
    const [finalData, setFinalData] = useState([]);

    const submitData = () => {
        setFinalData(finalData => [...finalData, userData]);
        setUserData("");
    }

    return (
            <multiStepContext.Provider value={{ userData, setUserData, finalData, setFinalData, submitData }} >
                <App />
            </multiStepContext.Provider>
    );
}

export default UserContext;