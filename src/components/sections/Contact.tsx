import { useState, type FormEvent } from "react";
import { Mail, Phone, Link2, Send, Info, AlertCircle } from "lucide-react";
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
    <div className="flex items-center gap-4 rounded-2xl border border-line bg-bg-card px-5 py-4 transition-colors hover:border-green/50">
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-green-dim text-green">
        <Icon size={18} />
      </span>
      <div>
        <p className="text-xs font-semibold uppercase tracking-wide text-text-soft">
          {label}
        </p>
        <p className={`font-bold ${isPlaceholder ? "text-text-soft" : "text-text"}`}>
          {value}
          {isPlaceholder && (
            <span className="ml-2 rounded-full bg-yellow/15 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-yellow">
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
    <section id="contact" className="bg-bg-soft px-6 py-20 md:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-green">
            Get In Touch
          </p>
          <h2 className="section-heading mt-2 text-3xl text-text sm:text-4xl">
            Let's Connect
          </h2>
          <p className="mt-3 text-text-soft">
            I'm always interested in connecting with people, exploring new
            opportunities, and learning from professional experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-5">
          <div className="flex flex-col gap-4 lg:col-span-2">
            <ContactDetailCard
              icon={Mail}
              label="Email"
              value={personal.email}
              isPlaceholder={personal.emailIsPlaceholder}
              href={`mailto:${personal.email}`}
            />
            <ContactDetailCard
              icon={Phone}
              label="Phone"
              value={personal.phone}
              isPlaceholder={personal.phoneIsPlaceholder}
              href={`tel:${personal.phone.replace(/\s+/g, "")}`}
            />
            <ContactDetailCard
              icon={Link2}
              label="LinkedIn"
              value={personal.linkedin || "Add your LinkedIn URL"}
              isPlaceholder
            />

            {(personal.emailIsPlaceholder || personal.phoneIsPlaceholder) && (
              <div className="mt-2 flex gap-3 rounded-xl border border-yellow/30 bg-yellow/10 px-4 py-3 text-xs leading-relaxed text-text-soft">
                <AlertCircle size={16} className="mt-0.5 shrink-0 text-yellow" />
                <p>
                  The email and phone above are placeholders — update{" "}
                  <code className="rounded bg-bg-card px-1 py-0.5">personal</code>{" "}
                  in <code className="rounded bg-bg-card px-1 py-0.5">src/data/resume.ts</code>{" "}
                  with your real contact details.
                </p>
              </div>
            )}
          </div>

          <div className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              noValidate
              className="rounded-3xl border border-line bg-bg-card p-6 shadow-card-lg sm:p-8"
            >
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
                    className="w-full rounded-lg border border-line bg-bg px-4 py-2.5 text-sm text-text outline-none focus:border-green"
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
                    className="w-full rounded-lg border border-line bg-bg px-4 py-2.5 text-sm text-text outline-none focus:border-green"
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
                  className="w-full rounded-lg border border-line bg-bg px-4 py-2.5 text-sm text-text outline-none focus:border-green"
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
                  className="w-full rounded-lg border border-line bg-bg px-4 py-2.5 text-sm text-text outline-none focus:border-green"
                />
                {errors.message && (
                  <p className="mt-1 text-xs font-semibold text-red-400">{errors.message}</p>
                )}
              </div>

              <button
                type="submit"
                className="mt-6 flex w-fit items-center gap-2 rounded-full bg-yellow px-6 py-3 text-sm font-bold text-bg transition-transform hover:-translate-y-0.5"
              >
                <Send size={16} />
                Send Message
              </button>

              {status === "ready" && (
                <div className="mt-5 flex gap-3 rounded-xl border border-green/30 bg-green-dim px-4 py-3 text-sm text-text">
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
