import React from "react";

type JobDetailsProps = {
  params: Promise<{ id: string }>;
};

async function JobDetailsPage({ params }: JobDetailsProps) {
  const { id } = await params;
  console.log(id);
  return <div>JobDetailsPage</div>;
}

export default JobDetailsPage;
