import { connection } from "next/server";

type props = {
  params: Promise<{ jobId: string }>;
};

async function JobDetailsPage({ params }: props) {
  await connection();
  const { jobId } = await params;
  console.log(jobId);
  return <div>JobDetailsPage</div>;
}

export default JobDetailsPage;
