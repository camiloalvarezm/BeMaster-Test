interface TexFieldProps {
  title: string;
  type: string;
  required: boolean;
}

const TextField = ({ title, type, required }: TexFieldProps) => {
  return (
    <>
      <input
        type={type}
        placeholder={title}
        required={required}
        className="w-full bg-gray focus:outline-none px-6 py-3 rounded-lg"
      />
    </>
  );
};

export default TextField;
