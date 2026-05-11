import {
  Figma,
  FileCode2,
  Github,
  GitPullRequest,
  Layout,
  MonitorSmartphone,
  Server,
  SquareCode,
  TerminalSquare,
  Wind,
} from 'lucide-react';
import { FaCss3Alt, FaHtml5, FaJs, FaNodeJs, FaReact } from 'react-icons/fa';
import { SiExpress, SiMongodb, SiNextdotjs } from 'react-icons/si';

export const skillGroups = [
  {
    title: 'Frontend Skills',
    description: 'Core technologies used to build responsive, accessible, and polished user interfaces.',
    skills: [
      { name: 'HTML', level: 92, icon: FaHtml5 },
      { name: 'CSS', level: 88, icon: FaCss3Alt },
      { name: 'JavaScript', level: 80, icon: FaJs },
      { name: 'React.js', level: 85, icon: FaReact },
      { name: 'Tailwind CSS', level: 90, icon: Wind },
      { name: 'Responsive Design', level: 92, icon: MonitorSmartphone },
    ],
  },
  {
    title: 'Tools',
    description: 'Daily workflow tools for version control, UI planning, and frontend development.',
    skills: [
      { name: 'Git', level: 82, icon: GitPullRequest },
      { name: 'GitHub', level: 84, icon: Github },
      { name: 'VS Code', level: 90, icon: SquareCode },
      { name: 'Figma', level: 72, icon: Figma },
    ],
  },
  {
    title: 'Currently Learning',
    description: 'Expanding toward full-stack project delivery and more advanced production applications.',
    skills: [
      { name: 'Node.js', level: 58, icon: FaNodeJs },
      { name: 'MongoDB', level: 55, icon: SiMongodb },
      { name: 'Next.js', level: 62, icon: SiNextdotjs },
      { name: 'Express.js', level: 56, icon: SiExpress },
    ],
  },
];

export const skillHighlights = [
  { label: 'Component Architecture', icon: Layout },
  { label: 'Clean UI Implementation', icon: SquareCode },
  { label: 'API Integration', icon: Server },
  { label: 'Semantic Markup', icon: FileCode2 },
  { label: 'Terminal Workflow', icon: TerminalSquare },
];
