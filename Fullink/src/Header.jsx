import './Header.css'

function Header(){
    return(
        <header>
            <div>
                <button className='home'>Home</button>
                <button>Features</button>
                <button>Pricing</button>
                <button>FAQs</button>
                <button>About</button>
            </div>
            
        </header>
    )
}

export default Header;