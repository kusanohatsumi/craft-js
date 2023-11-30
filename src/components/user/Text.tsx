"use client";
import React from "react";
import ContentEditable from "react-contenteditable";
import { useNode } from "@craftjs/core";
import Container from "./container";

export default function Text({
  text,
  fontSize,
  ...props
}: {
  text: string;
  fontSize: number;
}) {
  const {
    connectors: { connect, drag },
    actions: { setProp },
  } = useNode();
  return (
    <>
      <div ref={(ref: any) => connect(drag(ref))} className="border m-2 px-2 ">
        <ContentEditable
          html={text}
          className="inline-block"
          style={{ fontSize: `${fontSize}px`, padding: "10px" }}
          tagName="p"
          onChange={(e) =>
            setProp(
              (props: any) =>
                (props.text = e.target.value.replace(/<\/?[^>]+(>|$)/g, ""))
            )
          }
        />
      </div>
    </>
  );
}
Text.craft = {
  rules: {
    canDrag: (node: any) => node.data.props.text != "Drag",
  },
};
