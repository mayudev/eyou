import { PropsWithChildren } from "react";
import WindowManager from "../../components/layout/windowManager";
import Window from "../../components/layout/window";
import WindowColumn from "../../components/layout/windowColumn";
import { BaseAccount } from "types";
import YouPanel from "./you";
import Navigation from "./navigation";

async function getData(): Promise<BaseAccount> {
  // TODO return currently logged user's data (username, avatar, acct)
  return {
    id: "1",
    username: "testing",
    display_name: "testing",
    avatar: "/d.jpg",
    acct: "testing@localhost",
    url: "http://localhost/@testing@localhost",
  };
}

export default async function MainLayout({ children }: PropsWithChildren<{}>) {
  const data = await getData();

  return (
    <WindowManager grid="1fr minmax(440px, 640px) 220px 1fr" padding={10}>
      <span></span>
      <Window title="Feed">{children}</Window>
      <WindowColumn>
        <Window title="You">
          <YouPanel data={data} />
        </Window>
        <Window title="Navigation">
          <Navigation />
        </Window>
      </WindowColumn>
      <span></span>
    </WindowManager>
  );
}
