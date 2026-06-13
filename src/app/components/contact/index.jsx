import { useState } from "react";
import { FiGithub, FiLinkedin, FiMail, FiMap, FiSend } from "react-icons/fi";
import toast from 'react-hot-toast';

const SCRIPT = import.meta.env.VITE_GOOGLE_SCRIPT_URL;
export default function Contact() {
  const [isLoading, setIsLoading] = useState(false);
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

  return (
    <div className="min-h-screen bg-[#E8E4DF]">
      <section className="bg-[#2B2B2B] border-b-8 border-[#1A1A1A] py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-[#E8E4DF] border-8 border-[#000] p-2 inline-block mb-6 shadow-[8px_8px_0_0_rgba(0,0,0,1)]">
            <h1 className="text-[#1A1A1A] text-4xl md:text-6xl font-black tracking-[0.2em] px-6 py-4">
              CONTACT
            </h1>
          </div>
          <p className="text-[#B8B4AF] text-xl max-w-3xl mt-6 leading-relaxed">
            Let's build something great together. Drop me a message and I'll get back to you as soon as possible.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-[#2B2B2B] border-8 border-[#1A1A1A] p-8 shadow-[8px_8px_0_0_rgba(0,0,0,0.5)]">
                <div className="bg-[#E8E4DF] border-4 border-[#000] p-2 inline-block mb-6 shadow-[4px_4px_0_0_rgba(0,0,0,1)]">
                  <h2 className="text-[#1A1A1A] text-2xl font-black tracking-[0.15em] px-4 py-2">
                    GET IN TOUCH
                  </h2>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-[#E8E4DF] border-4 border-[#000] w-12 h-12 flex items-center justify-center shadow-[4px_4px_0_0_rgba(0,0,0,1)] flex-shrink-0">
                      <FiMail className="w-6 h-6 text-[#1A1A1A]" />
                    </div>
                    <div>
                      <div className="text-[#B8B4AF] tracking-wider mb-2">EMAIL</div>
                      <a
                        href="mailto:mariscotesangela@gmail.com"
                        className="text-[#E8E4DF] hover:text-[#B8B4AF] transition-colors"
                      >
                        mariscotesangela@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-[#E8E4DF] border-4 border-[#000] w-12 h-12 flex items-center justify-center shadow-[4px_4px_0_0_rgba(0,0,0,1)] flex-shrink-0">
                      <FiMap className="w-6 h-6 text-[#1A1A1A]" />
                    </div>
                    <div>
                      <div className="text-[#B8B4AF] tracking-wider mb-2">LOCATION</div>
                      <div className="text-[#E8E4DF]">Manila, Philippines</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-[#2B2B2B] border-8 border-[#1A1A1A] p-8 shadow-[8px_8px_0_0_rgba(0,0,0,0.5)]">
                <div className="bg-[#E8E4DF] border-4 border-[#000] p-2 inline-block mb-6 shadow-[4px_4px_0_0_rgba(0,0,0,1)]">
                  <h2 className="text-[#1A1A1A] text-2xl font-black tracking-[0.15em] px-4 py-2">
                    FOLLOW ME
                  </h2>
                </div>

                <div className="space-y-4">
                  <a
                    href="https://github.com/angelamariscotes"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 bg-[#3D3D3D] border-4 border-[#2B2B2B] p-4 shadow-[4px_4px_0_0_rgba(0,0,0,0.5)] hover:shadow-[6px_6px_0_0_rgba(0,0,0,0.8)] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all group"
                  >
                    <FiGithub className="w-6 h-6 text-[#E8E4DF]" />
                    <span className="text-[#E8E4DF] tracking-wider">GITHUB</span>
                  </a>

                  <a
                    href="https://www.linkedin.com/in/angela-mariscotes-404990286/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 bg-[#3D3D3D] border-4 border-[#2B2B2B] p-4 shadow-[4px_4px_0_0_rgba(0,0,0,0.5)] hover:shadow-[6px_6px_0_0_rgba(0,0,0,0.8)] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all group"
                  >
                    <FiLinkedin className="w-6 h-6 text-[#E8E4DF]" />
                    <span className="text-[#E8E4DF] tracking-wider">LINKEDIN</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="lg:col-span-3">
              <div className="bg-[#2B2B2B] border-8 border-[#1A1A1A] p-8 shadow-[8px_8px_0_0_rgba(0,0,0,0.5)]">
                <div className="bg-[#E8E4DF] border-4 border-[#000] p-2 inline-block mb-8 shadow-[4px_4px_0_0_rgba(0,0,0,1)]">
                  <h2 className="text-[#1A1A1A] text-2xl font-black tracking-[0.15em] px-4 py-2">
                    SEND MESSAGE
                  </h2>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-[#E8E4DF] tracking-wider mb-3 font-black">
                      YOUR NAME
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-[#3D3D3D] border-4 border-[#2B2B2B] text-[#E8E4DF] px-4 py-6 w-full focus:border-[#E8E4DF] focus:ring-0 shadow-[4px_4px_0_0_rgba(0,0,0,0.5)] placeholder:text-[#5D5D5D]"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label className="block text-[#E8E4DF] tracking-wider mb-3 font-black">
                      YOUR EMAIL
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-[#3D3D3D] border-4 border-[#2B2B2B] text-[#E8E4DF] px-4 py-6 w-full focus:border-[#E8E4DF] focus:ring-0 shadow-[4px_4px_0_0_rgba(0,0,0,0.5)] placeholder:text-[#5D5D5D]"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-[#E8E4DF] tracking-wider mb-3 font-black">
                      SUBJECT
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="bg-[#3D3D3D] border-4 border-[#2B2B2B] text-[#E8E4DF] px-4 py-6 w-full focus:border-[#E8E4DF] focus:ring-0 shadow-[4px_4px_0_0_rgba(0,0,0,0.5)] placeholder:text-[#5D5D5D]"
                      placeholder="Project Inquiry"
                    />
                  </div>

                  <div>
                    <label className="block text-[#E8E4DF] tracking-wider mb-3 font-black">
                      MESSAGE
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="bg-[#3D3D3D] border-4 border-[#2B2B2B] text-[#E8E4DF] px-4 py-4 w-full focus:border-[#E8E4DF] focus:ring-0 shadow-[4px_4px_0_0_rgba(0,0,0,0.5)] placeholder:text-[#5D5D5D] resize-none"
                      placeholder="Tell me about your project..."
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isLoading}
                    className={`w-full border-4 border-[#000] px-6 py-6 shadow-[6px_6px_0_0_rgba(0,0,0,1)] flex items-center justify-center gap-3 transition-all ${isLoading
                      ? 'bg-[#BDB9B5] cursor-not-allowed opacity-70'
                      : 'bg-[#E8E4DF] hover:shadow-[8px_8px_0_0_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px]'
                      }`}
                  >
                    <span className="text-[#1A1A1A] tracking-[0.15em] font-black">
                      {isLoading ? 'SENDING...' : 'SEND MESSAGE'}
                    </span>

                    {!isLoading && (
                      <FiSend className="w-5 h-5 text-[#1A1A1A]" />
                    )}
                  </button>

                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}