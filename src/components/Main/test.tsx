import { render, screen } from '@testing-library/react';

import Main from '.';

describe('<Main />', () => {
  it('should render correctly', () => {
    const { container } = render(<Main />);

    expect(screen.getByRole('img', { name: /next beacon/i })).toBeInTheDocument;

    expect(container.firstChild).toMatchSnapshot();
  });
});
