import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-hairline">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-6 py-14 md:flex-row md:items-end md:justify-between">
        <div>
          <div className="flex items-center gap-2 text-sm">
            <span className="grid h-7 w-7 place-items-center rounded-full bg-foreground text-background">
              <span className="font-display text-[15px] leading-none">a</span>
            </span>
            <span>Govardhan — Independent Developer</span>
          </div>
          <p className="mt-4 max-w-sm text-sm text-muted-foreground">
            Designed and built by hand in {new Date().getFullYear()}. No
            templates were harmed in the making of this site.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-x-16 gap-y-2 text-sm text-muted-foreground sm:grid-cols-3">
          {[
            ["Work", "#work"],
            ["Services", "#services"],
            ["Stack", "#stack"],
            ["Process", "#process"],
            ["Words", "#words"],
            ["Contact", "#contact"],
          ].map(([l, h]) => (
            <Link
              key={h}
              href={h}
              className="link-underline w-fit text-foreground/80 hover:text-foreground"
            >
              {l}
            </Link>
          ))}
        </div>
      </div>
      <div className="border-t border-hairline">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 text-xs text-muted-foreground">
          <span>© {new Date().getFullYear()} Govardhan Katta</span>
          <div className="flex items-center gap-5">
            <Link href="#" className="hover:text-foreground">
              Privacy
            </Link>
            <Link href="#" className="hover:text-foreground">
              Terms
            </Link>
            <Link href="#top" className="hover:text-foreground">
              Back to top ↑
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
