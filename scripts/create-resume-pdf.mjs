import { mkdir, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';

const outputPath = resolve('public', 'Shanto Paul Resume.pdf');

const page = {
  width: 612,
  height: 792,
  marginX: 54,
};

const colors = {
  ink: '0.06 0.09 0.16',
  muted: '0.32 0.37 0.45',
  brand: '0.10 0.42 0.78',
  soft: '0.93 0.97 1.00',
  line: '0.83 0.88 0.94',
};

function escapePdfText(text) {
  return String(text).replace(/\\/g, '\\\\').replace(/\(/g, '\\(').replace(/\)/g, '\\)');
}

function textLine(text, x, y, size = 10, color = colors.ink, font = 'F1') {
  return `BT /${font} ${size} Tf ${color} rg ${x} ${y} Td (${escapePdfText(text)}) Tj ET`;
}

function rect(x, y, width, height, color) {
  return `${color} rg ${x} ${y} ${width} ${height} re f`;
}

function rule(x, y, width) {
  return `${colors.line} RG 0.8 w ${x} ${y} m ${x + width} ${y} l S`;
}

function section(title, y) {
  return [
    textLine(title.toUpperCase(), page.marginX, y, 10, colors.brand, 'F2'),
    rule(page.marginX, y - 7, page.width - page.marginX * 2),
  ];
}

function bullet(text, x, y) {
  return [
    textLine('•', x, y, 10, colors.brand, 'F2'),
    textLine(text, x + 12, y, 9.4, colors.ink),
  ];
}

const content = [
  rect(0, 0, page.width, page.height, '1 1 1'),
  rect(0, 714, page.width, 78, colors.soft),
  rect(page.marginX, 707, 74, 4, colors.brand),
  textLine('SHANTO PAUL', page.marginX, 746, 24, colors.ink, 'F2'),
  textLine('Frontend Developer', page.marginX, 724, 12, colors.brand, 'F2'),
  textLine('Bangladesh  |  hello.shanto@example.com  |  github.com/shantopaul', 318, 748, 9, colors.muted),
  textLine('React.js  |  Tailwind CSS  |  Responsive Design  |  Framer Motion', 318, 731, 9, colors.muted),

  ...section('Professional Summary', 675),
  textLine('Frontend developer focused on building modern, responsive, and animated web applications using React.js', page.marginX, 650, 10, colors.ink),
  textLine('and Tailwind CSS. Comfortable creating clean UI, reusable components, smooth interactions, and client-ready', page.marginX, 635, 10, colors.ink),
  textLine('portfolio, landing page, and website experiences for freelance and professional use.', page.marginX, 620, 10, colors.ink),

  ...section('Core Skills', 584),
  ...bullet('Frontend: HTML, CSS, JavaScript, React.js, Tailwind CSS, Responsive Design', page.marginX, 560),
  ...bullet('Tools: Git, GitHub, VS Code, Figma, Vite, npm workflow', page.marginX, 543),
  ...bullet('UI Quality: Modern layouts, dark/light themes, accessibility basics, smooth animations', page.marginX, 526),
  ...bullet('Currently Learning: Node.js, MongoDB, Next.js, Express.js', page.marginX, 509),

  ...section('Services', 474),
  ...bullet('Frontend Development: responsive websites with clean, maintainable component structure', page.marginX, 450),
  ...bullet('React Development: interactive single-page interfaces and reusable UI components', page.marginX, 433),
  ...bullet('Landing Page Design: modern pages with strong visual hierarchy and conversion-focused CTA sections', page.marginX, 416),
  ...bullet('Bug Fixing and Redesign: layout repair, responsive fixes, UI polish, and website modernization', page.marginX, 399),

  ...section('Selected Projects', 364),
  textLine('Modern Portfolio Website', page.marginX, 340, 11, colors.ink, 'F2'),
  textLine('Responsive animated portfolio with navbar, hero, about, skills, services, projects, testimonials, contact,', page.marginX, 324, 9.4, colors.ink),
  textLine('dark/light mode, EmailJS contact form, and Vercel-ready React/Vite structure.', page.marginX, 310, 9.4, colors.ink),
  textLine('Tech: React, Tailwind CSS, Framer Motion, EmailJS', page.marginX, 295, 9.2, colors.brand, 'F2'),

  textLine('Practice Project Set', page.marginX, 267, 11, colors.ink, 'F2'),
  textLine('Weather App, Movie Search App, SaaS Landing Page, GitHub Finder, and responsive UI practice builds.', page.marginX, 251, 9.4, colors.ink),
  textLine('Focus: API integration concepts, card grids, responsive layouts, search interfaces, and clean UI structure.', page.marginX, 237, 9.4, colors.ink),

  ...section('Education and Goals', 202),
  ...bullet('Continuing frontend development learning with focus on React, responsive UI, and production workflows', page.marginX, 178),
  ...bullet('Goal: build real client applications, support freelance work, and grow toward MERN/full-stack development', page.marginX, 161),

  ...section('Professional Strengths', 126),
  ...bullet('Clean spacing, readable typography, mobile-first layouts, and consistent visual systems', page.marginX, 102),
  ...bullet('Client-focused communication, practical problem solving, and attention to UI details', page.marginX, 85),
  textLine('Portfolio Repository: github.com/shantopaul/Professional-Personal-Portfolio', page.marginX, 48, 9.3, colors.muted),
];

const stream = content.join('\n');

const objects = [
  '<< /Type /Catalog /Pages 2 0 R >>',
  '<< /Type /Pages /Kids [3 0 R] /Count 1 >>',
  `<< /Type /Page /Parent 2 0 R /MediaBox [0 0 ${page.width} ${page.height}] /Resources << /Font << /F1 4 0 R /F2 5 0 R >> >> /Contents 6 0 R >>`,
  '<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>',
  '<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>',
  `<< /Length ${Buffer.byteLength(stream, 'utf8')} >>\nstream\n${stream}\nendstream`,
];

let pdf = '%PDF-1.4\n';
const offsets = [0];

objects.forEach((object, index) => {
  offsets.push(Buffer.byteLength(pdf, 'utf8'));
  pdf += `${index + 1} 0 obj\n${object}\nendobj\n`;
});

const xrefOffset = Buffer.byteLength(pdf, 'utf8');
pdf += `xref\n0 ${objects.length + 1}\n`;
pdf += '0000000000 65535 f \n';
offsets.slice(1).forEach((offset) => {
  pdf += `${String(offset).padStart(10, '0')} 00000 n \n`;
});
pdf += `trailer\n<< /Size ${objects.length + 1} /Root 1 0 R >>\nstartxref\n${xrefOffset}\n%%EOF\n`;

await mkdir(dirname(outputPath), { recursive: true });
await writeFile(outputPath, pdf, 'binary');
console.log(`Created ${outputPath}`);
