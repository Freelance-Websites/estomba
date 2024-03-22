interface InputProps {
  type: string;
  id: string;
  label: string;
  placeholder: string;
  required: boolean;
}

export default function Input({
  type,
  id,
  label,
  placeholder,
  required,
}: InputProps) {
  return (
    <div>
      <label className="block mb-2 text-white text-sm" htmlFor={id}>
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={id}
        placeholder={placeholder}
        required={required}
        className="text-xl md:text-2xl xl:text-3xl xl:leading-normal placeholder:text-white/50 pb-3 border-b border-b-white/20 focus:outline-none text-white w-full md:h-16 rounded-none bg-transparent"
      />
    </div>
  )
}