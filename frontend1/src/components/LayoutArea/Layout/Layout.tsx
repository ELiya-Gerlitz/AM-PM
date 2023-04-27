import Header from "../Header/Header";
import NavBar from "../NavBar/NavBar";
import Routing from "../Routing/Routing";
import "./Layout.css";

function Layout(): JSX.Element {
    return (
        <div className="Layout">
            <header>
                <Header/>
            </header>
            <aside>
            <NavBar/>
            </aside>
            <main>
                <Routing/>
            </main>
            <footer>

            </footer>
			
        </div>
    );
}

export default Layout;
