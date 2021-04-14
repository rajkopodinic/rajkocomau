import styles from '../styles/Home.module.css'

const Home = () => {
    return (
        <div>
            <section className='container'>
                <spacer></spacer>
                <div className='hero'>
                    <p>Hi, my name is</p>
                    <h1>Rajko Podinic.</h1>
                    <h1>I build things for the web.</h1>

                    <smallspacer></smallspacer>
                    <p className={styles.heroDescription}>I’m a web developer based in Sydney, Australia specializing in building (and occasionally designing) exceptional websites, applications, and everything in between.</p>
                    <smallspacer></smallspacer>
                    <button className='primary-button center'>Lets Talk!</button>
                    <smallspacer></smallspacer>
                    <div className={styles.socialIcons}>
                        <p className={styles.socialIcon}>Github Icon</p>
                        <p className={styles.socialIcon}>Linkedin Icon</p>
                        <p className={styles.socialIcon}>Insta Icon</p>
                    </div>
                </div>
                <spacer></spacer>
            </section>

            
            <section className='container'>

                <h1>Projects</h1>
                <div className='section'>
                    <div>
                        <p>Image of rajko.com.au Dashboard</p>
                    </div>
        
                    <div>
                        <h2>Admin Dashboard</h2>
                        <p>I built an admin dashboard which is the backbone of this website. It's built using Firebase Authentication and Firebase Real Time Database.</p>
                        <p>The authentication allows me to keep my admin dashboard secure and the real time database allows me to create blog posts and other dynamic content which is pulled into the site via API calls.</p>
                        <button className='primary-button'>Read More</button>
                    </div>
                </div>
                <div className='section'>
                    <div>
                        <h2>YouTube Downloader</h2>
                        <p>Using the YouTube API, I created a downloader which enables you to paste in a video link from YouTube and download your chosen video.</p>
                        <p>Video formats include 360p all the way up to 1080p.</p>
                        <button className='primary-button'>Read More</button>
                    </div>

                    <div>
                        <p>Image of YouTube Downloader</p>
                    </div>
                </div>
                <div className='section'>
                    <div>
                        <p>Image of Region Search App</p>
                    </div>

                    <div>
                        <h2>Region Search App</h2>
                        <p>A recent client needed an internal tool to search for corresponding regions based on Sydney post codes and suburb names.</p>
                        <p>By entering a post code or suburb, the app spits out a list of results which match the input.</p>
                        <button className='primary-button'>Read More</button>
                    </div>
                </div>
            </section>
        </div>
    );
}
 
export default Home;