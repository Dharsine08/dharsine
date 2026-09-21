import { useState, type FormEvent } from "react";
import { Mail, Phone, MapPin, Link2, Send, Info, AlertCircle } from "lucide-react";
import { useFadeIn } from "../../hooks/useFadeIn";
import { contact } from "../../data/resume";

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

function ContactDetailCard({
  icon: Icon,
  label,
  value,
  isPlaceholder,
  href,
}: {
  icon: typeof Mail;
  label: string;
  value: string;
  isPlaceholder?: boolean;
  href?: string;
}) {
  const content = (
    <div className="flex items-center gap-4 rounded-2xl border border-line bg-bg px-5 py-4 transition-colors hover:border-yellow/40">
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-yellow-dim text-yellow">
        <Icon size={18} />
      </span>
      <div className="min-w-0">
        <p className="text-xs font-semibold uppercase tracking-wide text-text-soft">{label}</p>
        <p className={`break-words font-bold ${isPlaceholder ? "text-text-soft" : "text-text"}`}>
          {value}
          {isPlaceholder && (
            <span className="ml-2 rounded-full bg-yellow-dim px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-yellow">
              Add yours
            </span>
          )}
        </p>
      </div>
    </div>
  );

  if (href && !isPlaceholder) {
    return (
      <a href={href} className="block">
        {content}
      </a>
    );
  }
  return content;
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
    <section id="contact" className="bg-bg-soft px-6 py-20 sm:px-10">
      <div ref={ref} className="fade-in-section mx-auto max-w-6xl">
        <div className="mb-10 max-w-2xl">
          <h2 className="text-3xl font-extrabold text-text sm:text-4xl">
            Let's <span className="text-yellow">Connect</span>
          </h2>
          <span className="mt-3 block h-1 w-16 rounded-full bg-yellow" />
          <p className="mt-5 text-text-soft">
            I'm looking forward to connecting with recruiters and employers —
            feel free to reach out about opportunities in IT support, business
            software, or computer applications.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-5">
          <div className="flex flex-col gap-4 lg:col-span-2">
            <ContactDetailCard
              icon={Mail}
              label="Email"
              value={contact.email}
              isPlaceholder={contact.emailIsPlaceholder}
              href={`mailto:${contact.email}`}
            />
            <ContactDetailCard
              icon={Phone}
              label="Phone"
              value={contact.phone}
              isPlaceholder={contact.phoneIsPlaceholder}
              href={`tel:${contact.phone.replace(/\s+/g, "")}`}
            />
            <ContactDetailCard
              icon={Link2}
              label="LinkedIn"
              value={contact.linkedin}
              isPlaceholder={contact.linkedinIsPlaceholder}
            />
            <ContactDetailCard
              icon={MapPin}
              label="Location"
              value={contact.location}
              isPlaceholder={contact.locationIsPlaceholder}
            />

            <div className="mt-2 flex gap-3 rounded-xl border border-yellow/30 bg-yellow-dim px-4 py-3 text-xs leading-relaxed text-text-soft">
              <AlertCircle size={16} className="mt-0.5 shrink-0 text-yellow" />
              <p>
                These contact details are placeholders — none were provided in
                the resume. Update <code className="rounded bg-bg px-1 py-0.5">contact</code>{" "}
                in <code className="rounded bg-bg px-1 py-0.5">src/data/resume.ts</code> with
                real details before publishing.
              </p>
            </div>
          </div>

          <div className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              noValidate
              className="rounded-3xl border border-line bg-bg p-6 shadow-card-lg sm:p-8"
            >
              <p className="mb-5 flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-text-soft">
                <Info size={14} className="text-yellow" />
                Frontend demo — not connected to a backend
              </p>
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-1.5 block text-sm font-bold text-text">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={values.name}
                    onChange={handleChange("name")}
                    className="w-full rounded-lg border border-line bg-bg-soft px-4 py-2.5 text-sm text-text outline-none focus:border-yellow"
                  />
                  {errors.name && (
                    <p className="mt-1 text-xs font-semibold text-red-400">{errors.name}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="email" className="mb-1.5 block text-sm font-bold text-text">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={values.email}
                    onChange={handleChange("email")}
                    className="w-full rounded-lg border border-line bg-bg-soft px-4 py-2.5 text-sm text-text outline-none focus:border-yellow"
                  />
                  {errors.email && (
                    <p className="mt-1 text-xs font-semibold text-red-400">{errors.email}</p>
                  )}
                </div>
              </div>

              <div className="mt-5">
                <label htmlFor="subject" className="mb-1.5 block text-sm font-bold text-text">
                  Subject
                </label>
                <input
                  id="subject"
                  type="text"
                  value={values.subject}
                  onChange={handleChange("subject")}
                  className="w-full rounded-lg border border-line bg-bg-soft px-4 py-2.5 text-sm text-text outline-none focus:border-yellow"
                />
                {errors.subject && (
                  <p className="mt-1 text-xs font-semibold text-red-400">{errors.subject}</p>
                )}
              </div>

              <div className="mt-5">
                <label htmlFor="message" className="mb-1.5 block text-sm font-bold text-text">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={values.message}
                  onChange={handleChange("message")}
                  className="w-full rounded-lg border border-line bg-bg-soft px-4 py-2.5 text-sm text-text outline-none focus:border-yellow"
                />
                {errors.message && (
                  <p className="mt-1 text-xs font-semibold text-red-400">{errors.message}</p>
                )}
              </div>

              <button
                type="submit"
                className="mt-6 flex w-fit items-center gap-2 rounded-lg bg-yellow px-6 py-3 text-sm font-bold uppercase tracking-wide text-bg transition-transform hover:-translate-y-0.5"
              >
                <Send size={16} />
                Send Message
              </button>

              {status === "ready" && (
                <div className="mt-5 flex gap-3 rounded-xl border border-yellow/30 bg-yellow-dim px-4 py-3 text-sm text-text">
                  <Info size={18} className="mt-0.5 shrink-0 text-yellow" />
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
