"use client";

import { FormEvent, useState } from "react";

type QuoteFormProps = {
  productName?: string;
  productOptions?: string[];
  subject: string;
};

type FieldName = "name" | "email" | "category" | "quantity" | "message";

const requiredFields: FieldName[] = ["name", "email", "quantity", "message"];

export function QuoteForm({ productName, productOptions, subject }: QuoteFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<FieldName, string>>>({});
  const [status, setStatus] = useState("");
  const hasCategory = Boolean(productOptions?.length);
  const fields = hasCategory ? [...requiredFields, "category" as const] : requiredFields;

  const validate = (form: HTMLFormElement) => {
    const nextErrors: Partial<Record<FieldName, string>> = {};
    const formData = new FormData(form);

    fields.forEach((field) => {
      const value = String(formData.get(field) ?? "").trim();
      if (!value) nextErrors[field] = "This field is required.";
    });

    const email = String(formData.get("email") ?? "").trim();
    const emailControl = form.elements.namedItem("email") as HTMLInputElement | null;
    if (email && emailControl && !emailControl.checkValidity()) {
      nextErrors.email = "Enter a valid business email address.";
    }

    return nextErrors;
  };

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const nextErrors = validate(form);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setStatus("Please correct the highlighted fields and submit again.");
      const firstInvalidField = Object.keys(nextErrors)[0];
      (form.elements.namedItem(firstInvalidField) as HTMLElement | null)?.focus();
      return;
    }

    setIsSubmitting(true);
    setStatus("Submitting your quote request.");
    const formData = new FormData(form);
    formData.append("access_key", "39dc5b13-90fe-40da-97f9-2440b5c7aaf3");
    formData.append("subject", subject);

    try {
      const response = await fetch("https://api.web3forms.com/submit", { method: "POST", body: formData });
      const data = await response.json();
      if (!data.success) throw new Error("Submission failed");
      form.reset();
      setErrors({});
      setStatus("Your quote request has been sent. Our team will be in touch soon.");
    } catch {
      setStatus("We could not submit your request. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const fieldClass = "mt-1 w-full bg-transparent text-[14px] leading-[18px] placeholder:text-[#6B6B6B]";
  const wrapperClass = "rounded border px-3 py-3";

  return (
    <form noValidate onSubmit={onSubmit} className="flex flex-col gap-4">
      <p className="sr-only" id="quote-required-note">Fields marked required are required.</p>
      <div className={`${wrapperClass} ${errors.name ? "border-red-700" : "border-[#C9C9C9]"}`}>
        <label htmlFor="quote-name" className="block text-[11px] leading-[14px] text-[#0D0D0D]">Full Name <span aria-hidden="true">*</span></label>
        <input id="quote-name" type="text" name="name" required aria-required="true" aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? "quote-name-error" : "quote-required-note"} onInput={(event) => (event.currentTarget.value = event.currentTarget.value.replace(/[^A-Za-z\s]/g, ""))} placeholder="e.g. John Doe" className={fieldClass} />
        {errors.name && <p id="quote-name-error" className="mt-1 text-xs text-red-700">{errors.name}</p>}
      </div>

      <div className={`${wrapperClass} ${errors.email ? "border-red-700" : "border-[#C9C9C9]"}`}>
        <label htmlFor="quote-email" className="block text-[11px] leading-[14px] text-[#0D0D0D]">Business Email <span aria-hidden="true">*</span></label>
        <input id="quote-email" type="email" name="email" required aria-required="true" aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? "quote-email-error" : "quote-required-note"} placeholder="e.g. john@yourbrand.com" className={fieldClass} />
        {errors.email && <p id="quote-email-error" className="mt-1 text-xs text-red-700">{errors.email}</p>}
      </div>

      <div className={`${wrapperClass} border-[#C9C9C9]`}>
        <label htmlFor="quote-phone" className="block text-[11px] leading-[14px] text-[#0D0D0D]">Phone Number (optional)</label>
        <input id="quote-phone" type="tel" name="phone" onInput={(event) => (event.currentTarget.value = event.currentTarget.value.replace(/[^0-9+\-()\s]/g, ""))} placeholder="e.g. +1 (555) 000-0000" className={fieldClass} />
      </div>

      {hasCategory ? (
        <div className={`${wrapperClass} ${errors.category ? "border-red-700" : "border-[#C9C9C9]"}`}>
          <label htmlFor="quote-category" className="block text-[11px] leading-[14px] text-[#0D0D0D]">Product Category <span aria-hidden="true">*</span></label>
          <select id="quote-category" name="category" required aria-required="true" aria-invalid={Boolean(errors.category)} aria-describedby={errors.category ? "quote-category-error" : "quote-required-note"} defaultValue="" className={fieldClass}>
            <option value="" disabled>Select a product</option>
            {productOptions!.map((product) => <option key={product} value={product}>{product}</option>)}
          </select>
          {errors.category && <p id="quote-category-error" className="mt-1 text-xs text-red-700">{errors.category}</p>}
        </div>
      ) : productName ? (
        <div className={`${wrapperClass} border-[#C9C9C9] bg-[#F9F9F9]`}>
          <label htmlFor="quote-product" className="block text-[11px] leading-[14px] text-[#0D0D0D]">Product Name</label>
          <input id="quote-product" type="text" name="productName" value={productName} readOnly className={fieldClass} />
        </div>
      ) : null}

      <div className={`${wrapperClass} ${errors.quantity ? "border-red-700" : "border-[#C9C9C9]"}`}>
        <label htmlFor="quote-quantity" className="block text-[11px] leading-[14px] text-[#0D0D0D]">Estimated Order Quantity <span aria-hidden="true">*</span></label>
        <input id="quote-quantity" type="text" name="quantity" required aria-required="true" aria-invalid={Boolean(errors.quantity)} aria-describedby={errors.quantity ? "quote-quantity-error" : "quote-required-note"} list="quote-quantity-options" placeholder="e.g. 500 pairs" className={fieldClass} />
        <datalist id="quote-quantity-options"><option value="100" /><option value="200" /><option value="300" /><option value="500" /><option value="1000" /></datalist>
        {errors.quantity && <p id="quote-quantity-error" className="mt-1 text-xs text-red-700">{errors.quantity}</p>}
      </div>

      <div className={`${wrapperClass} ${errors.message ? "border-red-700" : "border-[#C9C9C9]"}`}>
        <label htmlFor="quote-message" className="block text-[11px] leading-[14px] text-[#0D0D0D]">Project Details <span aria-hidden="true">*</span></label>
        <textarea id="quote-message" name="message" required aria-required="true" aria-invalid={Boolean(errors.message)} aria-describedby={errors.message ? "quote-message-error" : "quote-required-note"} rows={3} placeholder="Tell us about your branding, materials, colors, logo requirements, packaging, target market, or any other details." className={`${fieldClass} resize-none`} />
        {errors.message && <p id="quote-message-error" className="mt-1 text-xs text-red-700">{errors.message}</p>}
      </div>

      <button type="submit" disabled={isSubmitting} className="mt-4 w-full rounded-[4px] bg-[#0D0D0D] px-10 py-4 text-[13px] font-medium uppercase tracking-wide text-white disabled:cursor-wait disabled:opacity-70">
        {isSubmitting ? "Submitting..." : "Request Manufacturing Quote"}
      </button>
      <p aria-live="polite" role="status" className="min-h-[1.25rem] text-sm text-[#434343]">{status}</p>
    </form>
  );
}