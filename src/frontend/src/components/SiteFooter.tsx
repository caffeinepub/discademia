import { SiX, SiFacebook, SiLinkedin, SiInstagram } from 'react-icons/si';
import { Heart } from 'lucide-react';

export function SiteFooter() {
  const currentYear = new Date().getFullYear();
  const appIdentifier = typeof window !== 'undefined' 
    ? encodeURIComponent(window.location.hostname) 
    : 'discademia';

  return (
    <footer className="border-t bg-muted/30">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img 
                src="/assets/generated/discademia-logo.dim_512x512.png" 
                alt="Discademia Logo" 
                className="h-10 w-10"
              />
              <span className="text-xl font-bold font-display text-primary">Discademia</span>
            </div>
            <p className="text-sm text-muted-foreground max-w-md">
              Excellence in O/A Level education. Empowering students to achieve their academic goals through personalized tutoring and comprehensive learning resources.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#tutoring" className="hover:text-primary transition-colors">1:1 Tutoring</a></li>
              <li><a href="#faculty" className="hover:text-primary transition-colors">Our Faculty</a></li>
              <li><a href="#notes" className="hover:text-primary transition-colors">Study Resources</a></li>
              <li><a href="#live-sessions" className="hover:text-primary transition-colors">Live Sessions</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-3">Connect</h3>
            <div className="flex gap-3 mb-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Facebook">
                <SiFacebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="X (Twitter)">
                <SiX className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="LinkedIn">
                <SiLinkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Instagram">
                <SiInstagram className="h-5 w-5" />
              </a>
            </div>
            <p className="text-sm text-muted-foreground">
              <a href="mailto:info@discademia.com" className="hover:text-primary transition-colors">
                info@discademia.com
              </a>
            </p>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p className="flex items-center justify-center gap-1 flex-wrap">
            © {currentYear} Discademia. All rights reserved. | Built with{' '}
            <Heart className="h-4 w-4 text-primary fill-primary" /> using{' '}
            <a 
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appIdentifier}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
