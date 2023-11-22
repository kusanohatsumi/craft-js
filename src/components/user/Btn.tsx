import { Button } from "../ui/button";

export default function Btn({
  text,
  children,
}: {
  text: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <Button>{children}</Button>
    </>
  );
}
