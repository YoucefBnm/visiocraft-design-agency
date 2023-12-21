import { useState } from "react";

export function useSetAlert () {
    const [alert, setAlert] = useState({ show: false, text: '', type: ''})

    const showAlert = (text, type) => setAlert({ show: true, text: text, type: type}) 
    const hideAlert = () => setAlert({ show: false, text: '', type: ''})

    return {
        alert,
        showAlert,
        hideAlert
    }
}