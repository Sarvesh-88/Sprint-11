@echo off
echo ===================================================
echo Phase 1: Jest ^& RTL Setup Starting...
echo ===================================================

echo.
echo 1. Installing dependencies... (This might take a minute)
call npm install -D jest jest-environment-jsdom @testing-library/react @testing-library/jest-dom

echo.
echo 2. Creating jest.config.js...
echo const nextJest = require('next/jest') > jest.config.js
echo const createJestConfig = nextJest({ dir: './' }) >> jest.config.js
echo const customJestConfig = { setupFilesAfterEnv: ['^<rootDir^>/jest.setup.js'], testEnvironment: 'jest-environment-jsdom' } >> jest.config.js
echo module.exports = createJestConfig(customJestConfig) >> jest.config.js

echo.
echo 3. Creating jest.setup.js...
echo import '@testing-library/jest-dom' > jest.setup.js

echo.
echo 4. Creating Component directories...
if not exist components\Button mkdir components\Button
if not exist components\Card mkdir components\Card
if not exist components\Input mkdir components\Input

echo.
echo 5. Generating Button Component ^& Test...
echo import React from 'react'; > components\Button\Button.tsx
echo interface ButtonProps { label: string; onClick?: () =^> void; } >> components\Button\Button.tsx
echo export const Button = ({ label, onClick }: ButtonProps) =^> { >> components\Button\Button.tsx
echo   return ( >> components\Button\Button.tsx
echo     ^<button onClick={onClick} className="btn-primary"^> >> components\Button\Button.tsx
echo       {label} >> components\Button\Button.tsx
echo     ^</button^> >> components\Button\Button.tsx
echo   ); >> components\Button\Button.tsx
echo }; >> components\Button\Button.tsx

echo import { render, screen } from '@testing-library/react'; > components\Button\Button.test.tsx
echo import { Button } from './Button'; >> components\Button\Button.test.tsx
echo describe('Button Component', () =^> { >> components\Button\Button.test.tsx
echo   it('mounts without crashing and renders the label prop', () =^> { >> components\Button\Button.test.tsx
echo     const testLabel = 'Submit Form'; >> components\Button\Button.test.tsx
echo     render(^<Button label={testLabel} /^>); >> components\Button\Button.test.tsx
echo     const buttonElement = screen.getByRole('button', { name: testLabel }); >> components\Button\Button.test.tsx
echo     expect(buttonElement).toBeInTheDocument(); >> components\Button\Button.test.tsx
echo     expect(buttonElement).toHaveTextContent(testLabel); >> components\Button\Button.test.tsx
echo   }); >> components\Button\Button.test.tsx
echo }); >> components\Button\Button.test.tsx

echo.
echo 6. Generating Card Component ^& Test...
echo import React from 'react'; > components\Card\Card.tsx
echo interface CardProps { title: string; content: string; } >> components\Card\Card.tsx
echo export const Card = ({ title, content }: CardProps) =^> { >> components\Card\Card.tsx
echo   return ( >> components\Card\Card.tsx
echo     ^<div className="card-container" data-testid="card-wrapper"^> >> components\Card\Card.tsx
echo       ^<h2^>{title}^</h2^> >> components\Card\Card.tsx
echo       ^<p^>{content}^</p^> >> components\Card\Card.tsx
echo     ^</div^> >> components\Card\Card.tsx
echo   ); >> components\Card\Card.tsx
echo }; >> components\Card\Card.tsx

echo import { render, screen } from '@testing-library/react'; > components\Card\Card.test.tsx
echo import { Card } from './Card'; >> components\Card\Card.test.tsx
echo describe('Card Component', () =^> { >> components\Card\Card.test.tsx
echo   it('mounts without crashing and renders title and content props', () =^> { >> components\Card\Card.test.tsx
echo     const testTitle = 'Sprint Overview'; >> components\Card\Card.test.tsx
echo     const testContent = 'Phase 1 deliverables are due today.'; >> components\Card\Card.test.tsx
echo     render(^<Card title={testTitle} content={testContent} /^>); >> components\Card\Card.test.tsx
echo     const wrapper = screen.getByTestId('card-wrapper'); >> components\Card\Card.test.tsx
echo     const heading = screen.getByRole('heading', { level: 2, name: testTitle }); >> components\Card\Card.test.tsx
echo     const bodyText = screen.getByText(testContent); >> components\Card\Card.test.tsx
echo     expect(wrapper).toBeInTheDocument(); >> components\Card\Card.test.tsx
echo     expect(heading).toBeInTheDocument(); >> components\Card\Card.test.tsx
echo     expect(bodyText).toBeInTheDocument(); >> components\Card\Card.test.tsx
echo   }); >> components\Card\Card.test.tsx
echo }); >> components\Card\Card.test.tsx

echo.
echo 7. Generating Input Component ^& Test...
echo import React from 'react'; > components\Input\Input.tsx
echo interface InputProps { label: string; placeholder?: string; id: string; } >> components\Input\Input.tsx
echo export const Input = ({ label, placeholder, id }: InputProps) =^> { >> components\Input\Input.tsx
echo   return ( >> components\Input\Input.tsx
echo     ^<div className="input-group"^> >> components\Input\Input.tsx
echo       ^<label htmlFor={id}^>{label}^</label^> >> components\Input\Input.tsx
echo       ^<input id={id} type="text" placeholder={placeholder} /^> >> components\Input\Input.tsx
echo     ^</div^> >> components\Input\Input.tsx
echo   ); >> components\Input\Input.tsx
echo }; >> components\Input\Input.tsx

echo import { render, screen } from '@testing-library/react'; > components\Input\Input.test.tsx
echo import { Input } from './Input'; >> components\Input\Input.test.tsx
echo describe('Input Component', () =^> { >> components\Input\Input.test.tsx
echo   it('mounts without crashing and associates the label prop with the input', () =^> { >> components\Input\Input.test.tsx
echo     const testLabel = 'Email Address'; >> components\Input\Input.test.tsx
echo     const testId = 'email-input'; >> components\Input\Input.test.tsx
echo     render(^<Input label={testLabel} id={testId} /^>); >> components\Input\Input.test.tsx
echo     const inputElement = screen.getByLabelText(testLabel); >> components\Input\Input.test.tsx
echo     expect(inputElement).toBeInTheDocument(); >> components\Input\Input.test.tsx
echo   }); >> components\Input\Input.test.tsx
echo }); >> components\Input\Input.test.tsx

echo.
echo 8. Updating package.json with test scripts...
echo const fs = require('fs'); > update-pkg.js
echo const pkg = JSON.parse(fs.readFileSync('./package.json', 'utf8')); >> update-pkg.js
echo pkg.scripts = pkg.scripts ^^|| {}; >> update-pkg.js
echo pkg.scripts.test = 'jest'; >> update-pkg.js
echo pkg.scripts['test:watch'] = 'jest --watch'; >> update-pkg.js
echo fs.writeFileSync('./package.json', JSON.stringify(pkg, null, 2)); >> update-pkg.js
call node update-pkg.js
del update-pkg.js

echo.
echo ===================================================
echo Done! Sara setup complete ho gaya hai.
echo Ab terminal mein 'npm run test' type karke tests run karein!
echo ===================================================
pause