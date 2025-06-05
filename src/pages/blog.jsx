import '../css/blog.css'
import '../css/Styles.css'

const Blog = () => {
    return(
        <>
        <section id='page-header'className='blog-header'>
            <h2>#Readmore</h2>
            <p>Read all case Studies about our products!</p>
        </section>
        
        <section id="blog">
            <div className='blog-box'>
                <div className='blog-img'>
                    <img src='/images/b9.jpg' alt=''></img>
                </div>
                <div className='blog-details'>
                    <h4>Laptops</h4>
                    <p>Learn More about the New-Gen Laptops!</p>
                    <a href='#'>CONTINUE READING</a>
                    <h1>12/04</h1>
                </div>
            </div>
            <div className='blog-box'>
                <div className='blog-img'>
                    <img src='/images/b9.jpg' alt=''></img>
                </div>
                <div className='blog-details'>
                    <h4>The Ultimate Guide to Seasonal Shopping: Trends and Tips</h4>
                    <p>Explore how seasonal changes affect consumer behavior and shopping trends. </p>
                    <a href='#'>CONTINUE READING</a>
                    <h1>13/03</h1>
                </div>
            </div> <div className='blog-box'>
                <div className='blog-img'>
                    <img src='/images/b9.jpg' alt=''></img>
                </div>
                <div className='blog-details'>
                    <h4>Navigating the World of Smart Devices: A Comprehensive Buying Guide</h4>
                    <p>The key features to consider, compatibility with existing devices, and how these products can enhance daily life.</p>
                    <a href='#'>CONTINUE READING</a>
                    <h1>20/02</h1>
                </div>
            </div> <div className='blog-box'>
                <div className='blog-img'>
                    <img src='/images/b9.jpg' alt=''></img>
                </div>
                <div className='blog-details'>
                    <h4>The Future of Electronics: Trends to Watch in 2025 and Beyond</h4>
                    <p>Explore emerging trends in the electronics industry, such as advancements in artificial intelligence, the rise of 5G technology, and the increasing importance of sustainability in product design.</p>
                    <a href='#'>CONTINUE READING</a>
                    <h1>31/01</h1>
                </div>
            </div>
        </section>
   </>
    );
};

export default Blog;

