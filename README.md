# Password Requirements Component

This is a reusable password requirements component built with React.

## Installation

To install this component in your project, run:

```bash
npm install password-requirements-component
```

## Usage

First, import the component:

```bash
import PasswordRequirements from 'password-requirements-component';
```

(Optional) This component has a default style. To use it, import the style:

```bash
import 'password-requirements-component/styles';
```

Then, you can use it in your JSX code:

```JSX
<PasswordRequirements />
```

## Props

The `PasswordRequirements` component accepts the following props:

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

You can use these props to customize the title, input field, and validations. For example:

```JSX
<PasswordRequirements
  titleConfig={{ text: "Custom Title", customClass: "custom-title" }}
  inputConfig={{ placeholder: "Custom Placeholder", customClass: "custom-input" }}
  customValidations={[
    { text: "Must contain an emoji", regex: /[!😄👍*]/, status: false }
  ]}
/>
```

This will render a PasswordRequirements component with a custom title and placeholder, and two custom validations.

This component has these validations as default:

- Has a number 0 - 9
- Has one or more of these special characters: !@#$%^&\*
- Has an uppercase letter

## Development

Go to the app directory:

```bash
cd app
```

Install dependencies:

```bash
npm install
```

To start the development server, run:

```bash
npm run dev
```

![Local dev screenshot](https://d48uab9n35khj.cloudfront.net/password-requirements-component/dev.png)

To build the component for production, run:

```bash
npm run build
```

To publish the component to NPM, run:

```bash
npm publish
```

## Testing

This project uses Vitest for testing.

To run the tests, use the following command:

```bash
npm run test
```

It will open a browser window with the test results using Vitest UI.

![Vitest screenshot](https://d48uab9n35khj.cloudfront.net/password-requirements-component/test.png)

# Technical Details

This component is built with React and TypeScript. It uses Vite for development and build processes.

The component is published as a package with both CommonJS (dist/index.umd.js) and ES Module (dist/index.es.js) builds. Type declarations are included in dist/index.d.ts.

The component's styles are included in dist/style.css.

For testing, this component uses Vitest with react-testing-library.

NPM public package URL: https://www.npmjs.com/package/password-requirements-component

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
