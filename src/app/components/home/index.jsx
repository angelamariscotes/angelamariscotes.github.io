import { Link } from "react-router";
import { FiCode, FiTerminal, FiLayers, FiArrowRight, FiGithub, FiMail, FiMapPin, FiCpu } from "react-icons/fi";

export default function Home() {
  return (
    <div className="min-h-[calc(100vh-88px)] bg-[#C8C4BF] p-4 md:p-6">
      <div
        className="grid gap-4"
        style={{
          gridTemplateColumns: "repeat(12, 1fr)",
          gridTemplateRows: "auto",
        }}
      >
        <div
          className="bg-[#2B2B2B] border-[6px] border-[#1A1A1A] shadow-[8px_8px_0_0_#1A1A1A] p-8 md:p-12 flex flex-col justify-between min-h-[340px] col-span-12 md:col-span-8 row-span-2"
          style={{ position: "relative", overflow: "hidden" }}
        >
          <div
            className="absolute bottom-0 right-0 w-64 h-64 border-[8px] border-[#3D3D3D] opacity-30"
            style={{ transform: "rotate(20deg) translate(40%, 40%)" }}
          />
          <div>
            <div className="inline-block bg-[#E8E4DF] border-4 border-[#000] px-4 py-1 mb-6 shadow-[4px_4px_0_0_#000]">
              <span className="text-[#1A1A1A] tracking-[0.3em] font-black text-xs">
                SOFTWARE DEVELOPER · MANILA, PH
              </span>
            </div>
            <h1 className="text-[#E8E4DF] font-black leading-none tracking-tight mb-6" style={{ fontSize: "clamp(2.5rem, 7vw, 5.5rem)" }}>
              WEB<br />
              APPLICATION<br />
              <span className="text-[#A8A4A0]">DEVELOPMENT.</span>
            </h1>
          </div>
          <div className="flex flex-wrap gap-3 mt-8 relative z-10">
            <Link to="/contact">
              <div className="bg-[#E8E4DF] border-4 border-[#000] px-6 py-3 shadow-[4px_4px_0_0_#000] hover:shadow-[6px_6px_0_0_#000] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all flex items-center gap-2 cursor-pointer">
                <span className="text-[#1A1A1A] tracking-[0.15em] font-black text-sm">GET IN TOUCH</span>
                <FiArrowRight className="w-4 h-4 text-[#1A1A1A]" />
              </div>
            </Link>
          </div>
        </div>

        <div className="col-span-6 md:col-span-4 bg-[#1A1A1A] border-[6px] border-[#000] shadow-[8px_8px_0_0_#000] p-6 flex flex-col justify-between">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-3 h-3 bg-[#5CDB95] border-2 border-[#000] animate-pulse" />
            <span className="text-[#5CDB95] tracking-[0.2em] font-black text-xs">AVAILABLE</span>
          </div>
          <div>
            <p className="text-[#E8E4DF] font-black tracking-wider leading-tight mb-2" style={{ fontSize: "1.1rem" }}>
              OPEN TO NEW OPPORTUNITIES
            </p>
            <p className="text-[#7D7D7D] text-sm tracking-wide">
              Full-time & freelance
            </p>
          </div>
          <Link to="/contact">
            <div className="mt-4 border-4 border-[#E8E4DF] px-4 py-2 inline-flex items-center gap-2 hover:bg-[#E8E4DF] group transition-all cursor-pointer">
              <FiMail className="w-4 h-4 text-[#E8E4DF] group-hover:text-[#1A1A1A] transition-colors" />
              <span className="text-[#E8E4DF] group-hover:text-[#1A1A1A] tracking-[0.15em] font-black text-xs transition-colors">CONTACT ME</span>
            </div>
          </Link>
        </div>

        <div className="col-span-6 md:col-span-4 bg-[#E8E4DF] border-[6px] border-[#1A1A1A] shadow-[8px_8px_0_0_#1A1A1A] p-6 flex flex-col justify-between">
          <FiMapPin className="w-8 h-8 text-[#1A1A1A]" />
          <div>
            <p className="text-[#1A1A1A] font-black tracking-[0.15em] mb-1" style={{ fontSize: "1.2rem" }}>
              MANILA
            </p>
            <p className="text-[#5D5D5D] tracking-widest text-sm">PHILIPPINES 🇵🇭</p>
          </div>
        </div>

        <div className="col-span-12 md:col-span-6 bg-[#3D3D3D] border-[6px] border-[#1A1A1A] shadow-[8px_8px_0_0_#1A1A1A] p-6 md:p-8">
          <div className="bg-[#E8E4DF] border-4 border-[#000] px-4 py-1 inline-block mb-6 shadow-[4px_4px_0_0_#000]">
            <span className="text-[#1A1A1A] tracking-[0.2em] font-black text-xs">WHAT I DO</span>
          </div>
          <div className="space-y-4">
            {[
              { icon: FiCode, label: "FRONTEND DEVELOPMENT", desc: "React · API integration · Tailwind CSS · Bootstrap" },
              { icon: FiTerminal, label: "BACKEND DEVELOPMENT", desc: "Laravel · API development · MySQL" },
              { icon: FiLayers, label: "SYSTEM ARCHITECTURE", desc: "Microservices · Scalable APIs · Modular architecture" },
            ].map(({ icon: Icon, label, desc }) => (
              <div key={label} className="flex items-start gap-4 border-b-2 border-[#4D4D4D] pb-4 last:border-0 last:pb-0">
                <div className="bg-[#E8E4DF] border-2 border-[#000] p-2 shadow-[2px_2px_0_0_#000] flex-shrink-0">
                  <Icon className="w-4 h-4 text-[#1A1A1A]" />
                </div>
                <div>
                  <p className="text-[#E8E4DF] font-black tracking-[0.12em]" style={{ fontSize: "0.75rem" }}>{label}</p>
                  <p className="text-[#7D7D7D] tracking-wide" style={{ fontSize: "0.75rem" }}>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="col-span-12 md:col-span-6 bg-[#E8E4DF] border-[6px] border-[#1A1A1A] shadow-[8px_8px_0_0_#1A1A1A] p-6 md:p-8">
          <div className="bg-[#E8E4DF] border-4 border-[#000] px-4 py-1 inline-block mb-6 shadow-[4px_4px_0_0_#000]">
            <span className="text-[#1A1A1A] tracking-[0.2em] font-black text-xs"> OTHERS </span>
          </div>
          <div className="space-y-4">
            {[
              { icon: FiCpu, label: "OTHER SKILLS", desc: "Python · Git · Postman · Debugging · Basic Machine Learning" },
            ].map(({ icon: Icon, label, desc }) => (
              <div key={label} className="flex items-start gap-4 border-b-2 border-[#4D4D4D] pb-4 last:border-0 last:pb-0">
                <div className="bg-[#E8E4DF] border-2 border-[#000] p-2 shadow-[2px_2px_0_0_#000] flex-shrink-0">
                  <Icon className="w-4 h-4 text-[#1A1A1A]" />
                </div>
                <div>
                  <p className="text-[#1A1A1A] font-black tracking-[0.12em]" style={{ fontSize: "0.75rem" }}>{label}</p>
                  <p className="text-[#1A1A1A] tracking-wide" style={{ fontSize: "0.75rem" }}>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="col-span-12 md:col-span-8 bg-[#1A1A1A] border-[6px] border-[#000] shadow-[8px_8px_0_0_#000] p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-[#7D7D7D] tracking-[0.2em] font-black mb-1" style={{ fontSize: "0.65rem" }}>NEXT STEP</p>
            <p className="text-[#E8E4DF] font-black tracking-wide" style={{ fontSize: "1.2rem" }}>
              LET'S WORK TOGETHER
            </p>
          </div>
          <Link to="/contact">
            <div className="bg-[#E8E4DF] border-4 border-[#E8E4DF] px-8 py-4 shadow-[4px_4px_0_0_#E8E4DF] hover:shadow-[6px_6px_0_0_#E8E4DF] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all flex items-center gap-3 cursor-pointer">
              <span className="text-[#1A1A1A] tracking-[0.15em] font-black text-sm">CONTACT →</span>
            </div>
          </Link>
        </div>

        <div className="col-span-6 md:col-span-4 bg-[#1A1A1A] border-[6px] border-[#000] shadow-[8px_8px_0_0_#000] p-6 flex flex-col gap-4">
          <span className="text-[#7D7D7D] tracking-[0.2em] font-black" style={{ fontSize: "0.65rem" }}>FIND ME</span>
          {[
            { icon: FiGithub, label: "GITHUB", href: "#" },
            { icon: FiMail, label: "EMAIL", href: "/contact" },
          ].map(({ icon: Icon, label, href }) => (
            <Link to={href} key={label}>
              <div className="border-2 border-[#3D3D3D] px-4 py-3 flex items-center gap-3 hover:border-[#E8E4DF] hover:bg-[#2B2B2B] transition-all cursor-pointer">
                <Icon className="w-4 h-4 text-[#E8E4DF]" />
                <span className="text-[#E8E4DF] tracking-[0.15em] font-black" style={{ fontSize: "0.7rem" }}>{label}</span>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </div>
  );
}
