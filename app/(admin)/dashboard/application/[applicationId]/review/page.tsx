export const dynamic = "force-dynamic";
type props = {
  params: Promise<{ jobId: string }>;
};

async function ApplicationReviewPage({ params }: props) {
  const { jobId } = await params;
  console.log(jobId);
  return <div>ApplicationReviewPage</div>;
}

export default ApplicationReviewPage;
