import { Suspense, lazy } from "react";
import Fallback from "@components/common/fallback";
import { useAuth } from "@features/auth/context/use-auth";

const LoginPage = lazy(() => import("@features/auth/pages/LoginPage"));
const RemotePage = lazy(() => import("@features/remote/pages/remote-page"));

export function RootPage() {
  const { isAuthenticated } = useAuth();

  return (
    <Suspense fallback={<Fallback />}>
      {isAuthenticated ? <RemotePage /> : <LoginPage />}
    </Suspense>
  );
}
