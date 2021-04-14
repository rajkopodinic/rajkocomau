import Link from "next/link";

const Footer = () => {
    return (
        <footer>
            <div className='footer'>
                <div>
                    <h2 className='logo'>rajkopodinic</h2>
                </div>
                <div className='footerItems'>
                    <strong>Sitemap</strong>
                    <ul>
                        <li><Link href='/'><a className='footerItem'>Home</a></Link></li>
                        <li><Link href='/About'><a className='footerItem'>About</a></Link></li>
                    </ul>
                </div>
            </div>
            <div className='footerLower'>
                <p>© 2021 All rights reserved - Rajko Podinic</p>
            </div>
        </footer>
        
    );
}
 
export default Footer;