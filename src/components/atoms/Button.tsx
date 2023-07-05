import { memo } from 'react'

export type ButtonPropsInterface = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary' | 'danger'
  size?: 'sm' | 'md' | 'lg'
  fullWidth?: boolean
}

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  ...rest
}: ButtonPropsInterface) => {
  const getVariantClass = () => {
    switch (variant) {
      case 'secondary':
        return 'bg-gray-200 text-gray-800 hover:bg-gray-300 active:bg-gray-400'
      case 'danger':
        return 'bg-red-500 text-white hover:bg-red-600 active:bg-red-700'
      default:
        return 'bg-[#2D9CDB] text-white hover:bg-[#2c98d7] active:bg-blue-700'
    }
  }

  const getSizeClass = () => {
    switch (size) {
      case 'sm':
        return 'px-2 py-1 text-sm'
      case 'lg':
        return 'px-4 py-2 text-lg'
      default:
        return 'px-3 py-2 text-base'
    }
  }

  const getWidthClass = () => (fullWidth ? 'w-full' : '')

  return (
    <button
      className={`focus:shadow-outline rounded-none font-medium focus:outline-none ${getVariantClass()} ${getSizeClass()} ${getWidthClass()}`}
      {...rest}
    >
      {children}
    </button>
  )
}

export default memo(Button)
