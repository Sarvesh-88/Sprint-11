To accelerate the development process and resolve specific logic blockers during the implementation of Unit & Component Testing, I utilized AI (Gemini) during this sprint. Below is the log of the prompts used:

### Prompt 1
**Tool Used:** Gemini  
**Prompt:** "How do I install and configure Jest and React Testing Library (RTL) within a Next.js application for my Phase 1 base architecture?"  
**Help Received:** Understood the installation process for the required development dependencies and how to properly configure the `jest.config.js` and `jest.setup.js` files specifically for the Next.js environment.

### Prompt 2
**Tool Used:** Gemini  
**Prompt:** "How do I write an isolated unit test using React Testing Library to verify that a custom Button component mounts without crashing and correctly renders the text passed to it via props?"  
**Help Received:** Learned the core structure of an RTL test block. Understood how to use the `render()` function to mount the component and `screen.getByText()` to assert that the text payload passed via props is accurately rendered in the DOM.

### Prompt 3
**Tool Used:** Gemini  
**Prompt:** "What is the best way to write tests for other UI components like a Card and an Input field to ensure they meet the execution criteria?"  
**Help Received:** Understood how to structure multiple test cases using `describe` and `test`/`it` blocks. Learned how to utilize different RTL queries (like `getByRole` or `getByPlaceholderText`) to accurately target and test specific payloads in various UI components.

### Prompt 4
**Tool Used:** Gemini  
**Prompt:** "When running my Jest tests for isolated components, the test fails because the Next.js environment or router isn't available. How do I mock Next.js specific features in my test setup?"  
**Help Received:** Learned how to mock Next.js specific modules (like `next/router` or `next/image`) in the Jest setup file, ensuring that the components can mount in isolation without crashing due to framework-specific dependencies.
