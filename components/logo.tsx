import Link from "next/link";
import Image from "next/image";
import { audiowide, muktaVaani } from "@/fonts";
import { cn } from "@/lib/utils";
const Logo = () => {
  return (
    <div className="px-0 py-2">
      <Link href="/" passHref>
        <div className="w-[80px] flex flex-col items-center justify-between">
          <div className="relative w-15 h-10 overflow-hidden">
            <Image
              width={250}
              height={250}
              alt="logo image"
              src="/logo/AES-Logomark_750px-M.png"
              className="w-full h-full object-contain"
              priority
            />
          </div>
          <p
            style={{
              width: "80px",
              fontWeight: "bold",
              fontSize: "10px",
              lineHeight: "10px",
              letterSpacing: "0.1px",
            }}
            className={cn(
              muktaVaani.className,
              "text-[9px] text-purple-purp-aes text-center"
            )}
          >
            <span
              style={{
                fontStyle: "italic",
                fontWeight: "bold",
                fontSize: "10px",
                lineHeight: "10px",
                letterSpacing: "0.1px",
              }}
              className={cn(
                audiowide.className,
                "text-purple-purp-aes text-center"
              )}
            >
              A
            </span>{" "}
            I ENERGY SHOP
          </p>
        </div>
      </Link>
    </div>
  );
};

export default Logo;
