interface SelectProps {
  id: string;
  label: string;
  required: boolean;
  options: string[];
  selectedUnit: string;
}

export default function Select({
  id,
  label,
  required,
  options,
  selectedUnit
}: SelectProps) {
  return (
    <div>
      <label className="block mb-2 text-white text-sm" htmlFor={id}>
        {label}
      </label>
      <select
        id={id}
        name={id}
        required={required}
        className="text-xl md:text-2xl xl:text-3xl xl:leading-normal placeholder:text-white/50 pb-3 border-b border-b-white/20 focus:outline-none text-white w-full md:h-16 rounded-none bg-transparent"
      >
        {options.map((option, index) => 
          <option
            value={option}
            key={index}
            selected={option === selectedUnit}
          >
            {option}
          </option>
        )}
      </select>
    </div>
  )
}