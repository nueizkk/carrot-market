import { cls } from "../libs/utils";
import { useRouter } from "next/router";

interface LayoutProps {
  title?: string;
  canGoBack?: boolean;
  hasTabBar?: boolean;
  children: React.ReactNode;
}
export default function Layout({
  title,
  canGoBack,
  hasTabBar,
  children,
}: LayoutProps) {
  const { pathname, push, back } = useRouter();

  // function movePage(pathName: string) {
  //   push(pathName);
  // }

  return (
    <div>
      <div className="px-4 sticky top-0 left-0 flex justify-between items-center w-full py-2.5 text-md font-medium bg-white border-b">
        <div className="w-[24px] h-[24px] text-gray-800">
          {canGoBack ? (
            <svg
              onClick={() => back()}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 cursor-pointer"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
              />
            </svg>
          ) : null}
        </div>
        {title ? <div className="select-none">{title}</div> : null}
        <div className="w-[24px] h-[24px]" />
      </div>
      <div className={cls(hasTabBar ? "pb-[75px]" : "")}>{children}</div>
      {hasTabBar ? (
        <nav className="fixed bottom-0 w-full max-w-lg pt-2.5 pb-5 bg-white border-t px-4 flex items-center justify-between text-xs text-gray-800">
          {/* 홈 */}
          <div
            className={cls(
              "flex flex-col gap-y-1 items-center cursor-pointer",
              pathname === "/" ? "text-orange-500" : "text-gray-800"
            )}
            onClick={() => push(`/`)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
              />
            </svg>
            <span>홈</span>
          </div>
          {/* 동네생활 */}
          <div
            className={cls(
              "flex flex-col gap-y-1 items-center cursor-pointer",
              pathname === "/community" ? "text-orange-500" : "text-gray-800"
            )}
            onClick={() => push(`/community`)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z"
              />
            </svg>
            <span>동네생활</span>
          </div>
          {/* 라이브 */}
          <div
            className={cls(
              "flex flex-col gap-y-1 items-center cursor-pointer",
              pathname === "/streams" ? "text-orange-500" : "text-gray-800"
            )}
            onClick={() => push(`/streams`)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z"
              />
            </svg>
            <span>라이브</span>
          </div>
          {/* 채팅 */}
          <div
            className={cls(
              "flex flex-col gap-y-1 items-center cursor-pointer",
              pathname === "/chats" ? "text-orange-500" : "text-gray-800"
            )}
            onClick={() => push(`/chats`)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z"
              />
            </svg>

            <span>채팅</span>
          </div>
          {/* 프로필 */}
          <div
            className={cls(
              "flex flex-col gap-y-1 items-center cursor-pointer",
              pathname === "/profile" ? "text-orange-500" : "text-gray-800"
            )}
            onClick={() => push(`/profile`)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <span>프로필</span>
          </div>
        </nav>
      ) : null}
    </div>
  );
}
