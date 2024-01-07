# Password Requirements Component

This is a reusable password validation React component that aims to standardize password validations across various front-end applications while providing the flexibility for customization as per different application requirements.

## Installation

To integrate the PasswordRequirements component into your project, execute:

```bash
npm install password-requirements-component
```

## Usage

Firstly, import the component:

```bash
import PasswordRequirements from 'password-requirements-component';
```

To apply default styles, import:

```bash
import 'password-requirements-component/styles';
```

Incorporate the component in your JSX as follows:

```JSX
<PasswordRequirements />
```

## Proprietary Customization

The `PasswordRequirements` component is designed with adaptability in mind, allowing you to customize titles, input fields, and validations by using these props:

```typescript
interface Props {
  titleConfig?: {
    text?: string; // The text for the title.
    customClass?: string; // Custom CSS class for the title.
  };
  inputConfig?: {
    placeholder?: string; // The placeholder for the input field.
    customClass?: string; // Custom CSS class for the input field.
  };
  validationConfig?: ValidationConfig; // Configuration for the validation.
  customValidations?: {
    text: string; // The text for the validation.
    regex: RegExp; // The regular expression for the validation.
    status: boolean; // The status of the validation.
  }[];
}
```

Here's a custom setup example:

```JSX
<PasswordRequirements
  titleConfig={{ text: "Custom Title", customClass: "custom-title" }}
  inputConfig={{ placeholder: "Enter Secure Password", customClass: "custom-input" }}
  customValidations={[
    { text: "Must contain an emoji", regex: /[!😄👍*]/, status: false },
    // Add more custom validations as required
  ]}
/>
```

This will render your PasswordRequirements component tailored with a custom title, placeholder, and validations, such as emoji inclusion.

This component has these validations as default:

- Has a number 0 - 9
- Has one or more of these special characters: !@#$%^&\*
- Has an uppercase letter

## Development and Testing

Start the development server with `npm run dev`

![Local dev screenshot](https://d48uab9n35khj.cloudfront.net/password-requirements-component/dev.png)

and build for production using `npm run build`.

Test cases can be executed with `npm run test`.

It will open a browser window with the test results using Vitest UI.

![Vitest screenshot](https://d48uab9n35khj.cloudfront.net/password-requirements-component/test.png)

To publish the component to NPM, run:

```bash
npm publish
```

## Technical Ecosystem

- React & TypeScript: Offers safe typing and state-of-the-art component modeling.
- Vite: Modern and fast build tooling is utilized.
- ES Module & CommonJS: Compatible with diverse JavaScript environments.
- NPM Package: Find us at https://www.npmjs.com/package/password-requirements-component.

## Using the component in a Next.js app

Go to test-on-nextjs directory:

```bash
cd test-on-nextjs
```

Install dependencies:

```bash
npm install
```

To start the development server, run:

```bash
npm run dev
```

App published on Vercel: https://test-on-nextjs.vercel.app/

Adding this new validation:

```JSX
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
```
