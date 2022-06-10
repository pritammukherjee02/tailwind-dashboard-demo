import React from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'

//Components
import Header from '../../../components/Header'
import YourPreparation from '../../../components/New/InterviewExperience/YourPreparation'

const Project: NextPage = () => {
    return (
        <div className='min-h-screen bg-gray-200 font-inter tracking-[0.005rem]'>
            <Head>
                <title>New Post</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header toggleSearch={() => {}} />

            <YourPreparation />
        </div>
    )
}

export default Project