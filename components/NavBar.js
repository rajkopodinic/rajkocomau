import Link from 'next/link'

const NavBar = () => {

    return (
        <nav className='navbar'>
            <div>
                <h2 className='logo'>rajkopodinic</h2>
            </div>
            <div className='navItems'>
                <Link href='/'><a className='navItem'>Home</a></Link>
                <Link href='/About'><a className='navItem'>About</a></Link>
                <Link href='/Blog'><a className='navItem'>Blog</a></Link>
                <Link href='/Contact'><a className='navItem'>Contact</a></Link>
            </div>
        </nav>
    );
}
 
export default NavBar;