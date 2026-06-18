import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const I_Check = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

function ContactModal({ open, onClose, title = "Let's Work Together" }) {
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [sent, setSent] = useState(false);
  const upd = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));
  const submit = (e) => {
    e.preventDefault();
    setSent(true);
  };
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="modal-overlay"
          onClick={(e) => {
            if (e.target === e.currentTarget) onClose();
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <motion.div
            className="modal-box"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <div className="modal-header">
              <div>
                <div className="modal-eyebrow">Get In Touch</div>
                <div className="modal-title">{title}</div>
              </div>
              <button className="modal-close" onClick={onClose}>
                ✕
              </button>
            </div>
            <div className="modal-body">
              {sent ? (
                <motion.div
                  className="modal-success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="modal-success-icon">✓</div>
                  <h3>Message Sent!</h3>
                  <p>
                    Our team will review your brief and get back to you within 4
                    business hours.
                  </p>
                  <button
                    onClick={() => {
                      setSent(false);
                      onClose();
                    }}
                    className="btn-primary"
                    style={{ marginTop: "8px" }}
                  >
                    Done <I_Check />
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={submit}>
                  <div style={{ padding: 0 }}>
                    <div className="form-row" style={{ marginBottom: 0 }}>
                      <div className="form-field">
                        <label className="form-label">Full Name</label>
                        <input
                          className="form-input"
                          placeholder="Your name"
                          value={form.name}
                          onChange={upd("name")}
                          required
                        />
                      </div>
                      <div className="form-field">
                        <label className="form-label">Company</label>
                        <input
                          className="form-input"
                          placeholder="Company name"
                          value={form.company}
                          onChange={upd("company")}
                        />
                      </div>
                    </div>
                    <div className="form-row" style={{ marginBottom: 0 }}>
                      <div className="form-field">
                        <label className="form-label">Email</label>
                        <input
                          type="email"
                          className="form-input"
                          placeholder="you@company.com"
                          value={form.email}
                          onChange={upd("email")}
                          required
                        />
                      </div>
                      <div className="form-field">
                        <label className="form-label">Phone</label>
                        <input
                          className="form-input"
                          placeholder="+254 7xx xxx xxx"
                          value={form.phone}
                          onChange={upd("phone")}
                        />
                      </div>
                    </div>
                    <div className="form-field">
                      <label className="form-label">Service</label>
                      <select
                        className="form-input"
                        value={form.service}
                        onChange={upd("service")}
                      >
                        <option value="">Select a service</option>
                        <option value="Brand Activations">
                          Brand Activations
                        </option>
                        <option value="Field Marketing">Field Marketing</option>
                        <option value="Product Launches">
                          Product Launches
                        </option>
                        <option value="Retail Activations">
                          Retail Activations
                        </option>
                        <option value="OOH + BTL">OOH + BTL</option>
                        <option value="Analytics">Campaign Analytics</option>
                        <option value="Career">Career</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                    {form.service === "Other" && (
                      <div className="form-field">
                        <label className="form-label">Please specify</label>
                        <input
                          className="form-input"
                          placeholder="Describe your inquiry..."
                          value={form.otherService ?? ""}
                          onChange={(e) =>
                            setForm((f) => ({
                              ...f,
                              otherService: e.target.value,
                            }))
                          }
                          required
                        />
                      </div>
                    )}
                    <div className="form-field">
                      <label className="form-label">Message</label>
                      <textarea
                        className="form-input"
                        placeholder="Tell us about your project..."
                        rows="4"
                        value={form.message}
                        onChange={upd("message")}
                        required
                      />
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="btn-primary"
                    style={{ width: "100%", marginTop: "12px" }}
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default ContactModal;
