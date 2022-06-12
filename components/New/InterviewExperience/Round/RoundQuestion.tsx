import React, { useState } from 'react'

//Field Components
import ComboBox from '../../FieldComponents/ComboBox'
import TextMultilineField from '../../FieldComponents/TextMultilineField'

interface Props {
  problemNumber: any
}

function RoundQuestion({ problemNumber }: Props) {
	const [problemType, setProblemType] = useState('Coding Problem')

	const questionSetMarkup = problemType != null ? (problemType == 'Coding Problem') ? (
		<div className='col-span-6 grid grid-cols-6 gap-6'>
			{/* CODING PROBLEM TYPE */}

			<div className="col-span-6">
				<TextMultilineField description={`Provide proper problem statement or reference link from geeks for geeks or other sources. Ex- Given an array A[] consisting of N integers, you have to find total number of subsequences of this array.`} name={`problem-${problemNumber}-statement`} label='Problem Statement' rows={5} placeholder='' defaultValue='' />
			</div>

			<div className="col-span-6">
				<TextMultilineField description="Ex - Step 1 : I first applied bubble sort. It was not good enough." name={`problem-${problemNumber}-solution-steps`} label='Can you explain stepwise how you solved this problem?' rows={5} placeholder='' defaultValue='' />
				<p className="text-sm text-gray-500">
					Step 2 : Interviewer asked me to optimise the solution.<br/>
					Step 3 : Then i gave solution with merge sort and interviewer was happy.
				</p>
			</div>

			<div className="col-span-6">
				<TextMultilineField description='' name={`problem-${problemNumber}-cornercases`} label='Important Corner Cases for this problem(Please specify - this will be very helpful for us)' rows={5} placeholder='' defaultValue='' />
			</div>

		</div>
	) : (
		<div className='col-span-6 grid grid-cols-6 gap-6'>
			{/* ALL OTHER PROBLEM TYPES */}

			<div className="col-span-6">
				<TextMultilineField description={`What are semaphores?`} name={`problem-${problemNumber}-description`} label='Problem Description/s' rows={5} placeholder='' defaultValue='' />
				<p className="text-sm text-gray-500">
					What is virtual memory?
				</p>
			</div>

			<div className="col-span-6">
				<TextMultilineField description="Tip 1 : Read Galvin for OS thoroughly." name={`problem-${problemNumber}-tips`} label='Tips/Answers for Solving these Problem/Problems' rows={5} placeholder='' defaultValue='' />
				<p className="text-sm text-gray-500">
					Tip 2: Do practice for SQL queries.
				</p>
			</div>

		</div>
	) : <></>


  return (
	<div className="md:grid md:grid-cols-3 md:gap-6">

		<div className="mt-5 md:mt-0 md:col-span-3">
			<div className="shadow overflow-hidden sm:rounded-md">
				<div className="px-4 py-5 bg-gray-100 sm:p-6">
					<h3 className='font-bold text-base mb-4'>Problem {problemNumber}</h3>

					<div className="grid grid-cols-6 gap-6">

						<div className="col-span-6">
							<ComboBox setState={setProblemType} labelTag='Problem Type' name={`problem-${problemNumber}-type`} autoComplete={`problem-${problemNumber}-type`} optionsArray={['Coding Problem', 'Puzzle', 'System Design', 'Operating System', 'DBMS']} />
						</div>

						{questionSetMarkup}

					</div>
				</div>
				<div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
					<button
					type='button'
					className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md mr-2 text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
					>
						Remove Problem
					</button>
				</div>
			</div>
		</div>
	</div>
  )
}

export default RoundQuestion