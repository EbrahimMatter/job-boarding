import React from "react";

import { connection } from "next/server";

type props = {
  params: Promise<{ jobId: string }>;
};
async function ApplicationDetailsPage({ params }: props) {
  await connection();
  const { jobId } = await params;
  console.log(jobId);
  return <div>ApplicationDetailsPage</div>;
}

export default ApplicationDetailsPage;
