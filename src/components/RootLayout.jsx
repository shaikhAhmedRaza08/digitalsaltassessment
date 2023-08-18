import React from 'react'
import NavBar from './NavBar'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

function RootLayout() {
    return (
        <>
            <NavBar />
            <main>
                <Outlet />
            </main>
            {/* <Footer /> */}
        </>
    )
}

export default RootLayout