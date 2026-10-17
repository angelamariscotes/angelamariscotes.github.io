import { useState } from "react";
import { Link } from "react-router"
import toast from 'react-hot-toast';
import { FiCheck, FiCopy } from "react-icons/fi";

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

const inputClass = "w-full border border-line bg-white/30 px-4 py-3 text-sm outline-none transition-colors placeholder:text-[#99978f] focus:border-ink focus:bg-white/50"

const SCRIPT = import.meta.env.VITE_GOOGLE_SCRIPT_URL;

export default function Contact() {
  const [isLoading, setIsLoading] = useState(false);
  const [copied, setCopied] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true)
    try {
      await fetch(SCRIPT, {
        method: 'POST',
        body: JSON.stringify(formData),
      });
      toast.success('Message sent successfully!');

    } catch (error) {
      console.error('Something went wrong...', error);
      toast.error('Failed to send message.');
      setIsLoading(false)
    } finally {
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
      setIsLoading(false)
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText("mariscotesangela@gmail.com");
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch (error) {
      console.error("Failed to copy:", error);
    }
  };

  return (
    <>    <main className="mx-auto min-h-screen max-w-[1540px] overflow-hidden">

      <section className="border-b border-[#3d3d37] bg-[#24241f] px-7 py-14 text-paper md:px-12 md:py-20 lg:px-16">
        <p className={`font-mono text-[10px] uppercase tracking-[0.08em] mb-6 text-[#aaa99f]`}>Contact</p>
        <h1 className="text-white m-0 max-w-[720px] text-[clamp(40px,5vw,68px)] leading-[1.02] font-medium tracking-[-0.05em]">
          Let&apos;s make something useful.
        </h1>
        <p className="mt-7 mb-0 max-w-[560px] text-sm leading-7 text-[#b8b7af]">
          Tell me a little about what you&apos;re working on. I usually reply
          within one or two working days.
        </p>
      </section>

      <section className="grid border-b border-line lg:grid-cols-[.85fr_1.35fr]">
        <div className="border-b border-line px-7 py-12 md:px-12 lg:border-r lg:border-b-0 lg:px-16 lg:py-16">
          <div>
            <p className={`font-mono text-[10px] uppercase tracking-[0.08em] mt-0 mb-8`}>Get in touch</p>
            <dl className="m-0 space-y-7">
              <div>
                <dt className={`font-mono text-[10px] uppercase tracking-[0.08em] mb-2 text-muted`}>Email</dt>
                <dd className="m-0 text-sm">
                  <button
                    type="button"
                    onClick={handleCopy}
                    className="inline-flex cursor-pointer items-center gap-2 border-b border-line pb-1 transition-colors hover:border-ink"
                    aria-label={copied ? "Copied" : "Copy to clipboard"}
                  >
                    <span>mariscotesangela@gmail.com</span>

                    <span className="relative flex h-4 w-4 items-center justify-center">
                      <FiCopy
                        size={14}
                        className={`absolute transition-all duration-200 ${copied
                            ? "scale-50 rotate-12 opacity-0"
                            : "scale-100 rotate-0 opacity-100"
                          }`}
                      />
                      <FiCheck
                        size={14}
                        className={`absolute text-green-600 transition-all duration-200 ${copied
                            ? "scale-100 rotate-0 opacity-100"
                            : "scale-50 -rotate-12 opacity-0"
                          }`}
                      />
                    </span>
                  </button>
                </dd>
              </div>
              <div>
                <dt className={`font-mono text-[10px] uppercase tracking-[0.08em] mb-2 text-muted`}>Location</dt>
                <dd className="m-0 text-sm">Manila, Philippines</dd>
              </div>
            </dl>
          </div>

          <div className="mt-14 border-t border-line pt-8">
            <p className={`font-mono text-[10px] uppercase tracking-[0.08em] mt-0 mb-5`}>Elsewhere</p>
            <div className="flex gap-6 text-sm">
              <a
                className="border-b border-transparent pb-1 transition-colors hover:border-ink"
                href="https://github.com/angelamariscotes"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                className="border-b border-transparent pb-1 transition-colors hover:border-ink"
                href="https://www.linkedin.com/in/angela-mariscotes-404990286/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        <div className="px-7 py-12 md:px-12 lg:px-16 lg:py-16">
          <div className="mb-8 flex items-end justify-between gap-6">
            <div>
              <p className={`font-mono text-[10px] uppercase tracking-[0.08em] mt-0 mb-3 text-muted`}>
                Project enquiry
              </p>
              <h2 className="m-0 text-[clamp(26px,3vw,38px)] leading-tight font-medium tracking-[-0.035em]">
                Send a message
              </h2>
            </div>
            <span className={`font-mono text-[10px] uppercase tracking-[0.08em] hidden text-muted sm:block`}>
              All fields required
            </span>
          </div>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid gap-6 sm:grid-cols-2">
              <label className="block">
                <span className={`font-mono text-[10px] uppercase tracking-[0.08em] mb-2.5 block`}>
                  Your name
                </span>
                <input
                  className={inputClass}
                  name="name"
                  type="text"
                  autoComplete="name"
                  placeholder="Jane Doe"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </label>
              <label className="block">
                <span className={`font-mono text-[10px] uppercase tracking-[0.08em] mb-2.5 block`}>Your email</span>
                <input
                  className={inputClass}
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="jane@example.com"
                  required
                />
              </label>
            </div>

            <label className="block">
              <span className={`font-mono text-[10px] uppercase tracking-[0.08em] mb-2.5 block`}>Subject</span>
              <input
                className={inputClass}
                name="subject"
                type="text"
                placeholder="Project enquiry"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </label>

            <label className="block">
              <span className={`font-mono text-[10px] uppercase tracking-[0.08em] mb-2.5 block`}>Message</span>
              <textarea
                className={`${inputClass} min-h-36 resize-y`}
                name="message"
                placeholder="A few details about the project, timeline, and what you need help with..."
                value={formData.message}
                onChange={handleChange}
                required
              />
            </label>

            <button
              className="group relative flex w-full cursor-pointer items-center justify-between overflow-hidden border border-transparent bg-ink px-5 py-4 text-left text-paper transition-colors duration-200 hover:border-paper disabled:cursor-not-allowed"
              type="submit"
              disabled={isLoading}
            >
              <span className="font-mono text-[10px] uppercase tracking-[0.08em]">
                {isLoading ? "SENDING..." : "SEND MESSAGE"}
              </span>

              <span className="relative flex h-5 w-8 items-center justify-center">
                {isLoading ? (
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="absolute h-5 w-5 animate-[plane-fly_1.2s_ease-in-out_infinite]"
                    aria-hidden="true"
                  >
                    <path
                      d="m22 2-8 20-5-7-7-5 20-8Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M22 2 9 15"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                ) : (
                  <Arrow className="w-4 transition-transform group-hover:translate-x-1" />
                )}
              </span>
            </button>
          </form>
        </div>
      </section>

      <footer className="flex items-center justify-between gap-6 px-7 py-8 md:px-12 lg:px-16">
        <span className={`font-mono text-[10px] uppercase tracking-[0.08em] text-muted`}>© 2025 — Manila</span>
        <Link
          className="flex items-center gap-3 text-xs font-medium"
          to="/"
        >
          Back to Home <Arrow className="w-4 rotate-180" />
        </Link>
      </footer>
    </main>
    </>
  )
}
