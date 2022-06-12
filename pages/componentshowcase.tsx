import React from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'

//Components
import Header from '../components/Header'
import TailwindFloatingAccent from '../components/TailwindFloatingAccent'
import SideBar from '../components/DashboardBody/SideBar'

//Universal Components
import TextField from '../components/UniversalComponents/TextField'
import TextField2 from '../components/UniversalComponents/TextField2'
import SideNavbarLink from '../components/UniversalComponents/SideNavbarLink'
import Notification from '../components/UniversalComponents/Notification'

const Explore: NextPage = () => {
  return (
    <div className='min-h-screen font-inter tracking-[0.005rem]'>
        <Head>
            <title>Components Showcase</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <TailwindFloatingAccent />
        <Header toggleSearch={() => {}} />

        <div className='overflow-hidden'>
            <div className='max-w-[90rem] mx-auto px-4 sm:px-6 md:px-8'>

                <SideBar currentPage='none' showSearch={false} />
                <div className="lg:ml-[19.5rem] lg:w-6/12 overflow-y-auto">
                    <main className='max-w-4xl mx-auto relative z-20 pt-0 lg:pt-5'>

                        {/* All the different kinds of components */}
                        <div className='grid grid-cols-6 gap-6 p-3'>

                            <h3 className='col-span-6 text-subheading'>Input fields</h3>
                            <div className='col-span-6 sm:col-span-3'>
                                <TextField name='somename' autoComplete='some-data' labelTag='Text Style' description='' />
                            </div>
                            
                            <div className='col-span-6 sm:col-span-3'>
                                <TextField2 name='somename' autoComplete='some-data' labelTag='Text Style' description='' />
                            </div>

                            <h3 className='col-span-6 text-subheading'>Navbar links</h3>
                            <div className='col-span-6 sm:col-span-2'>
                                <SideNavbarLink labelTag='Sidebar link1' />
                            </div>
                            <div className='col-span-6 sm:col-span-2'>
                                <SideNavbarLink labelTag='Sidebar link2' />
                            </div>
                            <div className='col-span-6 sm:col-span-2'>
                                <SideNavbarLink labelTag='Sidebar link3' />
                            </div>

                            <h3 className='col-span-6 text-subheading'>Notification Breadcrumb</h3>
                            <div className='col-span-6 sm:col-span-3'>
                                <Notification />
                            </div>

                        </div>

                    </main>
                </div>

            </div>
        </div>

    </div>
  )
}

export default Explore