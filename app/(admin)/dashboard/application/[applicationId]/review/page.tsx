import { connection } from "next/server";
export const instant = false;
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
