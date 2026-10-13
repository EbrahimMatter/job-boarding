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

      <Card className="w-full max-w-2xl">
        {/* Header Section */}
        <CardHeader className="flex flex-row items-start gap-4">
          <div className="w-14 h-14 shrink-0 flex items-center justify-center border-[3px] border-foreground bg-primary font-bold text-xl">
            MF
          </div>
          <div className="flex flex-col gap-2">
            <CardDescription>Mono Finance</CardDescription>
            <CardTitle>Backend Engineer, Payments</CardTitle>

            {/* Replaced hardcoded spans with the Shadcn Badge component */}
            <div className="flex gap-2 mt-1">
              <Badge variant="default">New</Badge>
              <Badge variant="secondary">Urgent</Badge>
            </div>
          </div>
        </CardHeader>

        {/* Flush Grid Details Section */}
        <div className="grid grid-cols-2 border-t-[3px] border-foreground bg-card">
          {/* Top Left */}
          <div className="p-4 border-b-[3px] border-r-[3px] border-foreground flex flex-col gap-1">
            <span className="label-caps text-muted-foreground">Salary</span>
            <span className="font-bold">€90K–€120K</span>
          </div>
          {/* Top Right */}
          <div className="p-4 border-b-[3px] border-foreground flex flex-col gap-1">
            <span className="label-caps text-muted-foreground">Type</span>
            <span className="font-bold">Full-time</span>
          </div>
          {/* Bottom Left */}
          <div className="p-4 border-r-[3px] border-foreground flex flex-col gap-1">
            <span className="label-caps text-muted-foreground">Location</span>
            <span className="font-bold font-sans">Remote • Remote</span>
          </div>
          {/* Bottom Right */}
          <div className="p-4 flex flex-col gap-1">
            <span className="label-caps text-muted-foreground">Posted</span>
            <span className="font-bold">Today</span>
          </div>
        </div>

        {/* Footer Section */}
        <CardFooter className="gap-3 bg-muted/20">
          <Button variant="default" className="flex-1">
            Apply →
          </Button>
          <Button variant="outline" className="px-4">
            Save
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
