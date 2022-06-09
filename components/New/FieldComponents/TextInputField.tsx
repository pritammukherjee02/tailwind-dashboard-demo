import React from 'react'

interface Props {
    name: string,
    autoComplete: string,
    labelTag: String,
    type: string,
	description: String
}

function TextInputField({ name, autoComplete, labelTag, description, type = 'text' }: Props) {
  return (
    <div className='text-body'>
        <label htmlFor={name} className="block text-sm font-medium text-gray-700">
            {labelTag}
        </label>
        <input
            type={type}
            name={name}
            id={name}
            autoComplete={autoComplete}
            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
        />
        <p className="mt-2 text-sm text-gray-500">
            {description}
        </p>
    </div>
  )
}

export default TextInputField