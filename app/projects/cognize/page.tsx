import { Button } from '@/components/ui/button';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function Home() {
  return (
    <main className="p-4 flex flex-col items-start gap-4 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold">Cognize</h1>

      <a href="https://cognize.dev">
        <Button variant="outline">View Deployed Application</Button>
      </a>
      <a href="https://github.com/jorahty/cognize">
        <Button variant="outline">
          <GitHubIcon className="mr-2 h-4 w-4" />
          View Source Code
        </Button>
      </a>
    </main>
  );
}
