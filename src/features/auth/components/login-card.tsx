import { ReactNode } from "react";

export function LoginCard({ children }: { children: ReactNode }) {
  return (
    <div className="bg-white shadow-lg shadow-light-yellow rounded-2xl p-6 md:p-8">
      {children}
    </div>
  );
}
