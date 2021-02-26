import React from 'react';
import ContentLoader from 'react-content-loader';
import { Card } from './styles';

const GridSkeleton = props => (
  <Card {...props}>
    <span>Tomador</span>
    <span>CNPJ do tomador</span>
    <span>Endereço do tomador</span>
    <span>Telefone do tomador</span>
    <ContentLoader
      speed={1.3}
      width={864}
      height={138}
      ariaLabel="Carregando dados do tomador..."
      primaryColor="#e0e7ec"
      secondaryColor="#f2f5f7"
    >
      <rect x="0" y="16" rx="0" ry="0" width={300} height={16} />
      <rect x="660" y="16" rx="0" ry="0" width={250} height={16} />
      <rect x="0" y="73" rx="0" ry="0" width={300} height={16} />
      <rect x="660" y="73" rx="0" ry="0" width={250} height={16} />
    </ContentLoader>
  </Card>
);

export default GridSkeleton;
