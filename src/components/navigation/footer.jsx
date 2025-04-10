import { Instagram, Facebook, Twitter, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Mail, href: "#", label: "Email" },
  ];

  return (
    <footer className="py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 w-full place-content-between gap-12">
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="text-[var(--color-primary-500)] text-lg font-semibold">About Alexon Audax</h3>
            <p className="text-[var(--color-secondary-100)]/50 text-sm">
              A Tanzanian-born Ugandan actor, director, and founder of The Artistry360. 
              Award-winning performer known for roles in Sanyu, 24 Hours, and Beloved.
            </p>
          </div>

          {/* Contact Section */}
          <div className="space-y-4 place-self-end">
            <h3 className="text-[var(--color-primary-500)] text-lg font-semibold">Connect</h3>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="text-[var(--color-secondary-100)]/50 hover:text-[var(--color-primary-500)] transition-colors"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-[var(--color-primary-500)]/20 text-center">
          <p className="text-[var(--color-primary-500)]/60 text-sm">
            © {new Date().getFullYear()} Alexon Audax Mulokozi. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
