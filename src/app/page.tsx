import React from "react";
import { Button } from "@/components/ui/button";
import Btn from "@/components/user/Btn";
import Text from "@/components/user/Text";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Text text="Hello world" />
      <Btn text="Hello world">ボタン</Btn>
    </>
  );
}
