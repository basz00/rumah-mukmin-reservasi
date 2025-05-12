import { ReactNode } from "react";
import RequiredLabel from "./RequiredLabel";

type Props = {
  label?: string;
  hint?: string;
  required?: boolean;
  error?: string;
  children: ReactNode;
};

const Field = ({ label, hint, required, error, children }: Props) => {
  const renderLabel = () => {
    if (label) {
      if (required) {
        return <RequiredLabel label={label} />;
      }
      return (
        <h5 className="text-[13px] text-black m-0 whitespace-normal break-words">
          {label}
        </h5>
      );
    }
    return null;
  };

  const renderHint = () => {
    if (hint) {
      return (
        <h5 className="text-[13px] text-gray-500 m-0 whitespace-normal break-words">
          {hint}
        </h5>
      );
    }
    return null;
  };

  const renderError = () => {
    if (error) {
      return (
        <h5 className="text-[13px] text-red-500 m-0 whitespace-normal break-words">
          {error}
        </h5>
      );
    }
    return null;
  };

  return (
    <div className="w-auto flex flex-col">
      <div className="w-auto flex gap-1">{renderLabel()}</div>
      {children}
      {renderError()}
      {renderHint()}
    </div>
  );
};

export default Field;
