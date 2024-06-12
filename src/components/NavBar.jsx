import MenuNav from "./MenuNav"
import NacIcons from "./NavIcons"
export default function NavBar(){
    return(
        <header id="NavBar">
            <div id="nav-title">
                <img src="https://vitejs.dev/logo.svg" alt="" />
                <span>Vite</span>
            </div>
            <div id="search-container">
                <input type="text" placeholder="Search"/>
            </div>
            <MenuNav/>
            <NacIcons/>
        </header>
    )
}