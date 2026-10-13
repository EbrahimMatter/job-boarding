import { connection } from "next/server";
type props = {
  params: Promise<{ jobId: string }>;
};

async function ApplicationReviewPage({ params }: props) {
  await connection;
  const { jobId } = await params;
  console.log(jobId);
  return <div>ApplicationReviewPage</div>;
}

export default ApplicationReviewPage;
