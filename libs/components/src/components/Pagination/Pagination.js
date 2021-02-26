import React from 'react';
import { usePagination } from '@material-ui/lab/Pagination';

import * as S from './PaginationStyles';

const DEFAULT_CONFIG = {
  page: 1,
  hideNextButton: true,
  hidePrevButton: true
};

export default function Pagination(props) {
  const { items } = usePagination({ ...DEFAULT_CONFIG, ...props });

  return (
    <S.Container>
      <S.List>
        {items.map(({ page, type, selected, ...item }, index) => {
          if (type === 'start-ellipsis' || type === 'end-ellipsis') {
            return (
              <S.Item key={index}>
                <S.Ellipsis>···</S.Ellipsis>
              </S.Item>
            );
          }

          if (type === 'page') {
            return (
              <S.Item key={index}>
                <S.Button type="button" selected={selected} {...item}>
                  {page}
                </S.Button>
              </S.Item>
            );
          }

          return (
            <S.Item key={index}>
              <S.Button type="button" {...item}>
                {type}
              </S.Button>
            </S.Item>
          );
        })}
      </S.List>
    </S.Container>
  );
}
