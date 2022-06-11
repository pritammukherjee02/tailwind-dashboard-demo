import React, { useEffect, useState } from 'react'
import Link from 'next/link'

//FieldComponents
import TextInputField from '../FieldComponents/TextInputField'
import ComboBox from '../FieldComponents/ComboBox'
import SelectOneRadio from '../FieldComponents/SelectOneRadio'
import TextMultilineField from '../FieldComponents/TextMultilineField'
import RoundQuestion from './Round/RoundQuestion'

interface Props {
    round: any,
    total: any
}

function Round({ round, total }: Props) {
	const [questionNumbersArr, setQuestionNumbersArr] = useState([1])
	const addQuestionNumber = () => {
		const tempArr = questionNumbersArr
		tempArr.push(questionNumbersArr[questionNumbersArr.length - 1] + 1)
		setQuestionNumbersArr([...tempArr])
	}

  return (
    <div className='max-w-[712px] px-3 lg:px-0 flex flex-col justify-center mx-auto'>
        <div className='flex justify-between py-4'>
            <h1 className='font-semibold text-xl tracking-[-0.3px]'>Interview Experience | Round {round}</h1>

            <a href='/' className='text-sm px-3 cursor-pointer py-2 font-medium opacity-60'>Cancel</a>
        </div>

		<div className="bg-white mb-4">
			<div className="md:grid md:grid-cols-3 md:gap-6">
				{/* <div className="md:col-span-1">
					<div className="px-4 sm:px-0">
						<h3 className="text-lg font-medium leading-6 text-gray-900">Personal Information</h3>
						<p className="mt-1 text-sm text-gray-600">Use a permanent address where you can receive mail.</p>
						<p className='mt-1 text-body'>Use a permanent address where you can receive mail.</p>
					</div>
				</div> */}

				<div className="mt-5 md:mt-0 md:col-span-3">
					<form action="#" method="POST">
						<div className="shadow overflow-hidden sm:rounded-md">
							<div className="px-4 py-5 bg-white sm:p-6">
								<div className="grid grid-cols-6 gap-6">

									<div className="col-span-6 sm:col-span-3">
										<ComboBox labelTag='Round Type' name='round-type' autoComplete='round-type' optionsArray={['Online - MCQ + Coding Round', 'Telephonic', 'Face to Face', 'Video Call', 'HR Round', 'Group Discussion', 'Assignment', 'Subjective Test - Pen and Paper', 'Online Subjective Coding Test']} />
									</div>

									<div className="col-span-6 sm:col-span-3">
										<TextInputField description='' type='text' name='dateOfRound' autoComplete='dateOfRound' labelTag='Date Of Round(approx.)' />
									</div>

									<div className="col-span-6 sm:col-span-3">
										<ComboBox labelTag='Difficulty Of Round' name='round-difficulty' autoComplete='round-difficulty' optionsArray={['Easy', 'Medium', 'Hard']} />
									</div>

									<div className="col-span-6 sm:col-span-3">
										<TextInputField description='Ex - 50 minutes, 90 minutes' type='text' name='roundDuration' autoComplete='roundDuration' labelTag='Duration Of Round(in minutes)' />
									</div>

									<div className="col-span-6 sm:col-span-3">
										<ComboBox labelTag='Topic of Round' name='round-topic' autoComplete='round-topic' optionsArray={['Data Structures', 'System Design', 'OS/DBMS', 'Problem Solving']} />
									</div>

									<div className="col-span-6">
										<TextMultilineField description={`Please specify the following : -`} name='round-description' label='Description Of Round' rows={5} placeholder='' defaultValue='' />
                                        <p className="text-sm text-gray-500">
											Timing( was it late night)<br/>
											How was the environment?<br/>
											Any other significant activity<br/>
											How the interviewer was? (If it was there any interview)<br/>
                                        </p>
									</div>

									<div className="col-span-6 sm:col-span-3">
										<TextInputField description='Skype, Google Doc, Code Share etc.' type='text' name='mediumOfInterview' autoComplete='mediumOfInterview' labelTag='Medium Of Interview' />
									</div>

									<div className="col-span-6">
										<TextMultilineField description="Ex - I feel i was not able to give optimized approaches. That's why i was rejected." name='passing-or-rejection-reason' label='Why were you passed/rejected for this round?' rows={5} placeholder='' defaultValue='' />
									</div>

									{/* THE PROBLEMS WILL GO HERE */}
									<div className='col-span-6'>
										<h3 className='text-subheading'>Problems Data</h3>

										<p className='mt-1 mb-5 text-sm font-medium'>Please specify each problem in detail with proper statement or references.<br/>This is the major contribution for your interview experience.</p>

										<QuestionSection questionNumbersArr={questionNumbersArr} />

										<button
											onClick={addQuestionNumber}
											type='button'
											className="inline-flex justify-center mt-4 cursor-pointer py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
										>
											Add a question
										</button>
									</div>

								</div>
							</div>

							<div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
								<Link href={(round == 1) ? '/new/interviewexperience/numberofrounds' : `/new/interviewexperience/round/${Number(round)-1}?total=${total}`}>
									<button
										className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md mr-2 text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
									>
										Back
									</button>
								</Link>

								<Link href={(round == total) ? '/explore' : `/new/interviewexperience/round/${Number(round)+1}?total=${total}`}>
									<button
										type="submit"
										className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
									>
										{(round == total) ? 'Submit' : 'Next'}
									</button>
								</Link>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
    </div>
  )
}

interface QSProps {
	questionNumbersArr: Array<any>
}

const QuestionSection = ({ questionNumbersArr }: QSProps) => {
	return (
		<div className='flex flex-col gap-3'>
			{questionNumbersArr.map((index) => <RoundQuestion problemNumber={index} />)}
		</div>
	)
}

export default Round