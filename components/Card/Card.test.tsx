import { render, screen } from '@testing-library/react'; 
import { Card } from './Card'; 
describe('Card Component', () => { 
  it('mounts without crashing and renders title and content props', () => { 
    const testTitle = 'Sprint Overview'; 
    const testContent = 'Phase 1 deliverables are due today.'; 
    render(<Card title={testTitle} content={testContent} />); 
    const wrapper = screen.getByTestId('card-wrapper'); 
    const heading = screen.getByRole('heading', { level: 2, name: testTitle }); 
    const bodyText = screen.getByText(testContent); 
    expect(wrapper).toBeInTheDocument(); 
    expect(heading).toBeInTheDocument(); 
    expect(bodyText).toBeInTheDocument(); 
  }); 
}); 
