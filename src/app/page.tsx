import { Button } from "@/ui/designsystem/Button";
import { Typographie } from "@/ui/designsystem/typography/Typographie";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-slate-300 min-h-screen p-5">
      <div className="flex gap-5 items-center">
        <Button variant="accent">button</Button>
        <Button variant="outline">button</Button>
        <Button variant="insta">button</Button>
        <Button variant="git">button</Button>
        <Button variant="dribble">button</Button>
      </div>
      <Typographie theme="linear" variant="display" component="h1">
        Typography
      </Typographie>
      <Typographie theme="secondary" variant="h1" component="h1">
        Typography
      </Typographie>
      <Typographie theme="tercery" variant="h2" component="h1">
        Typography
      </Typographie>
      <Typographie theme="error" variant="h3" component="h1">
        Typography
      </Typographie>
      <Typographie theme="success" variant="body-base" component="h1">
        Typography
      </Typographie>
      <Typographie theme="light" variant="body-bold" component="h1">
        Typography
      </Typographie>
      <Typographie theme="primary" variant="body-sm" component="h1">
        Typography
      </Typographie>
      <Typographie variant="pre-title" component="h1">
        Typography
      </Typographie>
      <Typographie variant="button-text" component="h1">
        Typography
      </Typographie>
      <Typographie variant="link" component="h1">
        Typography
      </Typographie>
    </main>
  );
}
