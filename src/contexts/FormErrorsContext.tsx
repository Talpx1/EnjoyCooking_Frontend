import React, { createContext } from "react";
import { useActionData } from "react-router-dom";

export const FormErrorsContext = createContext(null);

export default function FormErrorsProvider({children}) {

    const errors = useActionData();

    return(        
        <FormErrorsContext.Provider value={errors}>
            {children}
        </FormErrorsContext.Provider>
    );
};