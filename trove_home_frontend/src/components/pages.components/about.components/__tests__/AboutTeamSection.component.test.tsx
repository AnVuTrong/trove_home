import React from 'react';
import { render, screen } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import i18n from '../../../../i18n/i18n.test.config';
import AboutTeamSection, { AboutTeamSectionClass } from '../AboutTeamSection.component';
import { AboutTeamSectionProps, TeamMember } from '../AboutTeamSection.types';

const renderWithI18n = (component: React.ReactElement) => {
  return render(
    <I18nextProvider i18n={i18n}>
      {component}
    </I18nextProvider>
  );
};

const mockTeamMembers: TeamMember[] = [
  {
    id: 'test1',
    nameKey: 'about.team.members.member1.name',
    positionKey: 'about.team.members.member1.position',
    descriptionKey: 'about.team.members.member1.description'
  },
  {
    id: 'test2',
    nameKey: 'about.team.members.member2.name',
    positionKey: 'about.team.members.member2.position',
    descriptionKey: 'about.team.members.member2.description'
  }
];

describe('AboutTeamSection Component', () => {
  describe('Component Rendering', () => {
    it('should render team section with default props', () => {
      renderWithI18n(<AboutTeamSection />);
      
      const title = screen.getByRole('heading', { level: 2 });
      expect(title).toBeInTheDocument();
    });

    it('should render 4 team members by default', () => {
      renderWithI18n(<AboutTeamSection />);
      
      // Look for team member names specifically
      const member1 = screen.getByText('Team Member 1');
      const member2 = screen.getByText('Team Member 2');
      const member3 = screen.getByText('Team Member 3');
      const member4 = screen.getByText('Team Member 4');
      
      expect(member1).toBeInTheDocument();
      expect(member2).toBeInTheDocument();
      expect(member3).toBeInTheDocument();
      expect(member4).toBeInTheDocument();
    });

    it('should render custom team members when provided', () => {
      const customProps: AboutTeamSectionProps = {
        teamMembers: mockTeamMembers
      };
      
      renderWithI18n(<AboutTeamSection {...customProps} />);
      
      // Check for the specific team members from mock data
      const member1 = screen.getByText('Team Member 1');
      const member2 = screen.getByText('Team Member 2');
      
      expect(member1).toBeInTheDocument();
      expect(member2).toBeInTheDocument();
      
      // Should not have member 3 and 4
      const member3 = screen.queryByText('Team Member 3');
      const member4 = screen.queryByText('Team Member 4');
      
      expect(member3).not.toBeInTheDocument();
      expect(member4).not.toBeInTheDocument();
    });

    it('should apply custom className', () => {
      const customClassName = 'custom-team-class';
      const { container } = renderWithI18n(
        <AboutTeamSection className={customClassName} />
      );
      
      const section = container.querySelector('section');
      expect(section).toHaveClass(customClassName);
    });
  });

  describe('AboutTeamSectionClass Utility', () => {
    it('should return correct CSS classes for section container', () => {
      const classes = AboutTeamSectionClass.getSectionContainerClasses();
      expect(classes).toContain('py-16');
      expect(classes).toContain('px-4');
      expect(classes).toContain('bg-gray-50');
    });

    it('should return correct CSS classes for grid container', () => {
      const classes = AboutTeamSectionClass.getGridContainerClasses();
      expect(classes).toContain('grid');
      expect(classes).toContain('grid-cols-1');
      expect(classes).toContain('md:grid-cols-2');
      expect(classes).toContain('lg:grid-cols-4');
    });

    it('should return correct CSS classes for member card', () => {
      const classes = AboutTeamSectionClass.getMemberCardClasses();
      expect(classes).toContain('bg-white');
      expect(classes).toContain('p-6');
      expect(classes).toContain('rounded-lg');
      expect(classes).toContain('shadow-lg');
    });

    it('should generate correct initials from name', () => {
      expect(AboutTeamSectionClass.getInitials('John Doe')).toBe('JD');
      expect(AboutTeamSectionClass.getInitials('Team Member 1')).toBe('TM');
      expect(AboutTeamSectionClass.getInitials('SingleName')).toBe('S'); // Single name should return first letter only
      expect(AboutTeamSectionClass.getInitials('A B C D')).toBe('AB');
    });
  });

  describe('Team Member Display', () => {
    it('should display team member avatars with initials', () => {
      renderWithI18n(<AboutTeamSection />);
      
      // Check for avatar elements with initials
      const avatars = screen.getAllByText(/TM|TV/); // TM for Team Member, TV for Thành viên
      expect(avatars.length).toBeGreaterThan(0);
    });

    it('should display team member positions', () => {
      renderWithI18n(<AboutTeamSection />);
      
      const positions = screen.getAllByText(/Position Title|Chức danh/i);
      expect(positions).toHaveLength(4);
    });
  });

  describe('Accessibility', () => {
    it('should have proper heading structure', () => {
      renderWithI18n(<AboutTeamSection />);
      
      const title = screen.getByRole('heading', { level: 2 });
      const memberNames = screen.getAllByRole('heading', { level: 3 });
      
      expect(title).toBeInTheDocument();
      expect(memberNames).toHaveLength(4);
    });

    it('should have semantic section element', () => {
      const { container } = renderWithI18n(<AboutTeamSection />);
      
      const section = container.querySelector('section');
      expect(section).toBeInTheDocument();
    });
  });

  describe('Responsive Design', () => {
    it('should have responsive grid classes', () => {
      const { container } = renderWithI18n(<AboutTeamSection />);
      
      const gridContainer = container.querySelector('.grid');
      expect(gridContainer).toHaveClass('grid-cols-1');
      expect(gridContainer).toHaveClass('md:grid-cols-2');
      expect(gridContainer).toHaveClass('lg:grid-cols-4');
    });
  });
}); 