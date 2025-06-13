import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import Image, { ImageProps } from '../Image.component';
import * as TranslationUtils from '../../../i18n/TranslationUtils.utils';

// Mock the translate function
jest.mock('../../../i18n/TranslationUtils.utils', () => ({
  translate: jest.fn((key: string, defaultValue: string) => defaultValue)
}));

describe('Image Component', () => {
  const defaultProps: ImageProps = {
    src: 'test-image.jpg',
    alt: 'Test image'
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render image when loaded successfully', async () => {
    // Mock successful image loading
    Object.defineProperty(window, 'Image', {
      writable: true,
      value: class {
        onload: (() => void) | null = null;
        onerror: (() => void) | null = null;
        src: string = '';
        
        constructor() {
          setTimeout(() => {
            if (this.onload) this.onload();
          }, 0);
        }
      }
    });

    render(<Image {...defaultProps} />);
    
    // Wait for image to load
    await waitFor(() => {
      const img = screen.getByRole('img');
      expect(img).toBeInTheDocument();
      expect(img).toHaveAttribute('src', 'test-image.jpg');
      expect(img).toHaveAttribute('alt', 'Test image');
    });
  });

  it('should show translated fallback text when image fails to load and no alt provided', async () => {
    const mockTranslate = TranslationUtils.translate as jest.MockedFunction<typeof TranslationUtils.translate>;
    mockTranslate.mockReturnValue('Không tìm thấy hình ảnh');

    // Mock image error
    Object.defineProperty(window, 'Image', {
      writable: true,
      value: class {
        onload: (() => void) | null = null;
        onerror: (() => void) | null = null;
        src: string = '';
        
        constructor() {
          setTimeout(() => {
            if (this.onerror) this.onerror();
          }, 0);
        }
      }
    });

    render(<Image src="invalid-image.jpg" alt="" />);
    
    await waitFor(() => {
      expect(screen.getByText('Không tìm thấy hình ảnh')).toBeInTheDocument();
    });

    expect(mockTranslate).toHaveBeenCalledWith('common.imageNotFound', 'Image not found');
  });

  it('should use alt text when provided and image fails', async () => {
    // Mock image error
    Object.defineProperty(window, 'Image', {
      writable: true,
      value: class {
        onload: (() => void) | null = null;
        onerror: (() => void) | null = null;
        src: string = '';
        
        constructor() {
          setTimeout(() => {
            if (this.onerror) this.onerror();
          }, 0);
        }
      }
    });

    render(<Image src="invalid-image.jpg" alt="Custom alt text" />);
    
    await waitFor(() => {
      expect(screen.getByText('Custom alt text')).toBeInTheDocument();
    });
  });
}); 