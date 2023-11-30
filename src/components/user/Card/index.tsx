import { Button } from "@/components/ui/button";
import Text from "../Text";
import Container from "../container";
import { Element, useNode } from "@craftjs/core";
import Btn from "../Btn";
import { useRef } from "react";

export function Cardtext({ children }: { children: React.ReactNode }) {
  const {
    connectors: { connect },
  } = useNode();
  const target = useRef(null);
  return (
    <div
      ref={(ref: any) => connect(ref)}
      onClick={() => {
        console.log(target);
      }}
      className="text-only"
    >
      {children}
    </div>
  );
}
Cardtext.craft = {
  rules: {
    canMoveIn: (incomingNodes: any) =>
      incomingNodes.every(
        (incomingNode: any) => incomingNode.data.type === Text
      ),
  },
};

export function Cardbtn({ children }: { children: React.ReactNode }) {
  const {
    connectors: { connect, drag },
  } = useNode();
  return <div ref={(ref: any) => connect(ref)}>{children}</div>;
}
Cardbtn.craft = {
  rules: {
    canMoveIn: (incomingNodes: any) =>
      incomingNodes.every(
        (incomingNode: any) => incomingNode.data.type === Btn
      ),
  },
};

export default function Card({
  padding = 20,
}: {
  background: string;
  padding?: number;
}) {
  const {
    connectors: { connect, drag },
  } = useNode();

  return (
    <>
      <Container background="#ccc" padding={padding}>
        <Element id="text" is={Cardtext} canvas>
          <Text text="Title" fontSize={20} />
          <Text text="text" fontSize={18} />
        </Element>
        <Element id="buttons" is={Cardbtn} canvas>
          <Btn size="default" variant="default" color="primary">
            Click
          </Btn>
        </Element>
      </Container>
    </>
  );
}
