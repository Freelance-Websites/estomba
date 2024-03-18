interface Stat {
  unit?: string;
  number: string;
  description: string;
}

const Stats = ({ stats }: Array<Stat>) => {
  console.log(stats)
  return (
    <section
      className="col-span-full"
      data-scroll-section
    >
    </section>
  )
}

export default Stats;