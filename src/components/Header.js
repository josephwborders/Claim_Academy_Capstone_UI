import HeaderGuest from "./HeaderGuest";
import HeaderLoggedIn from "./HeaderLoggedIn";

function Header() {
    const toggleDisplay = () => {
        if (localStorage.getItem('loggedInUser')) {
            return (
				<HeaderLoggedIn />
            );
        } else {
            return (
				<HeaderGuest />
            );
        }
    }
    return (
        toggleDisplay()
    );
}

export default Header;