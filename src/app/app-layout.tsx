import { Outlet } from "react-router-dom";

export default function AppLayout() {
  return (
    <div className="min-h-dvh bg-white text-dark-blue">
      <main className="mx-auto max-w-4xl p-6">
        <Outlet />
      </main>
    </div>
  );
}
