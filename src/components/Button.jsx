const Button = ({ label, icon: Icon, backgroundColor, textColor, borderColor, fullWidth }) => {
    return (
        <button 
            className={`relative overflow-hidden
                        flex justify-center items-center gap-2
                        px-7 py-4
                        font-montserrat text-lg leading-none
                        rounded-full
                        border
                        before:content-['']
                        before:absolute before:inset-0
                        before:bg-blood
                        before:origin-left
                        before:scale-x-0
                        before:transition-transform before:duration-300 before:ease-out
                        hover:before:scale-x-100
                        ${backgroundColor ? 
                            ` ${backgroundColor} ${textColor} ${borderColor}` : 
                            "text-white bg-red border-blood"
                        }
                        ${fullWidth && 'w-full'}
            `}>
            <span className="relative z-10">{label}</span>

            <span className="relative z-10">{Icon && <Icon className="w-5 h-5" />}</span>
        </button>
    )
}

export default Button;