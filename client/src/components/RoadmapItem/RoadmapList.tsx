import React from "react";

export const RoadmapList: React.FC<{
  list?: {
    title: string;
    text?: string;
    isActive?: boolean;
  }[];
}> = ({ list }) => {
  return (
    <>
      {list &&
        list.map((item, index) => (
          <li key={index} className="roadmap-item__value-item">
            <div className="roadmap-item__path">
              <div className="roadmap-item__point">
                {item.isActive && (
                  <div className="roadmap-item__point-active"></div>
                )}
              </div>
              {index < list.length - 1 && (
                <div className="roadmap-item__line"></div>
              )}
            </div>
            <div className="roadmap-item__text-container">
              <h3 className="roadmap-item__title">{item.title}</h3>
              <p className="roadmap-item__text">{item.text}</p>
            </div>
          </li>
        ))}
    </>
  );
};
