import { SignUp } from "@clerk/nextjs";
import { dark } from "@clerk/themes";

export default function Page() {
  return (
    <SignUp
      appearance={{
        baseTheme: dark,
        variables: { colorPrimary: "#90EE90" },
      }}
    />
  );
}
