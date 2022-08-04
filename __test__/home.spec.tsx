import { render, screen } from '@testing-library/react'
import Home from '../src/pages/index'



describe('Welcome to nextjs tests', () => {
    it('should render home', () => { 
        render(<Home />)
        expect(screen.getByText('Also welcome react testing library')).toBeInTheDocument();
    })
})