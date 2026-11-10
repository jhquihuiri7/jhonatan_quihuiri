import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { social } from "@/constants";

export default function Footer() {
  return (
    <footer className="mx-auto max-w-[1200px] px-5 pb-12 pt-20 sm:px-10">
      <div className="rounded-[22px] bg-gradient-to-br from-brand-violet/75 to-brand-rose/75 p-px">
        <div className="flex flex-wrap items-center justify-between gap-5 rounded-[21px] bg-night-900 px-[clamp(20px,4vw,40px)] py-[26px]">
          <div className="flex items-center gap-4">
            <Image src="/logo.png" alt="" width={44} height={44} className="h-11 w-11 object-contain" />
            <div>
              <p className="text-lg font-bold">Thank you for visiting my portfolio!</p>
              <p className="mt-1 text-sm text-lilac-300">
                Developed by <strong className="font-semibold text-white">Jhonatan Quihuiri</strong>
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
            {social.map(({ label, url }) => (
              <a
                key={label}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[44px] items-center gap-2 rounded-full border border-white/20 px-5 text-sm font-medium text-white transition-colors hover:border-white/40 hover:bg-white/10"
              >
                {label}
                <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
