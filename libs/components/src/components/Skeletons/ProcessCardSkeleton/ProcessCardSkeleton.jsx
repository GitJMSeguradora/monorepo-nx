import React from 'react';
import { Card, Svg } from './styles';

const ProcessCardSkeleton = props => (
  <Card {...props}>
    <Svg speed={1.3} width={912} height={196}>
      {/* First line */}
      <rect x="0" y="0" rx="12" ry="12" width={80} height={24} />
      <rect x="120" y="0" rx="2" ry="2" width={400} height={24} />

      {/* Second line */}
      <rect x="0" y="53" rx="2" ry="2" width={100} height={8} />
      <rect x="348" y="53" rx="2" ry="2" width={100} height={8} />
      <rect x="0" y="77" rx="2" ry="2" width={108} height={14} />
      <rect x="348" y="77" rx="2" ry="2" width={284} height={14} />

      {/* Third line */}
      <rect x="0" y="119" rx="2" ry="2" width={100} height={8} />
      <rect x="348" y="119" rx="2" ry="2" width={100} height={8} />
      <rect x="0" y="143" rx="2" ry="2" width={196} height={14} />
      <rect x="348" y="143" rx="2" ry="2" width={76} height={14} />

      {/* Last line */}
      <rect x="0" y="175" rx="2" ry="2" width={259} height={17} />
    </Svg>
  </Card>
);

export default ProcessCardSkeleton;
