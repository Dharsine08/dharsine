import { useState, type FormEvent } from "react";
import { Mail, Phone, Link2, Send, Info } from "lucide-react";
import { useFadeIn } from "../../hooks/useFadeIn";
import { personal } from "../../data/resume";

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

const initialState: FormState = { name: "", email: "", subject: "", message: "" };
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(values: FormState): FormErrors {
  const errors: FormErrors = {};
  if (!values.name.trim()) errors.name = "Please enter your name.";
  if (!values.email.trim()) {
    errors.email = "Please enter your email.";
  } else if (!emailPattern.test(values.email)) {
    errors.email = "Please enter a valid email address.";
  }
  if (!values.subject.trim()) errors.subject = "Please enter a subject.";
  if (!values.message.trim()) {
    errors.message = "Please enter a message.";
  } else if (values.message.trim().length < 10) {
    errors.message = "Message should be at least 10 characters.";
  }
  return errors;
}

export default function Contact() {
  const ref = useFadeIn<HTMLDivElement>();
  const [values, setValues] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "ready">("idle");

  const handleChange =
    (field: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setValues((prev) => ({ ...prev, [field]: e.target.value }));
    };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const validation = validate(values);
    setErrors(validation);
    if (Object.keys(validation).length === 0) {
      setStatus("ready");
    }
  };

  return (
    <section id="contact" className="bg-green px-6 py-20 sm:px-10">
      <div ref={ref} className="fade-in-section mx-auto max-w-6xl">
        <h2 className="display-heading text-5xl leading-none text-cream sm:text-8xl">
          Let's Connect
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-5">
          <div className="flex flex-col gap-4 lg:col-span-2">
            <a
              href={`tel:${personal.phone}`}
              className="flex items-center gap-4 rounded-2xl bg-black/15 px-5 py-4 transition-colors hover:bg-black/25"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-cream text-green">
                <Phone size={18} />
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-cream/60">
                  Phone
                </p>
                <p className="font-bold text-cream">{personal.phone}</p>
              </div>
            </a>
            <a
              href={`mailto:${personal.email}`}
              className="flex items-center gap-4 rounded-2xl bg-black/15 px-5 py-4 transition-colors hover:bg-black/25"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-cream text-green">
                <Mail size={18} />
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-cream/60">
                  Email
                </p>
                <p className="break-all font-bold text-cream">{personal.email}</p>
              </div>
            </a>
            <div className="flex items-center gap-4 rounded-2xl bg-black/15 px-5 py-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-cream text-green">
                <Link2 size={18} />
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-cream/60">
                  LinkedIn
                </p>
                <p className="font-bold text-cream">
                  {personal.linkedin}
                  <span className="ml-2 rounded-full bg-cream/15 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-cream/70">
                    No URL provided
                  </span>
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              noValidate
              className="rounded-3xl bg-cream p-6 text-ink shadow-card-lg sm:p-8"
            >
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-1.5 block text-sm font-bold">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={values.name}
                    onChange={handleChange("name")}
                    className="w-full rounded-lg border border-black/10 bg-white px-4 py-2.5 text-sm outline-none focus:border-green"
                  />
                  {errors.name && (
                    <p className="mt-1 text-xs font-semibold text-red-600">{errors.name}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="email" className="mb-1.5 block text-sm font-bold">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={values.email}
                    onChange={handleChange("email")}
                    className="w-full rounded-lg border border-black/10 bg-white px-4 py-2.5 text-sm outline-none focus:border-green"
                  />
                  {errors.email && (
                    <p className="mt-1 text-xs font-semibold text-red-600">{errors.email}</p>
                  )}
                </div>
              </div>

              <div className="mt-5">
                <label htmlFor="subject" className="mb-1.5 block text-sm font-bold">
                  Subject
                </label>
                <input
                  id="subject"
                  type="text"
                  value={values.subject}
                  onChange={handleChange("subject")}
                  className="w-full rounded-lg border border-black/10 bg-white px-4 py-2.5 text-sm outline-none focus:border-green"
                />
                {errors.subject && (
                  <p className="mt-1 text-xs font-semibold text-red-600">{errors.subject}</p>
                )}
              </div>

              <div className="mt-5">
                <label htmlFor="message" className="mb-1.5 block text-sm font-bold">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={values.message}
                  onChange={handleChange("message")}
                  className="w-full rounded-lg border border-black/10 bg-white px-4 py-2.5 text-sm outline-none focus:border-green"
                />
                {errors.message && (
                  <p className="mt-1 text-xs font-semibold text-red-600">{errors.message}</p>
                )}
              </div>

              <button
                type="submit"
                className="mt-6 flex w-fit items-center gap-2 rounded-full bg-green px-6 py-3 text-sm font-bold text-cream transition-transform hover:-translate-y-0.5"
              >
                <Send size={16} />
                Send Message
              </button>

              {status === "ready" && (
                <div className="mt-5 flex gap-3 rounded-xl border border-green/25 bg-green/10 px-4 py-3 text-sm text-ink">
                  <Info size={18} className="mt-0.5 shrink-0 text-green" />
                  <p>
                    This form isn't connected to a backend or email service
                    yet, so your message wasn't actually sent. To make it
                    functional, connect it to a service such as{" "}
                    <span className="font-semibold">Formspree</span>,{" "}
                    <span className="font-semibold">EmailJS</span>, or your
                    own API endpoint — see the README for setup notes.
                  </p>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
