import ContentEditable from "react-contenteditable";
import { useNode } from "@craftjs/core";

export default function Text({ text }: { text: string }) {
  const {
    connectors: { connect, drag },
    actions: { setProp },
  } = useNode();
  return (
    <>
      <div>
        <ContentEditable
          className="inline-block"
          html={text}
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
