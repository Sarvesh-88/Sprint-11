import { render, screen } from '@testing-library/react'; 
import { Button } from './Button'; 
describe('Button Component', () => { 
  it('mounts without crashing and renders the label prop', () => { 
    const testLabel = 'Submit Form'; 
    render(<Button label={testLabel} />); 
    const buttonElement = screen.getByRole('button', { name: testLabel }); 
    expect(buttonElement).toBeInTheDocument(); 
    expect(buttonElement).toHaveTextContent(testLabel); 
  }); 
}); 
