export interface TeamMember {
  /**
   * Unique identifier for the team member
   */
  id: string;
  
  /**
   * Translation key for the member's name
   */
  nameKey: string;
  
  /**
   * Translation key for the member's position
   */
  positionKey: string;
  
  /**
   * Translation key for the member's description
   */
  descriptionKey: string;
  
  /**
   * Optional avatar image URL
   */
  avatarUrl?: string;
}

export interface AboutTeamSectionProps {
  /**
   * Additional CSS classes to apply to the section
   */
  className?: string;
  
  /**
   * Translation key for the section title
   * @default 'about.team.title'
   */
  titleKey?: string;
  
  /**
   * Translation key for the section subtitle
   * @default 'about.team.subtitle'
   */
  subtitleKey?: string;
  
  /**
   * Array of team members to display
   * If not provided, will use default team members from translations
   */
  teamMembers?: TeamMember[];
} 