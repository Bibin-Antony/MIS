const Button3 = ({ title }) => {
  return (
    <button className="bg-ctcSecondary text-ctcPrimary px-8 py-4 rounded-sm font-semibold tracking-wide hover:bg-ctcPrimary hover:text-ctcSecondary hover:border hover:scale-110 transition-all duration-200 ">
      {title} &gt;
    </button>
  );
};

export default Button3;
