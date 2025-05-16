import { ButtonHTMLAttributes, ReactNode } from "react";

type Props = {
  children: ReactNode;
  loading?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ children, loading, ...rest }: Props) => {
  return (
    <button
      className="flex self-end gap-2 items-center text-white bg-gray-800 hover:bg-gray-900  font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
      disabled={loading || rest.disabled}
      {...rest}
    >
      {loading ? "Loading..." : children}
    </button>
  );
};

export default Button;
