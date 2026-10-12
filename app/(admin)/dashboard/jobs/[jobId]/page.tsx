import React from "react";

type props = {
  params: Promise<{ jobId: string }>;
};

async function JobDetailsPage({ params }: props) {
  const { jobId } = await params;
  return <div>JobDetailsPage</div>;
}

export default JobDetailsPage;
