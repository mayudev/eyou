import "@fontsource/lexend";
import "@/styles/global.scss";
import Taskbar from "../components/layout/taskbar";
import StyledComponentsRegistry from "../lib/registry";

export const metadata = {
  title: "eyou social",
};

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>
          <Taskbar />
          <div>{children}</div>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
