import CartWidget from "../CartWidget/CartWidget"


const NavBar = () => {
    return (
        <nav>
            <h3>Kick's Hub</h3>
            <div>
                <button>Inicio</button>
                <button>Productos</button>
                <button>Sobre Nosotros</button>
            </div>

            <CartWidget />
        </nav>
    )
}

export default NavBar