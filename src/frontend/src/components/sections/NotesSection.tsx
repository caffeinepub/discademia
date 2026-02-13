import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { FileText, Download, BookMarked, CheckSquare } from 'lucide-react';
import { Button } from '../ui/button';

export function NotesSection() {
  const resources = [
    {
      icon: FileText,
      title: 'Comprehensive Study Notes',
      description: 'Detailed notes covering all topics in your syllabus, written by subject experts and aligned with exam board requirements.',
      features: ['Topic summaries', 'Key concepts', 'Diagrams & illustrations', 'Exam tips']
    },
    {
      icon: CheckSquare,
      title: 'Mark Schemes & Solutions',
      description: 'Access past paper mark schemes and detailed solutions to understand exactly what examiners are looking for.',
      features: ['Past paper solutions', 'Marking criteria', 'Common mistakes', 'Grade boundaries']
    },
    {
      icon: BookMarked,
      title: 'Revision Guides',
      description: 'Concise revision materials perfect for last-minute preparation and quick reference before exams.',
      features: ['Quick revision sheets', 'Formula lists', 'Key definitions', 'Memory aids']
    },
    {
      icon: Download,
      title: 'Downloadable Resources',
      description: 'All materials available in multiple formats for easy access on any device, online or offline.',
      features: ['PDF downloads', 'Mobile-friendly', 'Print-ready', 'Regular updates']
    }
  ];

  return (
    <section id="notes" className="py-16 md:py-24 bg-background">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
            Notes & Mark Schemes
          </h2>
          <p className="text-lg text-muted-foreground">
            Access a comprehensive library of study materials designed to support your learning journey. 
            Everything you need to prepare effectively for your O/A Level examinations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {resources.map((resource, index) => {
            const Icon = resource.icon;
            return (
              <Card key={index} className="border-2 hover:border-primary/50 transition-colors">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{resource.title}</CardTitle>
                  <CardDescription className="text-base">{resource.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {resource.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="bg-accent/50 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold font-display mb-3">
            Get Access to All Study Materials
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Join Discademia today and unlock our complete library of notes, mark schemes, 
            and revision resources for all O/A Level subjects.
          </p>
          <Button size="lg" className="text-base">
            Access Resources
          </Button>
        </div>
      </div>
    </section>
  );
}
