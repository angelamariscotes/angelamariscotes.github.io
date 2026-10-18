import { Link } from "react-router";
import { FiCode, FiTerminal, FiLayers, FiArrowRight, FiGithub, FiMail, FiMapPin, FiCpu } from "react-icons/fi";


const Arrow = ({ className = "" }) => (
  <svg
    className={className}
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="1.4"
    aria-hidden="true"
  >
    <path d="M3 8h9M8.5 4.5 12 8l-3.5 3.5" />
  </svg>
)

const Pin = () => (
  <svg
    className="w-[22px] shrink-0 self-start"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="1.4"
    aria-hidden="true"
  >
    <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
    <circle cx="12" cy="10" r="2.5" />
  </svg>
)

const services = [
  { title: "Frontend engineering", description: "React, TypeScript, accessible interfaces" },
  { title: "Backend development", description: "APIs, Laravel, data architecture" },
  { title: "System design", description: "Scalable products, clear foundations" },
];

const steps = [
  { number: "01", title: "Requirements", description: "Product scope and technical requirements" },
  { number: "02", title: "System design", description: "App flow, architecture, and database schema" },
  { number: "03", title: "Implementation", description: "Development plan and feature breakdown" },
];

function Block({ id, label, heading, children }) {
  return (
    <div
      id={id}
      className="grid gap-8 border-t border-line px-7 py-12 first:border-t-0 md:px-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] lg:gap-[clamp(32px,5vw,72px)] lg:px-[clamp(28px,3.5vw,56px)] lg:py-[clamp(48px,5vw,72px)]"
    >
      <div>
        <p className="mb-4 font-mono text-xs uppercase tracking-[0.08em] text-muted">{label}</p>
        <h3 className="max-w-[16ch] text-[clamp(22px,3.4vw,38px)] font-medium tracking-[-0.03em]">{heading}</h3>
      </div>
      <div>{children}</div>
    </div>
  );
}

export default function App() {
  return (
    <main className="mx-auto min-h-screen max-w-[1540px] overflow-hidden">

      <section
        className="grid border-b border-line md:grid-cols-2 lg:min-h-[610px] lg:grid-cols-[minmax(0,2.08fr)_minmax(300px,.92fr)] lg:grid-rows-[1.1fr_.9fr]"
        id="top"
      >
        <div className="flex min-h-[520px] flex-col border-b border-line px-7 pt-12 pb-[42px] md:col-span-2 md:min-h-[560px] md:px-12 lg:col-span-1 lg:row-span-2 lg:min-h-[610px] lg:border-r lg:border-b-0 lg:px-[clamp(40px,4.5vw,68px)] lg:pt-[clamp(40px,5vw,72px)]">
          <p className={`font-mono text-[10px] uppercase tracking-[0.08em] m-0 text-muted`}>
            Software developer · Manila, PH
          </p>

          <h1 className="my-auto max-w-[760px] text-[clamp(44px,13.5vw,64px)] leading-[0.98] font-medium tracking-[-0.055em] sm:text-[clamp(48px,5.6vw,84px)] sm:leading-[0.95]">
            Web applications,
            <br />
            built with <em className="font-medium">care.</em>
          </h1>

          <div className="items-end justify-between gap-10 sm:flex">
            <p className="m-0 max-w-[460px] text-[14px] leading-[1.6] text-[#515049] lg:text-[clamp(14px,1.1vw,16px)]">
              I design and develop useful web products, from the interface
              people use to the systems that keep it running.
            </p>
            <a
              className="group mt-[30px] flex w-max shrink-0 items-center gap-5 border-b border-ink pb-[7px] text-xs font-semibold sm:mt-0"
              href="/contact"
            >
              Start a conversation
              <Arrow className="w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>

        <aside
          className="flex min-h-[300px] flex-col bg-[#22221e] p-7 text-[#f2f0e9] md:p-10 lg:min-h-0 lg:p-[clamp(28px,3.5vw,52px)]"
          aria-label="Availability"
        >
          <div
            className={`font-mono text-[10px] uppercase tracking-[0.08em] flex items-center gap-[9px] text-accent`}
          >
            <span className="size-[7px] rounded-full bg-current" />
            Currently available
          </div>
          <p className="my-auto max-w-[380px] text-[clamp(21px,1.8vw,28px)] leading-[1.3] font-medium tracking-[-0.025em]">
            Open to new opportunities and thoughtful projects.
          </p>
          <div
            className={`font-mono text-[10px] uppercase tracking-[0.08em] flex items-center justify-between text-[#99988f]`}
          >
            <span>Freelance</span>
            <a
              className="grid size-10 place-items-center border border-[#56564f] text-[#f2f0e9] transition-colors hover:bg-paper hover:text-ink"
              href="/contact"
              aria-label="Send an email"
            >
              <Arrow className="w-[17px]" />
            </a>
          </div>
        </aside>

        <aside
          className="flex min-h-[300px] items-end gap-[22px] border-t border-line p-7 md:border-t-0 md:border-l md:p-10 lg:min-h-0 lg:border-t lg:border-l-0 lg:p-[clamp(28px,3.5vw,52px)]"
          aria-label="Location"
        >
          <Pin />
          <div className="flex flex-col">
            <span className={`font-mono text-[10px] uppercase tracking-[0.08em] mb-3.5 text-muted`}>
              Working from
            </span>
            <strong className="text-[clamp(28px,2.6vw,40px)] leading-none font-medium tracking-[-0.05em]">
              Manila
            </strong>
            <span className="mt-[9px] text-xs text-muted">
              Philippines, GMT +8
            </span>
          </div>
        </aside>
      </section>

      <section
      >
        <Block  id="expertise" label="What I do" heading="Building web apps and making things work.">
          <ul className="divide-y divide-line">
            {services.map((item) => (
              <li key={item.title} className="py-5 first:pt-0 last:pb-0">
                <h4 className="m-0 text-lg font-medium tracking-[-0.02em]">{item.title}</h4>
                <p className="mb-0 mt-1 font-mono text-xs text-muted">{item.description}</p>
              </li>
            ))}
          </ul>
        </Block>

        <Block id="how-i-work" label="How I work" heading="From idea to implementation.">
          <ol className="grid gap-8 md:grid-cols-3 md:gap-6">
            {steps.map((item) => (
              <li key={item.number} className="border-l-1 mx-3 p-5 border-current pt-4">
                <span className="font-mono text-xs text-muted">{item.number}</span>
                <h4 className="m-0 mt-2 text-base font-medium">{item.title}</h4>
                <p className="mb-0 mt-1 text-sm leading-relaxed text-muted">{item.description}</p>
              </li>
            ))}
          </ol>
        </Block>


        {/* <div className="flex flex-col justify-center px-6 py-[30px] md:p-12 lg:p-[clamp(30px,4.5vw,68px)]">
          {disciplines.map((discipline, index) => (
            <article
              className={`grid min-h-28 grid-cols-[30px_1fr] items-center gap-[22px] border-t border-line sm:grid-cols-[48px_1fr] ${index === disciplines.length - 1 ? "border-b" : ""
                }`}
              key={discipline.number}
            >
              <span className={`font-mono text-[10px] uppercase tracking-[0.08em] text-[#85847d]`}>
                {discipline.number}
              </span>
              <div>
                <h3 className="mt-0 mb-[9px] text-[clamp(17px,1.4vw,21px)] font-medium tracking-[-0.025em]">
                  {discipline.title}
                </h3>
                <p className="m-0 font-mono text-[10px] text-muted">
                  {discipline.detail}
                </p>
              </div>
            </article>
          ))}
        </div> */}
      </section>

      <footer className="grid min-h-[260px] grid-cols-[1fr_auto] gap-[30px] bg-[#24241f] px-7 pt-11 pb-[30px] text-paper md:min-h-[280px] md:px-12 md:pt-14 lg:px-16 lg:pt-[72px]">
        <p className={`font-mono text-[10px] uppercase tracking-[0.08em] m-0 text-[#aaa99f]`}>
          Have a project in mind?
        </p>

        <a
          className="group col-span-2 flex items-center justify-between self-center border-b border-[#77766d] pb-5 text-[clamp(38px,12vw,58px)] leading-none font-medium tracking-[-0.05em] sm:text-[clamp(38px,5vw,72px)] text-white"
          href="/contact"

        >
          Get in touch
          <Arrow className="w-[0.75em] transition-transform group-hover:translate-x-1" />
        </a>
        <span
          className={`font-mono text-[10px] uppercase tracking-[0.08em] col-start-2 justify-self-end text-[#77766d]`}
        >
          © 2025 — Manila
        </span>
      </footer>
    </main>
  )
}
