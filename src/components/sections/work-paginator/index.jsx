import React from 'react';
import { Link } from 'gatsby';

import './work-paginator.scss';

function ViewAll({ modifier }) {
  console.log('modifier', modifier);
  return (
    <Link
      to="/pabellon"
      className={`work-pagination__item work-pagination__item--${modifier}`}
    >
      Pabellón/Pavillion
    </Link>
  );
}

const WorkPaginator = ({ next, previous }) => (
  <div className="work-pagination__wrap">
    {previous ? (
      <Link
        to={previous.slug}
        className="work-pagination__item work-pagination__item--prev"
      >
        {previous.title}
      </Link>
    ) : (
      <ViewAll modifier="prev" />
    )}
    {next ? (
      <Link
        to={next.slug}
        className="work-pagination__item work-pagination__item--next"
      >
        {next.title}
      </Link>
    ) : (
      <ViewAll modifier="next" />
    )}
  </div>
);

export default WorkPaginator;
