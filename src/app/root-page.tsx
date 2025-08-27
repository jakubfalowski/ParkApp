import { Suspense, lazy } from "react";
import { useAuth } from "@features/auth/context/use-auth";

const LoginPage = lazy(() => import("@features/auth/pages/LoginPage"));
const RemotePage = lazy(() => import("@features/remote/pages/remote-page"));

export function RootPage() {
  const { isAuthenticated } = useAuth();
  console.log("isAuthenticated:", isAuthenticated);

  return (
    <Suspense fallback={<div className="p-6">Ładowanie…</div>}>
      {isAuthenticated ? <RemotePage /> : <LoginPage />}
    </Suspense>
  );
}
