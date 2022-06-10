import React, { useState } from 'react'
import Link from 'next/link'

//FieldComponents
import TextInputField from '../FieldComponents/TextInputField'
//import ComboBox from '../FieldComponents/ComboBox'
import SelectOneRadio from '../FieldComponents/SelectOneRadio'
import TextMultilineField from '../FieldComponents/TextMultilineField'

function NumberOfRounds() {
	const [numberOfRounds, setNumberOfRounds] = useState(1)

  return (
    <div className='max-w-[712px] px-3 lg:px-0 flex flex-col justify-center mx-auto'>
        <div className='flex justify-between py-4'>
            <h1 className='font-semibold text-xl tracking-[-0.3px]'>Interview Experience | Number of Rounds</h1>

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
										<TextInputField setState={setNumberOfRounds} description='Maximum 8 are allowed.' type='number' name='number-of-rounds' autoComplete='number-of-rounds' labelTag='How many rounds were there?' />
									</div>

								</div>
							</div>
							<div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
								<Link href='/new/interviewexperience/howdidyouapply'>
									<button
										className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md mr-2 text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
									>
										Back
									</button>
								</Link>

								<Link href={'/new/interviewexperience/round/1?total=' + numberOfRounds}>
									<button
										type="submit"
										className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
									>
										Next
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

export default NumberOfRounds