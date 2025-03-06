import * as React from "react";
import { Html, Button, Hr, Text } from "@react-email/components";

export function MyTemplate() {
  return (
    <Html lang="en">
      <Text>Reset password</Text>
      <Hr />
      <Button href="https://example.com">Click me</Button>
    </Html>
  );
}

export default MyTemplate;
