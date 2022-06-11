import React from 'react'

interface Props {
    name: string,
    autoComplete: string,
    labelTag?: String,
    optionsArray: Array<string>,
    setState?: any
}

function ComboBox({ name, autoComplete, labelTag, optionsArray, setState }: Props) {
  return (
    <div>
        <label htmlFor={name} className="block font-semibold text-sm text-gray-700">
            {labelTag}
        </label>

        <select
            id={name}
            name={name}
            onChange={(e) => {setState(e.target.value)}}
            autoComplete={autoComplete}
            className="mt-1 text-base py-[15px] px-[20px] rounded-[15px] block w-full border border-gray-300 bg-white shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        >
            {optionsArray.map(option => <option>{option}</option>)}
        </select>
    </div>
  )
}

export default ComboBox