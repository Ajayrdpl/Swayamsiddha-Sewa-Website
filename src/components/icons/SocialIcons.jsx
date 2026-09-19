import React from "react";

export const FacebookIcon = ({ size = 18, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M13.5 21v-7.6h2.6l.4-3h-3V8.4c0-.87.24-1.46 1.5-1.46H16.6V4.2C16.33 4.16 15.4 4.08 14.3 4.08c-2.28 0-3.84 1.39-3.84 3.94v2.38H7.9v3h2.56V21h3.04z" />
  </svg>
);

export const InstagramIcon = ({ size = 18, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    className={className}
  >
    <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.2" cy="6.8" r="0.9" fill="currentColor" stroke="none" />
  </svg>
);

export const YoutubeIcon = ({ size = 18, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M21.6 7.2c-.24-.9-.95-1.6-1.86-1.85C18.05 5 12 5 12 5s-6.05 0-7.74.35c-.9.25-1.62.96-1.86 1.85C2 8.9 2 12 2 12s0 3.1.4 4.8c.24.9.95 1.6 1.86 1.85C6 19 12 19 12 19s6.05 0 7.74-.35c.9-.25 1.62-.96 1.86-1.85.4-1.7.4-4.8.4-4.8s0-3.1-.4-4.8zM10 15.2V8.8L15.5 12 10 15.2z" />
  </svg>
);
