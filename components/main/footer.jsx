// components/main/footer.jsx
"use client";

import Link from "next/link";
import {
  EnvelopeIcon,
  PhoneIcon,
} from "@heroicons/react/24/solid";

import {
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="w-full bg-transparent text-gray-200 shadow-lg py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col items-center">

        {/* Contact Links */}
        <div className="flex flex-wrap justify-center gap-8 mb-8">

          {/* LinkedIn */}
          <Link
            href="https://linkedin.com/in/YOUR_LINKEDIN"
            target="_blank"
            className="flex items-center gap-2 hover:text-purple-400 transition"
          >
            <FaLinkedin size={22} />
            <span>LinkedIn</span>
          </Link>

          {/* GitHub */}
          <Link
            href="https://github.com/kuberjha08"
            target="_blank"
            className="flex items-center gap-2 hover:text-purple-400 transition"
          >
            <FaGithub size={22} />
            <span>GitHub</span>
          </Link>

          {/* Email */}
          <Link
            href="mailto:kuber98jha@gmail.com"
            className="flex items-center gap-2 hover:text-purple-400 transition"
          >
            <EnvelopeIcon className="h-5 w-5" />
            <span>Email</span>
          </Link>

          {/* Phone */}
          <Link
            href="tel:+918708574843"
            className="flex items-center gap-2 hover:text-purple-400 transition"
          >
            <PhoneIcon className="h-5 w-5" />
            <span>Call</span>
          </Link>

        </div>

        {/* Divider */}
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-purple-500 to-transparent mb-6"></div>

        {/* Copyright */}
        <div className="text-sm text-gray-400 text-center">
          © {new Date().getFullYear()} Kuber Jha. All rights reserved.
        </div>

      </div>
    </footer>
  );
};