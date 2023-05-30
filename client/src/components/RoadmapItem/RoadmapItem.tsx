import "./RoadmapItem.scss";
import { ExpandingList } from "../ExpandingList/ExpandingList";
import React, { useState } from "react";
import { RoadmapList } from "./RoadmapList";

export const RoadmapItem: React.FC<{
  firstPoint: string;
  secondPoint: string;
  list?: { title: string; text?: string; isActive?: boolean }[];
  isDisabled?: boolean;
}> = ({ firstPoint, secondPoint, list, isDisabled = false }) => {
  const [isOpen, setIsOpen] = useState(false);

  const roadmapHeaderValue = (
    <div className="roadmap-item__header">
      <p className={isOpen || isDisabled ? "roadmap-item__text--gray" : ""}>
        {firstPoint}
      </p>
      <span
        className={
          isOpen || isDisabled
            ? "roadmap-item__arrows--gray"
            : "roadmap-item__arrows"
        }
      ></span>
      <p className={isOpen || isDisabled ? "roadmap-item__text--gray" : ""}>
        {secondPoint}
      </p>
    </div>
  );

  if (isDisabled)
    return (
      <ExpandingList
        isDisabled={isDisabled}
        headerValue={roadmapHeaderValue}
        listValue={<RoadmapList></RoadmapList>}
        className="roadmap-item"
      ></ExpandingList>
    );

  return (
    <ExpandingList
      duration={600}
      getIsOpen={setIsOpen}
      className="roadmap-item"
      headerValue={roadmapHeaderValue}
      listValue={<RoadmapList list={list}></RoadmapList>}
    ></ExpandingList>
  );
};
