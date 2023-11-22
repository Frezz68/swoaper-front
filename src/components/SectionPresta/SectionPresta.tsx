import React from "react";
import "./SectionPresta.scss";
import "../../style/button.scss";

interface SectionPrestaProps {
  imageSrc: string;
  title: string;
  content: string;
  label: string;
  action: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  swap?: boolean;
}

const SectionPresta: React.FC<SectionPrestaProps> = ({
  imageSrc,
  title,
  content,
  label,
  action,
  swap,
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
      <button onClick={action} className="btn-primary">
        {label}
      </button>
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
