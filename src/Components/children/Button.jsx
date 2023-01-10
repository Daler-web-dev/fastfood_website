const Button = (props) => {
	return (
		<button
			{...props}
			className="bg-[#DF6751] rounded-[43px] text-white hover:bg-[#202020] ease-in duration-300 py-[10px] px-[20px] font-medium"
		>
			{props.children}
		</button>
	);
};

export default Button;
