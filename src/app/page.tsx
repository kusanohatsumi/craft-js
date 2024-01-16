"use client";
import React from "react";
import { Editor, Element, Frame } from "@craftjs/core";
import Btn from "@/components/user/Btn";
import Text from "@/components/user/Text";
import Card from "@/components/user/Card";
import { Cardtext, Cardbtn } from "@/components/user/Card";

import Container from "@/components/user/container";
import SettingPanel from "@/components/SettingPanel";
export default function Home() {
  return (
    <>
      <Editor resolver={{ Btn, Card, Container, Text, Cardtext, Cardbtn }}>
        <SettingPanel />
        <Frame>
          <div style={{ background: "#F4F4F4", padding: "16px" }}>
            <Element is={Container} background="#E2E8F0" padding={8} canvas>
              <Card background="pink" padding={20} />
            </Element>

            <Element is={Container} background="#E2E8F0" padding={8} canvas>
              <Text text="編集可能コンポーネント" fontSize={20} />
              <Text text="編集可能コンポーネント" fontSize={20} />
              <Btn size="sm" variant="default" color="skyblue">
                Click
              </Btn>
            </Element>
            <Element is={Container} background="pink" padding={8} canvas>
              <Text text="title" fontSize={20} />
              <Btn size="sm" variant="default" color="skyblue">
                Click
              </Btn>
            </Element>
          </div>
        </Frame>
      </Editor>
    </>
  );
}
