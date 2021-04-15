import Image from 'next/Image'

// export async function getStaticProps() {
//     const res = await fetch('https://www.rajko.com.au/graphql?query={posts{nodes{id,title,content,featuredImage{node{mediaItemUrl}}}}}')
//     const data = await res.json()

//     return {
//         props: { blogPosts: data.data.posts.nodes }
//     }
// }

const Blog = ({ blogPosts }) => {
    return (
        <div className='container'>
            <spacer />
            <h1 className='center'>Blog</h1>
            {/* <div className='posts'>            
                {blogPosts.map(post => (
                    <div className='post' key={post.id}>
                        <Image className="post-image"
                            src={post.featuredImage.node.mediaItemUrl}
                            alt="Blog Post Image"
                            width={640}
                            height={360}
                        />
                        <h3 className='postTitle'>{post.title}</h3>
                        <button className='primary-button'>Read More</button>
                    </div>
                ))}
            </div> */}
        </div>   
    );
}

export default Blog;