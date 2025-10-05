import { Github, Twitter, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative py-16 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-gradient">Brand</h3>
            <p className="text-muted-foreground">
              Creating extraordinary digital experiences that inspire and engage.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li className="hover:text-primary cursor-pointer transition-colors">Web Development</li>
              <li className="hover:text-primary cursor-pointer transition-colors">Mobile Apps</li>
              <li className="hover:text-primary cursor-pointer transition-colors">UI/UX Design</li>
              <li className="hover:text-primary cursor-pointer transition-colors">Consulting</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li className="hover:text-primary cursor-pointer transition-colors">About Us</li>
              <li className="hover:text-primary cursor-pointer transition-colors">Our Team</li>
              <li className="hover:text-primary cursor-pointer transition-colors">Careers</li>
              <li className="hover:text-primary cursor-pointer transition-colors">Contact</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-all">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-all">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-all">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-all">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-border text-center text-muted-foreground">
          <p>&copy; 2024 Brand. All rights reserved. Crafted with passion.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
