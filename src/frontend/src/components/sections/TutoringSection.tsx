import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Video, Calendar, Target, TrendingUp, Clock, CheckCircle } from 'lucide-react';
import { Button } from '../ui/button';

export function TutoringSection() {
  const features = [
    {
      icon: Video,
      title: 'Personalized Learning',
      description: 'One-on-one sessions tailored to your learning style, pace, and academic goals.'
    },
    {
      icon: Calendar,
      title: 'Flexible Scheduling',
      description: 'Book sessions at times that work for you, with easy rescheduling options.'
    },
    {
      icon: Target,
      title: 'Focused Curriculum',
      description: 'Targeted lessons covering all O/A Level subjects with exam-focused strategies.'
    },
    {
      icon: TrendingUp,
      title: 'Track Your Progress',
      description: 'Regular assessments and feedback to monitor improvement and identify areas for growth.'
    },
    {
      icon: Clock,
      title: 'Efficient Sessions',
      description: 'Optimized 60-minute sessions designed to maximize learning and retention.'
    },
    {
      icon: CheckCircle,
      title: 'Proven Results',
      description: 'Join students who have achieved top grades with our expert tutoring approach.'
    }
  ];

  return (
    <section id="tutoring" className="py-16 md:py-24 bg-background">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
            1:1 Tutoring Classes
          </h2>
          <p className="text-lg text-muted-foreground">
            Experience personalized education designed to unlock your full potential. 
            Our expert tutors provide individualized attention to help you master every concept.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="border-2 hover:border-primary/50 transition-colors">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <Button size="lg" className="text-base">
            Book Your First Session
          </Button>
        </div>
      </div>
    </section>
  );
}
