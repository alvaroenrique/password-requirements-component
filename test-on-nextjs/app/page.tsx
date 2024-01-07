"use client";

import PasswordRequirements from "password-requirements-component";
import "password-requirements-component/styles";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <PasswordRequirements
        inputConfig={{
          customClass: "text-black",
        }}
        titleConfig={{
          text: "Password Component on NextJs",
        }}
        customValidations={[
          {
            text: "Has NO consecutive letters *** (Incorrect to have 3 or more consecutive letters)",
            regex: /^(?!.*(.)\1\1).*/,
            status: false,
          },
        ]}
      />
    </main>
  );
}
