import React, { useState } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'

//Components
import Header from '../components/Header'
import DashboardBody from '../components/DashboardBody'
import TailwindFloatingAccent from '../components/TailwindFloatingAccent'

const Dashboard: NextPage = () => {
  const [showSearch, setShowSearch] = useState(false)

  const toggleSearch = () => {
    setShowSearch(!showSearch)
  }

  return (
    <div className='min-h-screen font-inter'>
        <Head>
            <title>Tailwind Dashboard Demo</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <TailwindFloatingAccent />
        <Header toggleSearch={toggleSearch} />

        <DashboardBody showSearch={showSearch} />
    </div>
  )
}

export default Dashboard