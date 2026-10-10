import { Suspense } from "react";

// ❌ Anti-pattern: Reading params directly in the root page without Suspense
// export default async function JobPage({ params }) { ... }

type JobPageProps = {
  params: Promise<{ id: string }>;
};

export default function JobPage({ params }: JobPageProps) {
  return (
    <main>
      <h1>Job Details</h1>
      {/* Reasoning: The page root renders instantly. The specific job data is isolated 
          inside Suspense, allowing Next.js to prerender the outer shell successfully. */}
      <Suspense fallback={<p>Loading job...</p>}>
        <JobDetails paramsPromise={params} />
      </Suspense>
    </main>
  );
}

async function JobDetails({
  paramsPromise,
}: {
  paramsPromise: Promise<{ id: string }>;
}) {
  // We unwrap the dynamic data ONLY inside the Suspended component
  const { id } = await paramsPromise;

  // Fetch your job data using the ID here...
  return <div>Job ID is: {id}</div>;
}
