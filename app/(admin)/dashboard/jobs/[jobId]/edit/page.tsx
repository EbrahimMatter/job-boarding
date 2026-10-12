import React from "react";

type props = {
  params: Promise<{ jobId: string }>;
};
async function EditJobPage({ params }: props) {
  const { jobId } = await params;

  return <div>EditJobPage</div>;
}

export default EditJobPage;
