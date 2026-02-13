import { Button } from '../ui/button';
import { ArrowRight, BookOpen, Users, Award } from 'lucide-react';

export function HeroSection() {
  const handleGetStarted = () => {
    const tutoringSection = document.querySelector('#tutoring');
    if (tutoringSection) {
      tutoringSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-b from-background to-secondary/20">
      <div className="container py-16 md:py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display text-balance leading-tight">
                Excel in Your <span className="text-primary">O/A Levels</span> with Expert Guidance
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground text-balance max-w-2xl">
                Join hundreds of students achieving academic excellence through personalized 1:1 tutoring, 
                comprehensive study materials, and interactive live sessions tailored to your success.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" onClick={handleGetStarted} className="text-base group">
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" onClick={handleGetStarted} className="text-base">
                Learn More
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t">
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-primary">
                  <BookOpen className="h-5 w-5" />
                  <span className="text-2xl font-bold">500+</span>
                </div>
                <p className="text-sm text-muted-foreground">Study Resources</p>
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-primary">
                  <Users className="h-5 w-5" />
                  <span className="text-2xl font-bold">1000+</span>
                </div>
                <p className="text-sm text-muted-foreground">Students Taught</p>
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-primary">
                  <Award className="h-5 w-5" />
                  <span className="text-2xl font-bold">95%</span>
                </div>
                <p className="text-sm text-muted-foreground">Success Rate</p>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative lg:order-last">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="/assets/generated/discademia-hero-illustration.dim_1600x900.png" 
                alt="Students learning with Discademia" 
                className="w-full h-auto"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-72 h-72 bg-primary/10 rounded-full blur-3xl -z-10" />
            <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-accent/20 rounded-full blur-3xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
