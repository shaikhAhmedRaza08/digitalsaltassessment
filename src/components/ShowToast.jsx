import React, { useEffect, useState } from 'react'

function ShowToast({ message }) {
    const [visible, setVisible] = useState(true);

    const handleClose = () => {
        setVisible(false);
    };


    useEffect(() => {
        if (visible) {
            const timer = setTimeout(() => {
                handleClose();
            }, 3000); // Adjust the delay to match the animation duration
            return () => clearTimeout(timer);
        }
    }, [visible]);

    return (
        <div className={`toast-notification ${visible ? 'visible fade-in' : 'fade-out'}`}>
            <div className="message">{message}</div>
            <button className="close-button" onClick={handleClose}>
                X
            </button>
        </div>
    )
}

export default ShowToast