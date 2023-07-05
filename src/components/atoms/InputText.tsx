import React, { HTMLInputTypeAttribute, memo } from 'react'
import { UseFormRegister } from 'react-hook-form'

export interface InputTextPropsInterface extends React.ComponentPropsWithoutRef<'input'> {
  inputName: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register: UseFormRegister<any>
  required?: boolean
  type?: HTMLInputTypeAttribute
  defaultValue?: string | number
}

const InputText = ({
  inputName,
  register,
  defaultValue,
  required = false,
  type,
  ...rest
}: InputTextPropsInterface) => (
  <input
    {...register(inputName, { required })}
    type={type}
    defaultValue={defaultValue}
    className="w-full border border-solid border-slate-300 bg-slate-200 px-3 py-2"
    {...rest}
  />
)

export default memo(InputText)
