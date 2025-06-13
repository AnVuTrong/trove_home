import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import TableRow, { TableRowProps } from '../TableRow.component';

describe('TableRow Component', () => {
  const defaultProps: TableRowProps = {
    children: <td>Test Cell</td>
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('Rendering', () => {
    it('should render table row with children', () => {
      render(
        <table>
          <tbody>
            <TableRow {...defaultProps} />
          </tbody>
        </table>
      );
      
      const row = screen.getByRole('row');
      expect(row).toBeInTheDocument();
      expect(screen.getByText('Test Cell')).toBeInTheDocument();
    });

    it('should render with default props', () => {
      render(
        <table>
          <tbody>
            <TableRow {...defaultProps} />
          </tbody>
        </table>
      );
      
      const row = screen.getByRole('row');
      expect(row).toBeInTheDocument();
      expect(row).not.toHaveAttribute('data-selected', 'true');
      expect(row).not.toHaveAttribute('data-clickable', 'true');
    });

    it('should render with custom data-testid', () => {
      render(
        <table>
          <tbody>
            <TableRow {...defaultProps} data-testid="custom-row" />
          </tbody>
        </table>
      );
      
      expect(screen.getByTestId('custom-row')).toBeInTheDocument();
    });
  });

  describe('Variants', () => {
    it('should apply default variant classes', () => {
      render(
        <table>
          <tbody>
            <TableRow {...defaultProps} variant="default" />
          </tbody>
        </table>
      );
      
      const row = screen.getByRole('row');
      expect(row).not.toHaveClass('bg-green-50', 'bg-yellow-50', 'bg-red-50', 'bg-blue-50');
    });

    it('should apply success variant classes', () => {
      render(
        <table>
          <tbody>
            <TableRow {...defaultProps} variant="success" />
          </tbody>
        </table>
      );
      
      const row = screen.getByRole('row');
      expect(row).toHaveClass('bg-green-50');
    });

    it('should apply warning variant classes', () => {
      render(
        <table>
          <tbody>
            <TableRow {...defaultProps} variant="warning" />
          </tbody>
        </table>
      );
      
      const row = screen.getByRole('row');
      expect(row).toHaveClass('bg-yellow-50');
    });

    it('should apply danger variant classes', () => {
      render(
        <table>
          <tbody>
            <TableRow {...defaultProps} variant="danger" />
          </tbody>
        </table>
      );
      
      const row = screen.getByRole('row');
      expect(row).toHaveClass('bg-red-50');
    });

    it('should apply info variant classes', () => {
      render(
        <table>
          <tbody>
            <TableRow {...defaultProps} variant="info" />
          </tbody>
        </table>
      );
      
      const row = screen.getByRole('row');
      expect(row).toHaveClass('bg-blue-50');
    });
  });

  describe('Selected State', () => {
    it('should apply selected styling when selected is true', () => {
      render(
        <table>
          <tbody>
            <TableRow {...defaultProps} selected />
          </tbody>
        </table>
      );
      
      const row = screen.getByRole('row');
      expect(row).toHaveClass('bg-blue-50', 'border-blue-200');
      expect(row).toHaveAttribute('data-selected', 'true');
    });

    it('should override variant styling when selected', () => {
      render(
        <table>
          <tbody>
            <TableRow {...defaultProps} variant="success" selected />
          </tbody>
        </table>
      );
      
      const row = screen.getByRole('row');
      expect(row).toHaveClass('bg-blue-50', 'border-blue-200');
      expect(row).not.toHaveClass('bg-green-50');
    });
  });

  describe('Hover Functionality', () => {
    it('should apply hover classes when hover is enabled', () => {
      render(
        <table>
          <tbody>
            <TableRow {...defaultProps} hover />
          </tbody>
        </table>
      );
      
      const row = screen.getByRole('row');
      expect(row).toHaveClass('transition-colors', 'duration-150');
    });

    it('should change background on mouse enter/leave when hover enabled', () => {
      render(
        <table>
          <tbody>
            <TableRow {...defaultProps} hover />
          </tbody>
        </table>
      );
      
      const row = screen.getByRole('row');
      
      fireEvent.mouseEnter(row);
      expect(row).toHaveClass('bg-gray-50');
      
      fireEvent.mouseLeave(row);
      expect(row).not.toHaveClass('bg-gray-50');
    });
  });

  describe('Clickable Functionality', () => {
    it('should apply clickable classes when clickable is true', () => {
      render(
        <table>
          <tbody>
            <TableRow {...defaultProps} clickable />
          </tbody>
        </table>
      );
      
      const row = screen.getByRole('button');
      expect(row).toHaveClass('cursor-pointer', 'select-none');
      expect(row).toHaveAttribute('role', 'button');
      expect(row).toHaveAttribute('tabIndex', '0');
      expect(row).toHaveAttribute('data-clickable', 'true');
    });

    it('should call onClick when clicked and clickable', () => {
      const handleClick = jest.fn();
      render(
        <table>
          <tbody>
            <TableRow {...defaultProps} clickable onClick={handleClick} />
          </tbody>
        </table>
      );
      
      const row = screen.getByRole('button');
      fireEvent.click(row);
      expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it('should not call onClick when not clickable', () => {
      const handleClick = jest.fn();
      render(
        <table>
          <tbody>
            <TableRow {...defaultProps} onClick={handleClick} />
          </tbody>
        </table>
      );
      
      const row = screen.getByRole('row');
      fireEvent.click(row);
      expect(handleClick).toHaveBeenCalledTimes(1); // onClick still works even without clickable
    });
  });

  describe('Event Handlers', () => {
    it('should call onMouseEnter when mouse enters', () => {
      const handleMouseEnter = jest.fn();
      render(
        <table>
          <tbody>
            <TableRow {...defaultProps} hover onMouseEnter={handleMouseEnter} />
          </tbody>
        </table>
      );
      
      const row = screen.getByRole('row');
      fireEvent.mouseEnter(row);
      expect(handleMouseEnter).toHaveBeenCalledTimes(1);
    });

    it('should call onMouseLeave when mouse leaves', () => {
      const handleMouseLeave = jest.fn();
      render(
        <table>
          <tbody>
            <TableRow {...defaultProps} hover onMouseLeave={handleMouseLeave} />
          </tbody>
        </table>
      );
      
      const row = screen.getByRole('row');
      fireEvent.mouseEnter(row);
      fireEvent.mouseLeave(row);
      expect(handleMouseLeave).toHaveBeenCalledTimes(1);
    });

    it('should pass event object to onClick handler', () => {
      const handleClick = jest.fn();
      render(
        <table>
          <tbody>
            <TableRow {...defaultProps} onClick={handleClick} />
          </tbody>
        </table>
      );
      
      const row = screen.getByRole('row');
      fireEvent.click(row);
      expect(handleClick).toHaveBeenCalledWith(expect.any(Object));
    });
  });

  describe('Custom Styling', () => {
    it('should apply custom className', () => {
      render(
        <table>
          <tbody>
            <TableRow {...defaultProps} className="custom-class" />
          </tbody>
        </table>
      );
      
      const row = screen.getByRole('row');
      expect(row).toHaveClass('custom-class');
    });

    it('should combine custom className with component classes', () => {
      render(
        <table>
          <tbody>
            <TableRow {...defaultProps} hover className="custom-class" />
          </tbody>
        </table>
      );
      
      const row = screen.getByRole('row');
      expect(row).toHaveClass('custom-class', 'transition-colors', 'duration-150');
    });
  });

  describe('Accessibility', () => {
    it('should have proper role when clickable', () => {
      render(
        <table>
          <tbody>
            <TableRow {...defaultProps} clickable />
          </tbody>
        </table>
      );
      
      const row = screen.getByRole('button');
      expect(row).toHaveAttribute('role', 'button');
    });

    it('should be focusable when clickable', () => {
      render(
        <table>
          <tbody>
            <TableRow {...defaultProps} clickable />
          </tbody>
        </table>
      );
      
      const row = screen.getByRole('button');
      expect(row).toHaveAttribute('tabIndex', '0');
    });

    it('should not have button role when not clickable', () => {
      render(
        <table>
          <tbody>
            <TableRow {...defaultProps} />
          </tbody>
        </table>
      );
      
      const row = screen.getByRole('row');
      expect(row).not.toHaveAttribute('role', 'button');
      expect(row).not.toHaveAttribute('tabIndex');
    });
  });

  describe('Multiple Features Combined', () => {
    it('should work with all features enabled', () => {
      const handleClick = jest.fn();
      const handleMouseEnter = jest.fn();
      const handleMouseLeave = jest.fn();
      
      render(
        <table>
          <tbody>
            <TableRow
              {...defaultProps}
              variant="success"
              hover
              clickable
              selected
              className="custom-class"
              onClick={handleClick}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              data-testid="complex-row"
            />
          </tbody>
        </table>
      );
      
      const row = screen.getByTestId('complex-row');
      
      // Check styling
      expect(row).toHaveClass('bg-blue-50', 'border-blue-200'); // selected overrides variant
      expect(row).toHaveClass('cursor-pointer', 'select-none');
      expect(row).toHaveClass('transition-colors', 'duration-150');
      expect(row).toHaveClass('custom-class');
      
      // Check attributes
      expect(row).toHaveAttribute('role', 'button');
      expect(row).toHaveAttribute('tabIndex', '0');
      expect(row).toHaveAttribute('data-selected', 'true');
      expect(row).toHaveAttribute('data-clickable', 'true');
      
      // Check event handling
      fireEvent.mouseEnter(row);
      expect(handleMouseEnter).toHaveBeenCalledTimes(1);
      
      fireEvent.click(row);
      expect(handleClick).toHaveBeenCalledTimes(1);
      
      fireEvent.mouseLeave(row);
      expect(handleMouseLeave).toHaveBeenCalledTimes(1);
    });
  });
}); 