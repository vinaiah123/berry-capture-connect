
export interface UseCase {
  id: string;
  title: string;
  description: string;
  icon: string;
  image: string;
  examples: string[];
  benefits?: string[];
  videoUrl?: string;
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
    ],
    benefits: [
      'Increase engagement rates by 40%',
      'Save 65% of content creation time',
      'Create 3x more marketing assets',
      'Boost conversion rates by 25%'
    ],
    videoUrl: '/demo-marketing.mp4'
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
    ],
    benefits: [
      'Close 30% more deals',
      'Reduce sales cycle by 35%',
      'Increase response rates by 3x',
      'Improve demo-to-meeting conversion'
    ],
    videoUrl: '/demo-sales.mp4'
  },
  {
    id: 'support',
    title: 'Support',
    description: 'Deliver fast, clear, and personal customer support with video messages.',
    icon: '🛟',
    image: 'https://images.unsplash.com/photo-1531538606174-0f90ff5dce83?q=80&w=1974&auto=format&fit=crop',
    examples: [
      'Visual ticket responses',
      'Asynchronous support',
      'Self-service resources',
      'Troubleshooting guides'
    ],
    benefits: [
      'Reduce resolution time by 40%',
      'Improve satisfaction by 62%',
      'Enhance information retention by 60%',
      'Create human connection with video'
    ],
    videoUrl: '/demo-support.mp4'
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
    ],
    benefits: [
      'Increase student engagement by 82%',
      'Improve comprehension by 63%',
      'Save 45% time on feedback',
      'Create 3x more educational content'
    ],
    videoUrl: '/demo-education.mp4'
  },
];
