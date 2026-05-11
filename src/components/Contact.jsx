import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import { Github, Linkedin, Loader2, Mail, MapPin, Send } from 'lucide-react';
import { useMemo, useState } from 'react';
import { FaFacebook, FaXTwitter } from 'react-icons/fa6';
import { profile } from '../data/profile';
import SectionHeader from './SectionHeader';

const initialForm = {
  name: '',
  email: '',
  subject: '',
  message: '',
};

const socialLinks = [
  { label: 'GitHub', href: profile.socials.github, icon: Github },
  { label: 'LinkedIn', href: profile.socials.linkedin, icon: Linkedin },
  { label: 'Facebook', href: profile.socials.facebook, icon: FaFacebook },
  { label: 'Twitter X', href: profile.socials.twitter, icon: FaXTwitter },
];

function validateForm(form) {
  const nextErrors = {};

  if (!form.name.trim()) {
    nextErrors.name = 'Name is required.';
  }

  if (!form.email.trim()) {
    nextErrors.email = 'Email is required.';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    nextErrors.email = 'Enter a valid email address.';
  }

  if (!form.subject.trim()) {
    nextErrors.subject = 'Subject is required.';
  }

  if (!form.message.trim()) {
    nextErrors.message = 'Message is required.';
  } else if (form.message.trim().length < 12) {
    nextErrors.message = 'Message should be at least 12 characters.';
  }

  return nextErrors;
}

function Contact() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ type: 'idle', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const hasEmailJsConfig = useMemo(
    () =>
      Boolean(
        import.meta.env.VITE_EMAILJS_SERVICE_ID &&
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID &&
          import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      ),
    [],
  );

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: undefined }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const validationErrors = validateForm(form);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      setStatus({ type: 'error', message: 'Please fix the highlighted fields before sending.' });
      return;
    }

    if (!hasEmailJsConfig) {
      setStatus({
        type: 'error',
        message: 'EmailJS environment variables are missing. Add them before using the live contact form.',
      });
      return;
    }

    setIsSubmitting(true);
    setStatus({ type: 'idle', message: '' });

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          subject: form.subject,
          message: form.message,
        },
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        },
      );

      setForm(initialForm);
      setStatus({ type: 'success', message: 'Message sent successfully. I will reply as soon as possible.' });
    } catch (error) {
      const errorDetails = error?.text || error?.message || 'Please check EmailJS service, template, and public key settings.';
      setStatus({ type: 'error', message: `EmailJS error: ${errorDetails}` });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-padding bg-slate-50 dark:bg-slate-900/60">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Contact"
          title="Let us build something professional."
          description="Use the form for project inquiries, freelance work, redesign requests, or frontend collaboration. Clear project details help me respond faster."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <motion.aside
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.55 }}
            className="glass-card rounded-[2rem] p-7"
          >
            <h3 className="text-2xl font-extrabold text-slate-950 dark:text-white">Contact details</h3>
            <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">
              I am open to responsive websites, landing pages, React interfaces, bug fixing, and portfolio-style frontend projects.
            </p>

            <div className="mt-8 space-y-4">
              <a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-4 rounded-3xl border border-slate-200 bg-white p-4 transition hover:border-brand-200 hover:shadow-sm dark:border-white/10 dark:bg-white/[0.04]"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-100 text-brand-700 dark:bg-sky-300/10 dark:text-sky-200">
                  <Mail size={21} />
                </span>
                <span>
                  <span className="block text-sm font-bold text-slate-500 dark:text-slate-400">Email</span>
                  <span className="font-extrabold text-slate-950 dark:text-white">{profile.email}</span>
                </span>
              </a>

              <div className="flex items-center gap-4 rounded-3xl border border-slate-200 bg-white p-4 dark:border-white/10 dark:bg-white/[0.04]">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-100 text-brand-700 dark:bg-sky-300/10 dark:text-sky-200">
                  <MapPin size={21} />
                </span>
                <span>
                  <span className="block text-sm font-bold text-slate-500 dark:text-slate-400">Location</span>
                  <span className="font-extrabold text-slate-950 dark:text-white">{profile.location}</span>
                </span>
              </div>
            </div>

            <div className="mt-8 flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={social.label}
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 transition hover:-translate-y-1 hover:border-brand-400 hover:text-brand-700 dark:border-white/10 dark:bg-white/[0.04] dark:text-slate-200 dark:hover:border-sky-300 dark:hover:text-sky-200"
                  >
                    <Icon size={19} />
                  </a>
                );
              })}
            </div>
          </motion.aside>

          <motion.form
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55 }}
            onSubmit={handleSubmit}
            noValidate
            className="glass-card rounded-[2rem] p-6 sm:p-8"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block">
                <span className="text-sm font-extrabold text-slate-700 dark:text-slate-200">Name</span>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  autoComplete="name"
                  aria-invalid={Boolean(errors.name)}
                  className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-950 transition focus:border-brand-500 focus:outline-none focus:ring-4 focus:ring-brand-100 dark:border-white/10 dark:bg-slate-950 dark:text-white dark:focus:ring-sky-300/10"
                  placeholder="Your name"
                />
                {errors.name ? <span className="mt-2 block text-sm font-semibold text-red-500">{errors.name}</span> : null}
              </label>

              <label className="block">
                <span className="text-sm font-extrabold text-slate-700 dark:text-slate-200">Email</span>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  autoComplete="email"
                  aria-invalid={Boolean(errors.email)}
                  className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-950 transition focus:border-brand-500 focus:outline-none focus:ring-4 focus:ring-brand-100 dark:border-white/10 dark:bg-slate-950 dark:text-white dark:focus:ring-sky-300/10"
                  placeholder="you@example.com"
                />
                {errors.email ? <span className="mt-2 block text-sm font-semibold text-red-500">{errors.email}</span> : null}
              </label>
            </div>

            <label className="mt-5 block">
              <span className="text-sm font-extrabold text-slate-700 dark:text-slate-200">Subject</span>
              <input
                type="text"
                name="subject"
                value={form.subject}
                onChange={handleChange}
                aria-invalid={Boolean(errors.subject)}
                className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-950 transition focus:border-brand-500 focus:outline-none focus:ring-4 focus:ring-brand-100 dark:border-white/10 dark:bg-slate-950 dark:text-white dark:focus:ring-sky-300/10"
                placeholder="Project inquiry"
              />
              {errors.subject ? <span className="mt-2 block text-sm font-semibold text-red-500">{errors.subject}</span> : null}
            </label>

            <label className="mt-5 block">
              <span className="text-sm font-extrabold text-slate-700 dark:text-slate-200">Message</span>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows="6"
                aria-invalid={Boolean(errors.message)}
                className="mt-2 w-full resize-none rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-950 transition focus:border-brand-500 focus:outline-none focus:ring-4 focus:ring-brand-100 dark:border-white/10 dark:bg-slate-950 dark:text-white dark:focus:ring-sky-300/10"
                placeholder="Tell me about your website, deadline, and goals."
              />
              {errors.message ? <span className="mt-2 block text-sm font-semibold text-red-500">{errors.message}</span> : null}
            </label>

            {status.message ? (
              <div
                className={`mt-5 rounded-2xl border px-4 py-3 text-sm font-bold ${
                  status.type === 'success'
                    ? 'border-emerald-200 bg-emerald-50 text-emerald-700 dark:border-emerald-400/20 dark:bg-emerald-400/10 dark:text-emerald-200'
                    : 'border-red-200 bg-red-50 text-red-700 dark:border-red-400/20 dark:bg-red-400/10 dark:text-red-200'
                }`}
                role="status"
              >
                {status.message}
              </div>
            ) : null}

            <button type="submit" disabled={isSubmitting} className="primary-button mt-6 w-full disabled:cursor-not-allowed disabled:opacity-70">
              {isSubmitting ? <Loader2 className="animate-spin" size={18} /> : <Send size={18} />}
              {isSubmitting ? 'Sending Message...' : 'Send Message'}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
