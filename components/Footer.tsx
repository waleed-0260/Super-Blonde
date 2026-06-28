import Link from 'next/link';
import { LinkIcon } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-graphite text-white/80 pt-14 pb-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <p
              className="text-2xl font-bold tracking-wider text-white mb-1"
              style={{ fontFamily: 'var(--font-fraunces)' }}
            >
              SUPER BLONDE
            </p>
            <p
              className="text-xs tracking-widest text-white/50 mb-3"
              style={{ fontFamily: 'var(--font-jost)' }}
            >
              by Serai Group
            </p>
            <p
              className="text-sm text-white/60 italic"
              style={{ fontFamily: 'var(--font-fraunces)' }}
            >
              Chic, Contemporary. All-Day.
            </p>
            <div className="flex items-center gap-4 mt-5">
              <a
                href="https://instagram.com/superblonde.byseraigroup"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-white/60 hover:text-champagne transition-colors"
                style={{ fontFamily: 'var(--font-jost)' }}
              >
                <LinkIcon size={16} />
                @superblonde.byseraigroup
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p
              className="text-xs tracking-widest text-white/40 uppercase mb-4"
              style={{ fontFamily: 'var(--font-jost)' }}
            >
              Navigate
            </p>
            <div className="flex flex-col gap-3">
              {[
                { label: 'Home', href: '/' },
                { label: 'Menu', href: '/menu' },
                { label: 'Contact', href: '/contact' },
                { label: 'Reserve a Table', href: 'https://reservego.co' },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-white/60 hover:text-white transition-colors"
                  style={{ fontFamily: 'var(--font-jost)' }}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Info */}
          <div>
            <p
              className="text-xs tracking-widest text-white/40 uppercase mb-4"
              style={{ fontFamily: 'var(--font-jost)' }}
            >
              Visit Us
            </p>
            <div
              className="flex flex-col gap-2 text-sm text-white/60"
              style={{ fontFamily: 'var(--font-jost)' }}
            >
              <p>4th Floor, KLGCC Mall</p>
              <p>No.1, Jalan Bukit Kiara 1</p>
              <p>Bukit Kiara, 60000 KL</p>
              <p className="mt-2">Daily 10AM – 10PM</p>
              <a
                href="tel:+60320112695"
                className="mt-1 hover:text-champagne transition-colors"
              >
                +60 3-2011 2695
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-3">
          <p
            className="text-xs text-white/30"
            style={{ fontFamily: 'var(--font-jost)' }}
          >
            © {new Date().getFullYear()} Super Blonde. Part of the Serai Group.
          </p>
          <p
            className="text-xs text-white/30"
            style={{ fontFamily: 'var(--font-jost)' }}
          >
            The Grounds of Serai · KLGCC Mall · Level 4
          </p>
        </div>
      </div>
    </footer>
  );
}
