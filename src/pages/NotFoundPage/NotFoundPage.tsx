import NotFoundPageStyled from "./NotFoundPageStyled";

const NotFoundPage = (): React.ReactElement => {
  return (
    <NotFoundPageStyled>
      <h1 className="page-not-found">404</h1>
      <span className="page-not-found__text">Page not found!</span>
      <span className="page-not-found__message">
        Oops! This page is in plant paradise. You will be back on track soon
      </span>
      <img
        className="page-not-found__image"
        src="images/img404.svg"
        alt="fallen plant"
        width={200}
        height={81}
      />
    </NotFoundPageStyled>
  );
};

export default NotFoundPage;
