import React from 'react';
import { useTranslation } from 'react-i18next';
import { AboutTeamSectionProps, TeamMember } from './AboutTeamSection.types';
import { GradientCard } from '../../ui.components';

/**
 * AboutTeamSection Component
 * 
 * A reusable team section component that displays team members
 * Supports customizable team member data and responsive grid layout
 */
export class AboutTeamSectionClass {
  private static readonly SECTION_CONTAINER_CLASSES = 'py-16 px-4 bg-gray-50 dark:bg-background-dark';
  private static readonly CONTENT_CONTAINER_CLASSES = 'max-w-6xl mx-auto';
  private static readonly TITLE_CLASSES = 'text-3xl md:text-4xl font-bold text-primary mb-4 text-center';
  private static readonly SUBTITLE_CLASSES = 'text-lg text-gray-600 dark:text-gray-400 mb-12 text-center';
  private static readonly GRID_CONTAINER_CLASSES = 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8';
  private static readonly MEMBER_CARD_CLASSES = 'p-0';
  private static readonly MEMBER_AVATAR_CLASSES = 'w-24 h-24 bg-gradient-to-br from-primary to-green-400 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold';
  private static readonly MEMBER_NAME_CLASSES = 'text-xl font-semibold text-gray-800 dark:text-white mb-2 text-center';
  private static readonly MEMBER_POSITION_CLASSES = 'text-primary font-medium mb-3 text-center';
  private static readonly MEMBER_DESCRIPTION_CLASSES = 'text-gray-600 dark:text-gray-400 text-sm leading-relaxed text-center';

  public static getSectionContainerClasses(): string {
    return this.SECTION_CONTAINER_CLASSES;
  }

  public static getContentContainerClasses(): string {
    return this.CONTENT_CONTAINER_CLASSES;
  }

  public static getTitleClasses(): string {
    return this.TITLE_CLASSES;
  }

  public static getSubtitleClasses(): string {
    return this.SUBTITLE_CLASSES;
  }

  public static getGridContainerClasses(): string {
    return this.GRID_CONTAINER_CLASSES;
  }

  public static getMemberCardClasses(): string {
    return this.MEMBER_CARD_CLASSES;
  }

  public static getMemberAvatarClasses(): string {
    return this.MEMBER_AVATAR_CLASSES;
  }

  public static getMemberNameClasses(): string {
    return this.MEMBER_NAME_CLASSES;
  }

  public static getMemberPositionClasses(): string {
    return this.MEMBER_POSITION_CLASSES;
  }

  public static getMemberDescriptionClasses(): string {
    return this.MEMBER_DESCRIPTION_CLASSES;
  }

  public static getInitials(name: string): string {
    return name
      .split(' ')
      .map(word => word.charAt(0))
      .join('')
      .toUpperCase()
      .slice(0, 2);
  }
}

const AboutTeamSection: React.FC<AboutTeamSectionProps> = ({ 
  className = '',
  titleKey = 'about.team.title',
  subtitleKey = 'about.team.subtitle',
  teamMembers
}) => {
  const { t } = useTranslation();

  const defaultTeamMembers: TeamMember[] = [
    {
      id: 'member1',
      nameKey: 'about.team.members.member1.name',
      positionKey: 'about.team.members.member1.position',
      descriptionKey: 'about.team.members.member1.description'
    },
    {
      id: 'member2',
      nameKey: 'about.team.members.member2.name',
      positionKey: 'about.team.members.member2.position',
      descriptionKey: 'about.team.members.member2.description'
    },
    {
      id: 'member3',
      nameKey: 'about.team.members.member3.name',
      positionKey: 'about.team.members.member3.position',
      descriptionKey: 'about.team.members.member3.description'
    },
    {
      id: 'member4',
      nameKey: 'about.team.members.member4.name',
      positionKey: 'about.team.members.member4.position',
      descriptionKey: 'about.team.members.member4.description'
    }
  ];

  const membersToDisplay = teamMembers || defaultTeamMembers;

  return (
    <section className={`${AboutTeamSectionClass.getSectionContainerClasses()} ${className}`}>
      <div className={AboutTeamSectionClass.getContentContainerClasses()}>
        <h2 className={AboutTeamSectionClass.getTitleClasses()}>
          {t(titleKey)}
        </h2>
        <p className={AboutTeamSectionClass.getSubtitleClasses()}>
          {t(subtitleKey)}
        </p>
        
        <div className={AboutTeamSectionClass.getGridContainerClasses()}>
          {membersToDisplay.map((member) => {
            const memberName = t(member.nameKey);
            const initials = AboutTeamSectionClass.getInitials(memberName);
            
            return (
              <GradientCard key={member.id} className={AboutTeamSectionClass.getMemberCardClasses()}>
                <div className={AboutTeamSectionClass.getMemberAvatarClasses()}>
                  {initials}
                </div>
                <h3 className={AboutTeamSectionClass.getMemberNameClasses()}>
                  {memberName}
                </h3>
                <p className={AboutTeamSectionClass.getMemberPositionClasses()}>
                  {t(member.positionKey)}
                </p>
                <p className={AboutTeamSectionClass.getMemberDescriptionClasses()}>
                  {t(member.descriptionKey)}
                </p>
              </GradientCard>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutTeamSection; 