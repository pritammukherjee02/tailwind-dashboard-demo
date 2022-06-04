import React from 'react'
import Post from './PostsBodyContentComponents/Post'

const posts = [
    {
        title: 'Stripe',
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi quibusdam et nesciunt ratione possimus placeat eligendi, veritatis non temporibus ea, vitae assumenda perspiciatis optio iusto molestiae reiciendis itaque harum omnis consequatur. Fugiat nostrum corporis cum libero quidem et maiores possimus repellendus quas, eius error veniam nobis quo. Necessitatibus eligendi inventore cupiditate, dolore dicta natus nemo quaerat blanditiis voluptatum ad, nulla doloribus. Hic, nisi itaque placeat ipsam sequi modi ad corporis aspernatur excepturi ipsa. Animi aliquam pariatur maiores iusto debitis cumque minus, non harum atque delectus et quaerat, est, vero ea laudantium quisquam. Ipsum blanditiis dolorem non facere eius voluptatibus consectetur.",
        link: 'https://stripe.com',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1630&q=80'
    },
    {
        title: 'Slidebean',
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi quibusdam et nesciunt ratione possimus placeat eligendi, veritatis non temporibus ea, vitae assumenda perspiciatis optio iusto molestiae reiciendis itaque harum omnis consequatur. Fugiat nostrum corporis cum libero quidem et maiores possimus repellendus quas, eius error veniam nobis quo. Necessitatibus eligendi inventore cupiditate, dolore dicta natus nemo quaerat blanditiis voluptatum ad.",
        link: 'https://stripe.com',
        image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80'
    },
]

function PostsBodyContent() {
  return (
    <div className="lg:ml-[19.5rem] lg:w-6/12 overflow-y-auto">
        <main className='max-w-4xl mx-auto relative z-20 pt-10'>

            <header className='mb-10 md:flex md:items-start'>

                <div className='flex-auto max-w-4xl'>
                    <p className='mb-4 text-sm leading-6 font-medium text-sky-500'>Components</p>

                    <h1 className='text-3xl sm:text-4xl font font-black text-slate-900 tracking-[-0.018em]'>Post Component</h1>

                    <div className='font-thin tracking-[0.007em]'>

                      <p className='mt-4 text-lg text-slate-700'>The posts for different websites to explore for the developer</p>
                      <p className='mt-4 text-lg text-slate-700'>Component design showcase</p>
                    </div>
                    
                </div>

            </header>

            <section className='flex py-1 pt-4 flex-col space-y-2 justify-between items-center'>

                {posts.map((post, index) => <Post post={post} />)}

            </section>

        </main>
    </div>
  )
}

export default PostsBodyContent