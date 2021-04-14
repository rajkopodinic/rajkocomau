import Footer from "./Footer"
import NavBar from "./NavBar"
import {VirtualPageView} from '../lib/Functions'
import Router from 'next/router'

const Layout = ({ children }) => {
    Router.events.on('routeChangeComplete', () => VirtualPageView());
    //VirtualPageView();
    
    return ( 
        <div className='content'>
            <NavBar />
                { children }
            <Footer />
        </div>
    );
}
 
export default Layout;