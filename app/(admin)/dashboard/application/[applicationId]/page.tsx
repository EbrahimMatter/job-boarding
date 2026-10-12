import React from "react";

type props = {
  params: Promise<{ jobId: string }>;
};
async function ApplicationDetailsPage({ params }: props) {
  const { jobId } = await params;
  console.log(jobId);
  return <div>ApplicationDetailsPage</div>;
}

export default ApplicationDetailsPage;
