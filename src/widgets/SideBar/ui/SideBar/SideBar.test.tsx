import { fireEvent, screen } from '@testing-library/react';
import { Sidebar } from './SideBar';
import renderWithTranslation from 'shared/lib/test/renderWithTranslation/renderWithTranslation';

describe('Button', () => {
    test('with only first params', () => {
        renderWithTranslation(<Sidebar />);
        const toggleBtn = screen.getByTestId('sidebar-toggle');
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
        fireEvent.click(toggleBtn);
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    });
});
