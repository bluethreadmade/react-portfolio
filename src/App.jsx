// Bringing in the required import from 'react-router-dom'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'

function App() {
    // The Outlet component will conditionally swap between the different pages according to the URL
    return (
        <div className="flex flex-col min-h-screen ">
            <Header />
            <main className="bg-background flex-grow pt-12">
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}

export default App
