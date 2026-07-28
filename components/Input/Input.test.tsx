import { render, screen } from '@testing-library/react'; 
import { Input } from './Input'; 
describe('Input Component', () => { 
  it('mounts without crashing and associates the label prop with the input', () => { 
    const testLabel = 'Email Address'; 
    const testId = 'email-input'; 
    render(<Input label={testLabel} id={testId} />); 
    const inputElement = screen.getByLabelText(testLabel); 
    expect(inputElement).toBeInTheDocument(); 
  }); 
}); 
