import { Card } from '@/components/ui/card';

export default function Toolmax() {
  return (
    <main className="p-4 max-w-4xl mx-auto gap-4 flex flex-col">
      <h1 className="text-2xl font-bold">Toolmax</h1>

      <Card className="p-4 gap-4 flex flex-col justify-between">
        <p>
          I am the creator of “Toolmax” — a real-time, physics-based, cross-platform online
          multiplayer game.
        </p>

        <p className="italic">
          Visit{' '}
          <a href="http://first.jorahty.com" className="text-[color:var(--link)] font-semibold">
            first.jorahty.com
          </a>{' '}
          to try the most recent public prototype!
        </p>

        <p>
          (However, this prototype is by no means intended for production; it's one of many
          milestone and serves as a technical demonstration.)
        </p>
      </Card>

      <p>[Video here]</p>

      <p>Toolmax is a long-standing project — I've been working on it since 2018</p>

      <p>
        Toolmax is an <b>online multiplayer game</b> with 3 important properties:
      </p>

      <ul className="ml-4">
        <li>• A physics-based world</li>
        <li>• Real-time competitive multiplayer</li>
        <li>• Cross platform client, optimized for mobile devices (iOS and Android)</li>
      </ul>

      <p>
        Games that have all properties listed above are rare. The few that exist are created by
        massive game companies. I'm personally unsatisfied with the current narrow selection of such
        games, which is why I hope to contribute by making one of my own.
      </p>

      <p>
        A multiplayer game with all properties listed above requires sophisticated server
        infrastructure (dedicated servers, matchmaking) among other things, and are therefore not
        typically within reach of independent game developers. However, I've aimed to understand the
        technology needed for such a game, and have made tremendous progress so far.
      </p>

      <p>Toolmax has seen several iterations over the years.</p>

      <p>The most recent public prototype is currently deployed at first.jorahty.com.</p>

      <p>This recent prototype is exciting because it:</p>

      <ul className="ml-4">
        <li>1. Showcases all 3 of the key properties listed above.</li>
        <li>
          2. Includes an <b>autoscaling fleet of dedicated game servers</b> running on a Kubernetes
          cluster in the cloud.
        </li>
      </ul>

      <p>
        I've refrained from adding creative/stylistic elements (illustration, sound) to this
        prototype because it lacks proper user authentication and scalable matchmaking (neither of
        which are insurmountable challenge; it's merely a question of time.)
      </p>

      <p>
        This prototype's cross-platform client is built with Flutter and runs seamlessly on Web,
        iOS, and Android. Consequently, the client handles both touchscreen controls as well as
        mouse and keyboard.
      </p>

      <p>
        The networking is done with WebSockets (over TCP) only because UDP is not permitted by web
        browsers. Since the simulated Physics is 2D not 3D, less bandwidth is needed, thus
        WebSockets prove sufficient: the latency should be unnoticeable assuming decent network
        connectivity.
      </p>

      <p>
        For this prototype, the physics is simulated with Matter.js, but I expect future prototypes
        to use Box2D on the server and Forge2D on the client, for client-side prediction.
      </p>

      <p>
        I'm excited to leverage Flutter's powerful animation engine when it comes time to add
        animation.
      </p>
    </main>
  );
}
