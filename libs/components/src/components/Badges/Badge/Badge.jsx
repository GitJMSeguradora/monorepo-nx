import React from 'react';
import PropTypes from 'prop-types';

// badges
import { Lamp, Mountain, Plane, Policy, Rocket, Trophy } from '@monorepo-nx/components/src/components/Badges';

// styles
import * as S from './styles';

const Badge = ({ name, title, subtitle, width, height }) => {
  const renderBadge = (badgeName, badgeWidth, badgeHeight) => {
    switch (badgeName) {
      case 'Lamp':
        return <Lamp width={badgeWidth} height={badgeHeight} data-testid="badge-lamp" />;
      case 'Mountain':
        return <Mountain width={badgeWidth} height={badgeHeight} data-testid="badge-mountain" />;
      case 'Plane':
        return <Plane width={badgeWidth} height={badgeHeight} data-testid="badge-plane" />;
      case 'Policy':
        return <Policy width={badgeWidth} height={badgeHeight} data-testid="badge-policy" />;
      case 'Rocket':
        return <Rocket width={badgeWidth} height={badgeHeight} data-testid="badge-rocket" />;
      case 'Trophy':
        return <Trophy width={badgeWidth} height={badgeHeight} data-testid="badge-trophy" />;
      default:
        return null;
    }
  };

  return (
    <S.BadgeWrapper data-testid="badge">
      {renderBadge(name, width, height)}

      {(subtitle || title) && (
        <S.BadgeCaption data-testid="badge-caption">
          <S.BadgeSubtitle>{subtitle}</S.BadgeSubtitle>
          <S.BadgeTitle>{title}</S.BadgeTitle>
        </S.BadgeCaption>
      )}
    </S.BadgeWrapper>
  );
};

Badge.propTypes = {
  name: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number
};

export default Badge;
