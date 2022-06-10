import React from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'

//Components
import Header from '../../../../components/Header'
import Round from '../../../../components/New/InterviewExperience/Round'

const Project: NextPage = () => {
    const router = useRouter()
    const { roundNumber, total } = router.query

    console.log('Total:' + total)

    return (
        <div className='min-h-screen bg-gray-200 font-inter tracking-[0.005rem]'>
            <Head>
                <title>New Post</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header toggleSearch={() => {}} />

            <Round round={roundNumber} total={total} />
        </div>
    )
}

export default Project