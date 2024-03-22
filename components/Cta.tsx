interface CtaProps {
  label: string;
}

export default function Cta({
  label
}: CtaProps) {
  return (
    <button
      className="transition ease-in-out duration-100 hover:opacity-80 flex items-center gap-2 md:gap-4"
    >
      <span
        className="text-white text-2xl 2xl:text-3xl uppercase w-full"
      >
        {label}
      </span>
      <svg className="transform scale-75 2xl:scale-100" fill="none" height="27" viewBox="0 0 28 27" width="28" xmlns="http://www.w3.org/2000/svg">
        <path d="m27.5091 22.2218-3.7819.0248v-15.67151l-20.29383 20.29381-2.719032-2.719 20.293862-20.29384-15.6468.02472v-3.8066373h22.1477z" fill="currentColor" />
      </svg>
    </button>
  )
}