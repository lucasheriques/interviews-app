import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { getCurrentUser } from "@/lib/session";
import { UserId } from "@/types";
import { getUserProfileUseCase } from "@/use-cases/users";
import { LayoutDashboard, Lightbulb, Loader2Icon, LogOut } from "lucide-react";
import Link from "next/link";
import { Suspense, cache } from "react";
import { MenuButton } from "./menu-button";
import { ModeToggle } from "./mode-toggle";

const profilerLoader = cache(getUserProfileUseCase);

export async function Header() {
  const user = await getCurrentUser();

  return (
    <div className="border-b py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex gap-8 items-center">
          <Link href="/" className="flex gap-2 items-center text-xl">
            <Lightbulb />
            <div className="hidden md:block">APP</div>
          </Link>

          <div className="flex items-center gap-2">
            {user && (
              <Button
                variant={"link"}
                asChild
                className="flex items-center justify-center gap-2"
              >
                <Link href={"/dashboard"}>
                  <LayoutDashboard className="w-4 h-4" /> Dashboard
                </Link>
              </Button>
            )}
            <Button
              variant={"link"}
              asChild
              className="flex items-center justify-center gap-2"
            >
              <Link href={"/interview"}>
                <LayoutDashboard className="w-4 h-4" /> Interview
              </Link>
            </Button>
          </div>
        </div>

        <div className="flex items-center justify-between gap-5">
          <Suspense
            fallback={
              <div className="flex items-center justify-center w-40">
                <Loader2Icon className="animate-spin w-4 h-4" />
              </div>
            }
          >
            <HeaderActions />
          </Suspense>
        </div>
      </div>
    </div>
  );
}

async function ProfileAvatar({ userId }: { userId: number }) {
  const profile = await profilerLoader(userId);

  return (
    <Avatar>
      <AvatarImage src={"/next.svg"} />
      <AvatarFallback>
        {profile.displayName?.substring(0, 2).toUpperCase() ?? "AA"}
      </AvatarFallback>
    </Avatar>
  );
}

async function HeaderActions() {
  const user = await getCurrentUser();
  const isSignedIn = !!user;

  return (
    <>
      {isSignedIn ? (
        <>
          <div className="hidden md:block">
            <ModeToggle />
          </div>
          <ProfileDropdown userId={user.id} />
          <div className="md:hidden">
            <MenuButton />
          </div>
        </>
      ) : (
        <>
          <ModeToggle />

          <Button asChild variant="secondary">
            <Link href="/sign-in">Sign In</Link>
          </Button>
        </>
      )}
    </>
  );
}
async function ProfileDropdown({ userId }: { userId: UserId }) {
  const profile = await profilerLoader(userId);
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Suspense
          fallback={
            <div className="bg-gray-800 rounded-full h-10 w-10 shrink-0 flex items-center justify-center">
              ..
            </div>
          }
        >
          <ProfileAvatar userId={userId} />
        </Suspense>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="space-y-2">
        <DropdownMenuLabel>{profile.displayName}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild className="cursor-pointer">
          <Link className="flex items-center" href={"/api/sign-out"}>
            <LogOut className="w-4 h-4 mr-2" />
            Sign Out
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
