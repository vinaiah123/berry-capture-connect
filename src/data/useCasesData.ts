
export interface UseCase {
  id: string;
  title: string;
  description: string;
  icon: string;
  image: string;
  examples: string[];
}

export const useCases: UseCase[] = [
  {
    id: 'marketing',
    title: 'Marketing',
    description: 'Create product demos, tutorials, and promotional videos that convert.',
    icon: '📣',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop',
    examples: [
      'Product demos',
      'Marketing tutorials',
      'Social media content',
      'Campaign reviews'
    ]
  },
  {
    id: 'sales',
    title: 'Sales',
    description: 'Personalize your outreach with custom video messages and presentations.',
    icon: '💰',
    image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2032&auto=format&fit=crop',
    examples: [
      'Sales pitches',
      'Product walkthroughs',
      'Proposal explanations',
      'Follow-up messages'
    ]
  },
  {
    id: 'support',
    title: 'Support',
    description: 'Answer customer questions with visual explanations and step-by-step guides.',
    icon: '🛟',
    image: 'https://images.unsplash.com/photo-1531538606174-0f90ff5dce83?q=80&w=1974&auto=format&fit=crop',
    examples: [
      'Help desk responses',
      'Troubleshooting guides',
      'Feature walkthroughs',
      'Customer onboarding'
    ]
  },
  {
    id: 'education',
    title: 'Education',
    description: 'Create engaging instructional content for students and learners of all ages.',
    icon: '🎓',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop',
    examples: [
      'Lesson recordings',
      'Assignment feedback',
      'Student tutorials',
      'Course materials'
    ]
  },
];
