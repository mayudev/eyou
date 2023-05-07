import { PropsWithChildren } from "react";
import WindowManager from "../../components/layout/windowManager";
import Window from "../../components/layout/window";
import WindowColumn from "../../components/layout/windowColumn";

export default function MainLayout({ children }: PropsWithChildren<{}>) {
  return (
    <WindowManager grid="1fr minmax(440px, 640px) 220px 1fr" padding={10}>
      <span></span>
      <Window title="Feed"></Window>
      <WindowColumn>
        <Window title="You"></Window>
        <Window title="Navigation"></Window>
      </WindowColumn>
      <span></span>
    </WindowManager>
  );
}
