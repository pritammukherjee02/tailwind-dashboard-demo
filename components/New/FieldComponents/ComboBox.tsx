import React from 'react'

interface Props {
    name: string,
    autoComplete: string,
    labelTag?: String,
    optionsArray: Array<string>
}

function ComboBox({ name, autoComplete, labelTag, optionsArray }: Props) {
  return (
    <div>
        <label htmlFor={name} className="block text-sm text-gray-700">
            {labelTag}
        </label>
        <select
            id={name}
            name={name}
            autoComplete={autoComplete}
            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        >
            {optionsArray.map(option => <option>{option}</option>)}
        </select>
    </div>
  )
}

export default ComboBox