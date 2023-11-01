import { render, screen } from '@testing-library/react';

import { Main } from './Main';

describe('Main', () => {
  describe('Render method', () => {
    it('should have 8 menu items', () => {
      render(
        <Main title="title" description="description">
          {null}
        </Main>,
      );

      const menuItemList = screen.getAllByRole('listitem');

      expect(menuItemList).toHaveLength(8);
    });
  });
});
