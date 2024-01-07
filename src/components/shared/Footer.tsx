import { Container } from "@/components/shared/Container";
import Logo from "@/components/shared/Logo";

export function Footer({ className }: { className?: string; id?: string }) {
  return (
    <Container className={className}>
      <div className="border-t border-slate-300 " />
      <div className="py-8">
        <div className="text-center text-sm">
          Built by Dat Dao Vu - {new Date().getFullYear()}
        </div>
      </div>
    </Container>
  );
}
