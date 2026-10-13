import React from "react";
export const dynamic = "force-dynamic";

type props = {
  params: Promise<{ jobId: string }>;
};

async function JobDetailsPage({ params }: props) {
  const { jobId } = await params;
  console.log(jobId);
  return <div>JobDetailsPage</div>;
}

export default JobDetailsPage;
