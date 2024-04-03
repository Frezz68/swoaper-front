import React from "react";
import "./SectionPresta.scss";
import "../../style/button.scss";
import { Link } from "react-router-dom";

interface SectionPrestaProps {
  imageSrc: string;
  title: string;
  content: string;
  label: string;
  swap?: boolean;
  url?: string;
  id?: string;
  action: string
}

const SectionPresta: React.FC<SectionPrestaProps> = ({
  imageSrc,
  title,
  content,
  label,
  swap,
  url,
  id,
  action
}) => {
  const ImageSection = (
    <div className="image">
      <img className="image" src={imageSrc} alt={title} />
    </div>
  );

  const InfoSection = (
    <div className="info">
      <div className="title">{title}</div>
      <div className="content">{content}</div>
      <Link to={url + `/${id}?action=${action}` ?? `/?action=${action}`}>
        <div className="btn-primary">
          {label}
        </div>
      </Link>

    </div>
  );

  return (
    <div className="container-presta">
      {swap ? (
        <div className="content-order-swapped">
          {InfoSection}
          {ImageSection}
        </div>
      ) : (
        <div className="content-order-default">
          {ImageSection}
          {InfoSection}
        </div>
      )}
    </div>
  );
};

export default SectionPresta;
