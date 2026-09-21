import { useState, type FormEvent } from "react";
import { Mail, Phone, MapPin, Send, Info } from "lucide-react";
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
    <section id="contact" className="bg-green px-6 py-20 text-cream sm:px-10">
      <div className="mx-auto max-w-6xl">
        <span className="pill-heading bg-gold text-black">Contact Me</span>
        <h2 className="section-heading mt-4 text-4xl text-cream sm:text-5xl">
          Let's talk
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-12 lg:grid-cols-5">
          <div className="flex flex-col gap-4 lg:col-span-2">
            <a
              href={`mailto:${personal.email}`}
              className="flex items-center gap-4 rounded-2xl bg-cream/5 px-5 py-4 transition-colors hover:bg-cream/10"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gold text-black">
                <Mail size={18} />
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-cream/50">
                  Email
                </p>
                <p className="break-all font-bold text-cream">{personal.email}</p>
              </div>
            </a>
            <a
              href={`tel:${personal.phone}`}
              className="flex items-center gap-4 rounded-2xl bg-cream/5 px-5 py-4 transition-colors hover:bg-cream/10"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gold text-black">
                <Phone size={18} />
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-cream/50">
                  Phone
                </p>
                <p className="font-bold text-cream">{personal.phone}</p>
              </div>
            </a>
            <div className="flex items-center gap-4 rounded-2xl bg-cream/5 px-5 py-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gold text-black">
                <MapPin size={18} />
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-cream/50">
                  Location
                </p>
                <p className="font-bold text-cream">{personal.location}</p>
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
                    className="w-full rounded-lg border border-line bg-cream-soft px-4 py-2.5 text-sm outline-none focus:border-coral"
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
                    className="w-full rounded-lg border border-line bg-cream-soft px-4 py-2.5 text-sm outline-none focus:border-coral"
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
                  className="w-full rounded-lg border border-line bg-cream-soft px-4 py-2.5 text-sm outline-none focus:border-coral"
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
                  className="w-full rounded-lg border border-line bg-cream-soft px-4 py-2.5 text-sm outline-none focus:border-coral"
                />
                {errors.message && (
                  <p className="mt-1 text-xs font-semibold text-red-600">{errors.message}</p>
                )}
              </div>

              <button
                type="submit"
                className="mt-6 flex w-fit items-center gap-2 rounded-full bg-coral px-6 py-3 text-sm font-bold text-white transition-transform hover:-translate-y-0.5"
              >
                <Send size={16} />
                Send Message
              </button>

              {status === "ready" && (
                <div className="mt-5 flex gap-3 rounded-xl border border-green/20 bg-green/5 px-4 py-3 text-sm text-ink">
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
