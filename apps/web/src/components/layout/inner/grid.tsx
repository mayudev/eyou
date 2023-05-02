"use client";

import { PropsWithChildren } from "react";

interface Props {
  templateColumns: string;
}

export default function Grid({ templateColumns, children }: PropsWithChildren<Props>) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: templateColumns }}>
      {children}
    </div>
  );
}
