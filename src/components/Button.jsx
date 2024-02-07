const Button = ({
  label,
  iconUrl,
  backgroundColor,
  borderColor,
  textColor,
  fullWidth,
}) => {
  let buttonDynamicStyle = backgroundColor
    ? `${backgroundColor} ${borderColor} ${textColor}`
    : 'bg-coral-red border-coral-red text-white'

  buttonDynamicStyle += fullWidth && ' w-full'

  return (
    <button
      className={`flex items-center justify-center gap-2 rounded-full border px-7 py-4
      font-montserrat text-lg leading-none ${buttonDynamicStyle}`}
    >
      {label}
      {iconUrl && (
        <img src={iconUrl} alt="" className="ml-2 h-5 w-5 rounded-full" />
      )}
    </button>
  )
}

export default Button
