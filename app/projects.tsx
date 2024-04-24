import { Card } from '@/components/ui/card';
import Bird from './bird';

import { projects } from '@/data/projects';

export default function Projects() {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-2xl font-bold">Projects</h2>

      {projects.slice(0, 1).map(({ title, description, details }) => (
        <a href={'/projects/' + title.toLowerCase()} className="relative" key={title}>
          <Bird />

          <Card className="p-4 hover:bg-accent cursor-pointer relative">
            <h3 className="font-bold">{title}</h3>
            <p className="text-sm">{description}</p>
            <p className="text-sm text-muted-foreground">{details}</p>
          </Card>
        </a>
      ))}

      {projects.slice(1, 5).map(({ title, description, details }) => (
        <a href={'/projects/' + title.toLowerCase()} key={title}>
          <Card className="p-4 hover:bg-accent cursor-pointer">
            <h3 className="font-bold">{title}</h3>
            <p className="text-sm">{description}</p>
            <p className="text-sm text-muted-foreground">{details}</p>
          </Card>
        </a>
      ))}

      <a
        href="/projects"
        className="text-center text-[color:var(--link)] font-semibold hover:cursor-pointer">
        View all
      </a>
    </div>
  );
}
