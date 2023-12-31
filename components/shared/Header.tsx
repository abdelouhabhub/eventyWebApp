import Link from "next/link"
import Image from "next/image"
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs"
import { Button } from "../ui/button"
import NavItems from "./NavItems"
import MobileNav from "./MobileNav"


const Header = () => {
  return (

    <header className="w-full border-b">
      <div className="wrapper flex items-center justify-between"><Link href="/" className="w-36">
        <Image
          src="/assets/images/logo.png"
          alt="logo"
          width={38}
          height={38}
        /></Link>

        <SignedIn>
          <nav className="md:flex-between hidden w-full max-w-xs">
            <NavItems />
          </nav>
        </SignedIn>
        <div className="flex w-32 justify-end gab-3">
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
            <MobileNav />
          </SignedIn>

          <SignedOut>
            <Button
              size="lg"
              asChild
              className="rounded-full size=lg"
              style={{
                background: 'linear-gradient(45deg, #0052cc, #117eff)',
                color: '#ffffff',
              }}
            >
              <Link href="/sign-in">
                Login
              </Link>
            </Button>
          </SignedOut>
        </div>

      </div>
    </header>
  )
}

export default Header