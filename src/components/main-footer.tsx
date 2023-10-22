import Link from "next/link";

export default function MainFooter() {
  return (
    <footer className="flex flex-row h-16 border-t">
      <div className="mx-auto max-w-4xl flex w-full flex-row items-center justify-between px-8">
        <p className="text-xs font-light text-muted-foreground">
          developed by{" "}
          <span className="font-semibold">
            <Link href={"https://github.com/ceedadev"}>ceedadev</Link>
          </span>
        </p>
        <p className="text-xs text-muted-foreground">WoWa 2023</p>
      </div>
    </footer>
  );
}
