export default function Textarea({
  id,
  label,
  placeholder,
  required,
  classes,
}: {
  id: string;
  label: string;
  placeholder: string;
  required: boolean;
  classes?: string;
}) {
  return (
    <div className={classes}>
      <label className="block mb-2" htmlFor={id}>
        {label}
      </label>
      <textarea
        id={id}
        name={id}
        placeholder={placeholder}
        required={required}
        className="text-xl md:text-2xl xl:text-3xl xl:leading-normal placeholder:text-white/50 pb-3 border-b border-b-white/20 focus:outline-none text-white w-full md:h-16 rounded-none bg-transparent resize-none"
      />
    </div>
  )
}