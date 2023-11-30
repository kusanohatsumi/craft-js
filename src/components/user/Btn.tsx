import { useNode } from "@craftjs/core";
import { Button } from "../ui/button";
import Container from "./container";

export default function Btn({
  size,
  variant,
  color,
  children,
}: {
  size: "default" | "sm" | "lg";
  variant: "default" | "secondary" | "link" | "outline";
  color: string;
  children: React.ReactNode;
}) {
  const {
    connectors: { connect, drag },
    actions: { setProp },
  } = useNode();

  return (
    <>
      <Button
        size={size}
        variant={variant}
        color={color}
        className="inline-block"
        ref={(ref: any) => connect(drag(ref))}
      >
        {children}
      </Button>
    </>
  );
}
