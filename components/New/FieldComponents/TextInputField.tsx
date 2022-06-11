import React from 'react'

interface Props {
    name: string,
    autoComplete: string,
    labelTag: String,
    type: string,
	description: String,
    setState?: any
}

function TextInputField({ name, autoComplete, labelTag, description, type = 'text', setState = () => {} }: Props) {
  return (
    <div className='text-body'>
        <label htmlFor={name} className="block text-sm font-semibold text-gray-700">
            {labelTag}
        </label>
        <input
            type={type}
            name={name}
            id={name}
            onChange={(e) => {setState(e.target.value)}}
            autoComplete={autoComplete}
            className="mt-1 text-base py-[15px] px-[20px] focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-[15px]"
        />
        <p className="mt-2 text-sm text-gray-500">
            {description}
        </p>
    </div>
  )
}

export default TextInputField