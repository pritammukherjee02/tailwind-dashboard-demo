import Image from 'next/image'
import React from 'react'

interface Props {
    post: any
}

// 16, 18 - size of heading
// 14 - size of sub title
// 12 - size of body

function Post({ post }: Props) {
  return (
    <div className='w-full flex flex-col pt-4 pb-3 rounded-2xl border-[1px] bg-white border-gray-100 shadow-md'>

        <h1 className='inline-block px-3 text-subheading text-slate-900'>{post.title}</h1>

        <p className='my-2 mb-4 px-3 text-body text-slate-600'>{post.description}</p>

        <Image src={post.image} className='object-contain inline' width={690} height={388} objectFit='cover' />
        <div className='px-5 py-3 bg-gray-200'>
            <a href={post.link}>
                <p className='font-medium text-base text-slate-600 tracking-tight'>{post.title}</p>
                <p className='font-medium text-sm text-slate-500 tracking-tight'>{post.link}</p>
            </a>
        </div>

        {/* Post Actions */}
        <div className='mt-4 px-5 py-1 flex space-x-5 justify-between'>

            {/* Like */}
            <div className='hover:scale-110 cursor-pointer'>
                <svg fill='currentColor' className='text-slate-700 h-6 w-6' version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                    viewBox="0 0 51.997 51.997" xmlSpace="preserve">
                    <g>
                        <path d="M51.911,16.242C51.152,7.888,45.239,1.827,37.839,1.827c-4.93,0-9.444,2.653-11.984,6.905
                            c-2.517-4.307-6.846-6.906-11.697-6.906c-7.399,0-13.313,6.061-14.071,14.415c-0.06,0.369-0.306,2.311,0.442,5.478
                            c1.078,4.568,3.568,8.723,7.199,12.013l18.115,16.439l18.426-16.438c3.631-3.291,6.121-7.445,7.199-12.014
                            C52.216,18.553,51.97,16.611,51.911,16.242z M49.521,21.261c-0.984,4.172-3.265,7.973-6.59,10.985L25.855,47.481L9.072,32.25
                            c-3.331-3.018-5.611-6.818-6.596-10.99c-0.708-2.997-0.417-4.69-0.416-4.701l0.015-0.101C2.725,9.139,7.806,3.826,14.158,3.826
                            c4.687,0,8.813,2.88,10.771,7.515l0.921,2.183l0.921-2.183c1.927-4.564,6.271-7.514,11.069-7.514
                            c6.351,0,11.433,5.313,12.096,12.727C49.938,16.57,50.229,18.264,49.521,21.261z"/>
                    </g>
                </svg>
            </div>

            {/* Collaborate */}
            <div className='hover:scale-110 cursor-pointer'>
                <svg className='text-slate-700 h-6 w-6' viewBox="0 0 32 32" id="icon" xmlns="http://www.w3.org/2000/svg"><defs></defs><path d="M6,21V20H4v1a7,7,0,0,0,7,7h3V26H11A5,5,0,0,1,6,21Z" transform="translate(0)"/><path d="M24,11v1h2V11a7,7,0,0,0-7-7H16V6h3A5,5,0,0,1,24,11Z" transform="translate(0)"/><path d="M11,11H5a3,3,0,0,0-3,3v2H4V14a1,1,0,0,1,1-1h6a1,1,0,0,1,1,1v2h2V14A3,3,0,0,0,11,11Z" transform="translate(0)"/><path d="M8,10A4,4,0,1,0,4,6,4,4,0,0,0,8,10ZM8,4A2,2,0,1,1,6,6,2,2,0,0,1,8,4Z" transform="translate(0)"/><path d="M27,25H21a3,3,0,0,0-3,3v2h2V28a1,1,0,0,1,1-1h6a1,1,0,0,1,1,1v2h2V28A3,3,0,0,0,27,25Z" transform="translate(0)"/><path d="M20,20a4,4,0,1,0,4-4A4,4,0,0,0,20,20Zm6,0a2,2,0,1,1-2-2A2,2,0,0,1,26,20Z" transform="translate(0)"/><rect id="_Transparent_Rectangle_" data-name="&lt;Transparent Rectangle&gt;" className="fill-transparent" width="32" height="32"/></svg>
            </div>

        </div>

    </div>
  )
}

export default Post