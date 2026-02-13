import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Radio, MessageCircle, Users2, Calendar, Clock, Zap } from 'lucide-react';
import { Button } from '../ui/button';

export function LiveSessionsSection() {
  const sessionTypes = [
    {
      icon: MessageCircle,
      title: 'Interactive Q&A Sessions',
      description: 'Ask questions in real-time and get immediate clarification on challenging topics from expert tutors.',
      timing: 'Weekly sessions'
    },
    {
      icon: Users2,
      title: 'Group Study Sessions',
      description: 'Collaborate with peers in small group settings, share insights, and learn from different perspectives.',
      timing: 'Multiple times per week'
    },
    {
      icon: Zap,
      title: 'Exam Practice Workshops',
      description: 'Work through past papers together, learn exam techniques, and develop time management skills.',
      timing: 'Before exam periods'
    }
  ];

  const benefits = [
    'Real-time interaction with tutors',
    'Collaborative learning environment',
    'Recorded sessions for review',
    'Small group sizes for personalized attention',
    'Flexible scheduling options',
    'Access from anywhere'
  ];

  return (
    <section id="live-sessions" className="py-16 md:py-24 bg-secondary/20">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-4">
            <Radio className="h-4 w-4" />
            <span className="text-sm font-medium">Live & Interactive</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
            Live Learning Sessions
          </h2>
          <p className="text-lg text-muted-foreground">
            Join interactive online sessions where learning comes alive. Connect with tutors and fellow students 
            in real-time for an engaging and collaborative educational experience.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {sessionTypes.map((session, index) => {
            const Icon = session.icon;
            return (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl mb-2">{session.title}</CardTitle>
                  <CardDescription className="text-base">{session.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="inline-flex items-center gap-2 text-sm text-muted-foreground bg-muted px-3 py-1.5 rounded-full">
                    <Clock className="h-4 w-4" />
                    {session.timing}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <Card className="border-2 border-primary/20">
            <CardHeader>
              <CardTitle className="text-2xl">What to Expect</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                    </div>
                    <span className="text-muted-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold font-display">How to Join</h3>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Browse Schedule</h4>
                    <p className="text-sm text-muted-foreground">
                      Check our calendar for upcoming live sessions in your subjects of interest.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Register</h4>
                    <p className="text-sm text-muted-foreground">
                      Sign up for sessions that fit your schedule and learning needs.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Attend & Learn</h4>
                    <p className="text-sm text-muted-foreground">
                      Join from any device and participate in interactive learning experiences.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button size="lg" className="text-base">
                <Calendar className="mr-2 h-5 w-5" />
                View Schedule
              </Button>
              <Button size="lg" variant="outline" className="text-base">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
