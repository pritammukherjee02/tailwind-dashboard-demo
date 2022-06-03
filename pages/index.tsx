import React from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'

//Components
import Header from '../components/Header'
import DashboardBody from '../components/DashboardBody'
import TailwindFloatingAccent from '../components/TailwindFloatingAccent'

const Dashboard: NextPage = () => {
  return (
    <div className='min-h-screen'>
        <Head>
            <title>Tailwind Dashboard Demo</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <TailwindFloatingAccent />
        <Header />

        <DashboardBody />
    </div>
  )
}

export default Dashboard