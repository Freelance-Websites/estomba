import { GeistMono } from "geist/font/mono";
import { useInView } from "react-intersection-observer";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Input from "./Input";
import Select from "./Select";
import Textarea from "./Textarea";
import Cta from "./Cta";

interface OptionProps {
  availableUnits: Array<Unit>;
  selectedUnit: string | null;
}

interface Unit {
  available?: boolean;
  uf?: number;
  description?: string;
  location?: string;
  surfaceOne?: string;
  surfaceTwo?: string;
  surfaceThree?: string;
}

const Contact = ({ availableUnits, selectedUnit }: OptionProps) => {

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const myForm = event.target as HTMLFormElement;
    const formData = new FormData(myForm);
    const formDataString = new URLSearchParams(formData as any).toString();

    fetch("/__forms.html", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: formDataString,
    })
      .then(() => toast("Mensaje enviado correctamente. Nos contactaremos a la brevedad.", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        type: "success",
      
      }))
      .catch((error) => alert(error));
  };

  return (
    <section
      className="col-span-full lg:col-span-10 lg:col-start-2 bg-black w-screen px-8 lg:px-0 py-16 md:py-24 lg:py-32 xl:py-48"
      data-scroll-section
      style={{
        marginLeft: 'calc(50% - 50vw)'
      }}
      id="contacto"
    >
      <div className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-y-8 md:gap-y-16 lg:gap-y-24 xl:gap-y-32">
        {/* Title */}
        <h6
          className="flex text-white text-[19vw] font-light leading-none col-span-full lg:col-span-10 lg:col-start-2"
        >
          {"contacto".split('').map((char, index) => {
            const { ref, inView } = useInView({
              triggerOnce: true,
              threshold: 0.25,
            });
            return (
              <span
                key={index}
                ref={ref}
                className={`
                  transform w-full h-full transition ease-in-out duration-500 block text-center
                  ${!inView ? 'translate-y-full opacity-0' : 'translate-y-0 opacity-1'}
                `}
                style={{
                  transitionDelay: (index + 1) * 100 + 'ms',
                }}
              >
                {char}
              </span>
            )
          })}
        </h6>
        {/* Subtitle */}
        <div
          className="col-span-full lg:col-span-10 lg:col-start-2 px-0 lg:px-0 flex flex-col"
        >
          <div
            className="flex flex-1 items-baseline gap-8 md:gap-24"
            data-scroll
            data-scroll-speed="0.5"
          >
            <span
              className={`${GeistMono.className} text-white font-semibold text-xs`}
            >
              [04]
            </span>
            <h2
              className="font-medium text-xl text-white"
            >
              contacto
            </h2>
          </div>
          <p className="text-white md:max-w-xs mt-4 md:mt-6">
            Contactate con nosotros para conocer más sobre las unidades disponibles.
          </p>
        </div>
        {/* Form */}
        <form
          data-netlify="true"
          name="contact"
          className="col-span-full lg:col-span-10 lg:col-start-2 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-4 md:gap-8 mt-4 md:mt-8"
          method="POST"
          netlify-honeypot="bot-field"
          onSubmit={handleSubmit}
        >
          {/* Honeypot */}
          <input type="hidden" name="form-name" value="contact" />
          <input name="bot-field" className="hidden" />
          {/* Rest of the fiels */}
          <Input
            type="text"
            id="name"
            label="nombre"
            placeholder="Completá tu nombre acá"
            required={true}
          />
          <Input
            type="email"
            id="email"
            label="email"
            placeholder="Completá tu email acá"
            required={true}
          />
          <Select
            id="uf"
            label="unidad"
            required={true}
            options={availableUnits.map((unit) => unit.uf?.toString() || "")}
            selectedUnit={selectedUnit || ""}
          />
          <Textarea
            id="message"
            label="mensaje"
            placeholder="Escribí tu mensaje acá"
            required={true}
          />
          <div className="text-left col-span-full">
            <Cta
              label="Enviar consulta"
            />
          </div>
        </form>
      </div>
      <ToastContainer autoClose={5000} />
    </section>
  )
}

export default Contact;