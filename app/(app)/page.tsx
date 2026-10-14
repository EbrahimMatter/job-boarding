import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 dark:bg-black min-h-screen p-8 gap-8">
      <div className="text-center space-y-2">
        <h1 className="font-bold text-4xl font-display">Job Board</h1>
      </div>
    </div>
  );
}
