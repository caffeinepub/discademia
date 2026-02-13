import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Avatar, AvatarFallback } from '../ui/avatar';
import { GraduationCap } from 'lucide-react';

export function FacultySection() {
  const faculty = [
    {
      name: 'Dr. Sarah Ahmed',
      role: 'Mathematics & Physics Specialist',
      initials: 'SA',
      bio: 'PhD in Applied Mathematics with 12+ years of experience teaching O/A Level students. Specializes in making complex concepts accessible and engaging.',
      subjects: 'Mathematics, Physics, Further Mathematics'
    },
    {
      name: 'Prof. Michael Chen',
      role: 'Chemistry & Biology Expert',
      initials: 'MC',
      bio: 'Former university lecturer with a passion for science education. Known for innovative teaching methods that bring laboratory concepts to life.',
      subjects: 'Chemistry, Biology, Environmental Science'
    },
    {
      name: 'Ms. Aisha Khan',
      role: 'English & Literature Tutor',
      initials: 'AK',
      bio: 'Cambridge-certified educator specializing in English Language and Literature. Helps students develop critical thinking and analytical writing skills.',
      subjects: 'English Language, English Literature'
    },
    {
      name: 'Mr. James Wilson',
      role: 'Economics & Business Studies',
      initials: 'JW',
      bio: 'MBA graduate with real-world business experience. Connects theoretical concepts to practical applications for deeper understanding.',
      subjects: 'Economics, Business Studies, Accounting'
    },
    {
      name: 'Dr. Fatima Hassan',
      role: 'Computer Science Specialist',
      initials: 'FH',
      bio: 'Software engineer turned educator with expertise in programming and computational thinking. Makes coding accessible for all skill levels.',
      subjects: 'Computer Science, ICT, Programming'
    },
    {
      name: 'Mr. David Thompson',
      role: 'History & Geography Tutor',
      initials: 'DT',
      bio: 'Experienced humanities teacher who brings historical events and geographical concepts to life through engaging storytelling and analysis.',
      subjects: 'History, Geography, Global Perspectives'
    }
  ];

  return (
    <section id="faculty" className="py-16 md:py-24 bg-secondary/20">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
            Meet Our Expert Faculty
          </h2>
          <p className="text-lg text-muted-foreground">
            Learn from qualified educators who are passionate about student success. 
            Our tutors bring years of experience and proven track records in O/A Level education.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {faculty.map((member, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <Avatar className="h-16 w-16 border-2 border-primary/20">
                    <AvatarFallback className="bg-primary/10 text-primary font-semibold text-lg">
                      {member.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <CardTitle className="text-xl mb-1">{member.name}</CardTitle>
                    <CardDescription className="flex items-center gap-1 text-primary font-medium">
                      <GraduationCap className="h-4 w-4" />
                      {member.role}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-muted-foreground">{member.bio}</p>
                <div className="pt-2 border-t">
                  <p className="text-xs font-medium text-foreground/70 mb-1">Subjects:</p>
                  <p className="text-sm text-muted-foreground">{member.subjects}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground italic">
            * Sample faculty profiles for demonstration purposes
          </p>
        </div>
      </div>
    </section>
  );
}
