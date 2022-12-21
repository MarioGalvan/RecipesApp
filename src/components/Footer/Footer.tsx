import { PageUtils } from "../../utils/PageUtils";

export const Footer = () => {
  return (
    <footer className="footerApp">
      <div className="footer_title">
        <h1>{PageUtils.Footer.title}</h1>
      </div>

      <div className="footer_img">
        <img className="imgfooter" src={PageUtils.Footer.FooterImg} alt="Footer Img"/>
      </div>
    </footer>
  );
};
