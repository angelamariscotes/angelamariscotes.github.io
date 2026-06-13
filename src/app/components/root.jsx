import { Outlet } from "react-router";
import Navigation from "./navigation";

export default function Root() {
  return (
    <div className="min-h-screen bg-[#E8E4DF]">
      <Navigation />
      <Outlet />
    </div>
  );
}
