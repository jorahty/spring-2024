'use client';

import { usePathname } from 'next/navigation';
import { projects } from '@/data/projects';

import { Button } from '@/components/ui/button';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function Home() {
  const pathname = usePathname();
  const project = projects.find(project => project.title.toLowerCase() === pathname.split('/').pop())!
  
  return (
    <main className="p-4 flex flex-col items-start gap-4 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold">Probability-Puzzle</h1>

      <div className='mb-4'>
        <p className="text-sm">{project.description}</p>
        <p className="text-sm text-muted-foreground">{project.details}</p>
      </div>

      <a href="https://wheel.jorahty.com">
        <Button variant="outline">View Deployed Application</Button>
      </a>
      <a href="https://github.com/jorahty/wheel">
        <Button variant="outline">
          <GitHubIcon className="mr-2 h-4 w-4" />
          View Source Code
        </Button>
      </a>
    </main>
  );
}
