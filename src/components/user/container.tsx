import { useNode } from "@craftjs/core";

export default function Container({
  children,
  background,
  padding = 0,
}: {
  children: React.ReactNode;
  background: string;
  padding?: number;
}) {
  const {
    connectors: { connect, drag },
  } = useNode();
  return (
    <>
      <div
        ref={(ref: any) => connect(drag(ref))}
        className="container"
        style={{ background, padding: `${padding}px` }}
      >
        {children}
      </div>
    </>
  );
}
