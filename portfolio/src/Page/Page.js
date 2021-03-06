import './Page.css';

const Page =({
    active,
    title,
    header,
    children,
}) => {
    let className = 'page';

  if (active) {
    className += ' page--active';
  }

  return (
    <div className={className}>
      <div className="page__header">
        {header ? header : (<h2 className="page__title">{title}</h2>)}
      </div>
      <div className="page__content">
        {children}
      </div>
    </div>
  );
};

export default Page;
