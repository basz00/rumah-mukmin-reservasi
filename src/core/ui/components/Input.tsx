type Props = {
  hasError?: boolean;
} & React.InputHTMLAttributes<HTMLInputElement>;

const Input = ({ hasError, ...rest }: Props) => {
  return (
    <input
      className={`bg-white leading-[1.5715] py-[6.5px] px-[11px] border border-solid rounded-md outline-0 focus:outline-1 hover:outline-1 text-black min-w-0 max-w-full w-full sm:w-auto ${
        hasError
          ? "border-red-500 focus:border-[#ff4d4f] hover:border-[#ff4d4f] outline-red-200"
          : "border-gray-300 focus:border-[#49bf1f] hover:border-[#49bf1f] outline-green-200"
      }`}
      {...rest}
    />
  );
};

export default Input;
