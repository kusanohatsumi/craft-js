"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import Btn from "@/components/user/Btn";
import Text from "@/components/user/Text";
import Image from "next/image";
import { Editor, Frame } from "@craftjs/core";
export default function Home() {
  return (
    <>
      <Editor resolver={{ Text, Btn }}>
        <Frame>
          <div>
            <Text text="Hello world" />
            <Btn text="Hello world">ボタン</Btn>
          </div>
        </Frame>
      </Editor>
    </>
  );
}
