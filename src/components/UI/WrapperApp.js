import "./WrapperApp.css";

const WrapperApp = (props) => {
  const classesApp = "wrapper-app " + props.className;

  return <div className={classesApp}>{props.children}</div>;
};

export default WrapperApp;
