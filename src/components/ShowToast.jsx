import React, { useEffect, useState } from 'react'

function ShowToast({ messages }) {
    const [visible, setVisible] = useState(true);
    const [toasts, setToasts] = useState([]);

    const handleClose = () => {
        setVisible(false);
    };


    const hideToast = () => {
        setVisible(false);
        setTimeout(() => {
            setToasts(toasts.slice(1));
            displayNextToast();
        }, 300);
    };

    const displayNextToast = () => {
        if (toasts.length > 0) {
            setVisible(true);
            setTimeout(() => {
                hideToast();
            }, toasts[0].duration || 7000);
        }
    };


    const resetTimer = () => {
        if (visible && toasts.length > 0) {
            clearTimeout(toasts[0].timerId);
            toasts[0].timerId = setTimeout(() => {
                hideToast();
            }, toasts[0].duration || 7000);
        }
    };



    useEffect(() => {
        // if (visible) {
        //     const timer = setTimeout(() => {
        //         handleClose();
        //     }, 3000); // Adjust the delay to match the animation duration
        //     return () => clearTimeout(timer);
        // }
        if (messages?.length > 0) {
            setToasts([...toasts, ...messages]);
            if (!visible) {
                displayNextToast();
            }
        }
    }, [displayNextToast, messages, toasts, visible]);

    return (
        <div className={`toast-notification ${visible ? 'fade-in' : 'fade-out'}`}>
            {
                toasts.map((toast, index) => (
                    <>
                        <div
                            key={index}
                            className="toast"
                            onMouseEnter={resetTimer}
                            onMouseLeave={resetTimer}
                        >
                            <div className="message">{toast.message}</div>
                            <button className="close-button" onClick={handleClose}>
                                X
                            </button>
                        </div>
                    </>
                ))
            }
        </div>
    )
}

export default ShowToast