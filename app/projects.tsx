import { Card } from '@/components/ui/card';

export default function Projects() {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-2xl font-bold">Projects</h2>

      <Card className="p-4 hover:bg-accent cursor-pointer">
        <h3 className="font-bold">Toolmax</h3>
        <p className="text-sm">Online multiplayer game</p>
        <p className="text-sm">Made with Kubernetes, Node.js, Flutter</p>
      </Card>
      <Card className="p-4 hover:bg-accent">
        <h3 className="font-bold">Toolmax</h3>
        <p className="text-sm">Online multiplayer game</p>
        <p className="text-sm">Made with Kubernetes, Node.js, Flutter</p>
      </Card>
    </div>
  );
}
