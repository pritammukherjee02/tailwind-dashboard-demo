import React from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'

//Components
import TailwindFloatingAccent from '../../components/TailwindFloatingAccent'
import Header from '../../components/Header'
import NewInterviewexperience from '../../components/New/InterviewExperience/NewInterviewexperience'

const Project: NextPage = () => {
    return (
        <div className='min-h-screen font-inter tracking-[0.005rem]'>
            <Head>
                <title>New Post</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <TailwindFloatingAccent />
            <Header toggleSearch={() => {}} />

            <NewInterviewexperience />
        </div>
    )
}

export default Project