import type { InputHTMLAttributes, TextareaHTMLAttributes } from "react";

type BaseFieldProps = {
  id: string;
  label: string;
  error?: string;
};

type InputFieldProps = BaseFieldProps & InputHTMLAttributes<HTMLInputElement>;

export function InputField({ id, label, error, className = "", ...props }: InputFieldProps) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-black text-ink">{label}</label>
      <input
        id={id}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        className={`w-full rounded-2xl border bg-cream px-4 py-3.5 font-semibold text-ink placeholder:text-ink/35 ${
          error ? "border-coral" : "border-ink/15 focus:border-coral"
        } ${className}`}
        {...props}
      />
      {error ? <p id={`${id}-error`} className="mt-2 text-sm font-bold text-coral">{error}</p> : null}
    </div>
  );
}

type TextareaFieldProps = BaseFieldProps & TextareaHTMLAttributes<HTMLTextAreaElement>;

export function TextareaField({ id, label, error, className = "", ...props }: TextareaFieldProps) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-black text-ink">{label}</label>
      <textarea
        id={id}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        className={`min-h-32 w-full resize-y rounded-2xl border bg-cream px-4 py-3.5 font-semibold text-ink placeholder:text-ink/35 ${
          error ? "border-coral" : "border-ink/15 focus:border-coral"
        } ${className}`}
        {...props}
      />
      {error ? <p id={`${id}-error`} className="mt-2 text-sm font-bold text-coral">{error}</p> : null}
    </div>
  );
}
