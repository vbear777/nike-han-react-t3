const Button = ({ label, icon: Icon }) => {
    return (
        <button className="flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none bg-red rounded-full text-white border-purple-dark">
            {label}

            {Icon && <Icon className="w-5 h-5" />}
        </button>
    )
}

export default Button;