import React from "react";
import { connection } from "next/server";
export const instant = false;
type props = {
  params: Promise<{ jobId: string }>;
};
async function EditJobPage({ params }: props) {
  await connection();
  const { jobId } = await params;
  console.log(jobId);

  return <div>EditJobPage</div>;
}

export default EditJobPage;
