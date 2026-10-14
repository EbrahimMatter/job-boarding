import { Button } from "@/components/ui/button";
import Link from "next/link";
function Dashboard() {
  return (
    <div>
      <div>Admin Dashboard</div>
      <Link href="/dashboard/jobs">
        <Button>Brows jobs</Button>{" "}
      </Link>
    </div>
  );
}

export default Dashboard;
