import { Story } from '@storybook/react';
import { Theme } from 'app/Providers/ThemeProvider';

export const ThemeDecorator = (theme: Theme) => (StoryComponent: Story) =>
    (
        <div className={`app ${theme}`}>
            <StoryComponent />
        </div>
    );
