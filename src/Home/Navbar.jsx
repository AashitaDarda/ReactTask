import { Outlet, Link } from "react-router-dom";

const Home = () => {
    return(
        <>
            <nav className="navbar fixed-top navbar-expand-lg ">
                <div className="container">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link mx-3 text-warning"  to='/'>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link mx-3 text-warning" to="/calculator">Calculator</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link mx-3 text-warning" to="/TicTacToe">TicTacToe</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link mx-3 text-warning" to="/TodoList">ToDoList</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link mx-3 text-warning" to="/Api">Api</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link mx-3 text-warning" to="/SignIn">SignIn</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link mx-3 text-warning" to="/LogIn">LogIn</Link>
                            </li>
                        </ul>
                    </div>
                </div>    
            </nav>

            <Outlet />
        </>
    )
}

export default Home