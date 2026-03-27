import { AuthCard } from "@/components/auth-card";
import { SiteShell } from "@/components/site-shell";

export default function LoginPage() {
  return (
    <SiteShell>
      <main className="bg-[linear-gradient(180deg,#eef4fb_0%,#ffffff_100%)]">
        <section className="mx-auto max-w-5xl px-4 py-16 lg:px-8 lg:py-20">
          <AuthCard type="login" />
        </section>
      </main>
    </SiteShell>
  );
}
