import { Route, Routes } from "react-router-dom";
import { Navbar } from "./componenets/Navbar";
import { AuthContextProvider } from "./context/AuthContext";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Signup } from "./pages/Signup";
import { Account } from "./pages/Account";
import { ProtectedRoute } from "./componenets/ProtectedRoute";

function App() {
    return (
        <>
            <AuthContextProvider>
                <Navbar />
                <Routes>
                    <Route path='/' element={<Home />}></Route>
                    <Route path='/login' element={<Login />}></Route>
                    <Route path='/signup' element={<Signup />}></Route>
                    <Route path='/account' element={<ProtectedRoute><Account /></ProtectedRoute>}></Route>
                </Routes>
            </AuthContextProvider>
        </>
    );
}
export default App