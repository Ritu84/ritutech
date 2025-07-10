import Link from 'next/link';

const PROJECTS: {
  name: string;
  description: string;
  link: string;
  label?: string;
}[] = [
  {
    name: 'Norton AI',
    description:
      'An ai-powered chrome extension that automates linkedin outreach — from search to connection and follow-ups.',
    link: 'https://norton-ext.vercel.app/',
  },
  {
    name: 'GECR BLOGS',
    description: 'Developed a fully functional and responsive website,facilitating seamless CRUD operations on blogs.',
    link: 'https://gecr-blogs.netlify.app/',
  },
  {
    name: 'FINTRACK',
    description: 'Developed a finance dashboard for tracking and optimising financial performance and key Business matrices.',
    link: 'https://fintrack-finance.netlify.app/',
  },
  {
    name: 'AGROHUB',
    description: "A marketplace app for buying and selling agricultural products.",
    link: 'https://drive.google.com/file/d/1bzP9j0HYsbjJyXvoWv1BVhYdl1HlzFXv/view',
  },

];

export default function Projects() {
  return (
    <section className="projects space-y-3">
      <h2 className="text-sm font-semibold">Projects</h2>
      <ul className="project-list space-y-2">
        {PROJECTS.map((project, index) => {
          return (
            <li className="project-item" key={index}>
              <div className="project-item-content space-y-1">
                <div className="flex items-center gap-2">
                  {project.label && (
                    <p className="text-sm font-semibold">{project.label}/</p>
                  )}
                  <Link href={project.link} className="font-semibold text-sm">
                    {project.name}
                  </Link>
                </div>
                <p className="text-sm">{project.description}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
