import React from 'react'

interface Props {
    label: String,
    name: string,
    rows: number,
    placeholder: string,
    defaultValue: string,
    description: String
}

function TextMultilineField({ label, name, rows = 3, placeholder = '', defaultValue = '', description = '' }: Props) {
  return (
    <div>
        <label htmlFor={name} className="block text-sm font-medium text-gray-700">
            {label}
        </label>
        <div className="mt-1">
            <textarea
            id={name}
            name={name}
            rows={rows}
            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
            placeholder={placeholder}
            defaultValue={defaultValue}
            />
        </div>
        <p className="mt-2 text-sm text-gray-500">
            {description}
        </p>
    </div>
  )
}

export default TextMultilineField