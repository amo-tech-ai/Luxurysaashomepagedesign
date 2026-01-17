const footerLinks = {
  product: {
    title: 'Product',
    links: [
      { label: 'Features', href: '#' },
      { label: 'How it works', href: '#' },
      { label: 'Pricing', href: '#' },
      { label: 'Security', href: '#' },
      { label: 'Roadmap', href: '#' },
    ],
  },
  company: {
    title: 'Company',
    links: [
      { label: 'About', href: '#' },
      { label: 'Blog', href: '#' },
      { label: 'Careers', href: '#' },
      { label: 'Contact', href: '#' },
    ],
  },
  resources: {
    title: 'Resources',
    links: [
      { label: 'Documentation', href: '#' },
      { label: 'Help Center', href: '#' },
      { label: 'Community', href: '#' },
      { label: 'Founder Stories', href: '#' },
      { label: 'API Reference', href: '#' },
    ],
  },
  legal: {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms of Service', href: '#' },
      { label: 'Cookie Policy', href: '#' },
      { label: 'Data Processing', href: '#' },
    ],
  },
};

export function Footer() {
  return (
    <footer className="bg-[#fafaf8] border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Main footer content */}
        <div className="py-16 lg:py-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 lg:gap-16">
            {/* Product Column */}
            <div className="space-y-6">
              <h3 className="text-sm text-gray-900 uppercase tracking-wider">
                {footerLinks.product.title}
              </h3>
              <ul className="space-y-3">
                {footerLinks.product.links.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-600 hover:text-[#0d5f4e] transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Column */}
            <div className="space-y-6">
              <h3 className="text-sm text-gray-900 uppercase tracking-wider">
                {footerLinks.company.title}
              </h3>
              <ul className="space-y-3">
                {footerLinks.company.links.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-600 hover:text-[#0d5f4e] transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources Column */}
            <div className="space-y-6">
              <h3 className="text-sm text-gray-900 uppercase tracking-wider">
                {footerLinks.resources.title}
              </h3>
              <ul className="space-y-3">
                {footerLinks.resources.links.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-600 hover:text-[#0d5f4e] transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal Column */}
            <div className="space-y-6">
              <h3 className="text-sm text-gray-900 uppercase tracking-wider">
                {footerLinks.legal.title}
              </h3>
              <ul className="space-y-3">
                {footerLinks.legal.links.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-600 hover:text-[#0d5f4e] transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-2xl text-gray-900">
              StartupAI
            </div>
            
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} StartupAI. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}