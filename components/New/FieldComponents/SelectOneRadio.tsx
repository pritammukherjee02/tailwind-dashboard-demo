import React from 'react'

interface Props {
    choices: Array<string>
}

interface RadioOptionProps {
    name: string,
    label: String
}

function SelectOneRadio({ choices }: Props) {
  return (
    <div className="space-y-2">
        {choices.map(choice => <RadioOption name={choice} label={choice} />)}
    </div>
  )
}

const RadioOption = ({ name, label }: RadioOptionProps) => (
    <div className="flex items-center">
        <input
            id={name}
            name={name}
            type="radio"
            className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
        />
        <label htmlFor={name} className="ml-3 block text-sm font-medium text-gray-700">
            {label}
        </label>
    </div>
)

export default SelectOneRadio