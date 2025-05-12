type Props = {
  label: string;
};

const RequiredLabel = ({ label }: Props) => {
  return (
    <div className="w-auto flex pt-0 pb-2 px-0 gap-1">
      <h5 className="text-[13px] text-red-500 m-0 whitespace-normal break-words">
        *
      </h5>
      <h5 className="text-[13px] text-black m-0 whitespace-normal break-words">
        {label}
      </h5>
    </div>
  );
};

export default RequiredLabel;
