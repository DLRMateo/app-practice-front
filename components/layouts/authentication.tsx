import { useRouter } from "next/router";
import { ReactNode } from "react";

interface ILayoutTrackProps {
  children: ReactNode
  backRoute: string
  text?: string
}

export default function Layout({ children, backRoute, text }: ILayoutTrackProps) {
  const router = useRouter();
  const backStepTrack = () => {
    router.push(backRoute);
  };

  return (
    <>
      <header className="h-[5%] flex w-full flex-wrap md:!flex-nowrap justify-between mb-8 gap-4 items-center">
        <div className="cursor-pointer flex flex-row justify-center items-center gap-3" onClick={backStepTrack}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
            {text}
        </div>
      </header>
      {children}
    </>
  );
}
