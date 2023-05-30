import "../App.scss";
import React from "react";
import { BlockTitle } from "../components/BlockTitle/BlockTitle";
import { RoadmapItem } from "../components/RoadmapItem/RoadmapItem";
import { Roulette } from "../components/Roulette/Roulette";
import { Header } from "../components/Header/Header";
import { Intro } from "../components/Intro/Intro";
import bigLock from "../assets/big-lock.svg";
import { DiscordBotBlock } from "../components/DiscordBotBlock/DiscordBotBlock";
import { Form } from "../components/Form/Form";
import { InfoBlock } from "../components/InfoBlock/InfoBlock";
import { Footer } from "../components/Footer/Footer";
import { ModalNFT } from "../components/ModalNFT/ModalNFT";

const roadMapList = [
  {
    title: "START",
    text: "Launch the popularization of the project and distribute OG roles. To overcome the mark of 1000 followers on Twitter and discord.",
    isActive: true,
  },
  {
    title: "1ST SNEAK PEEK",
    text: "Demonstration of the collection.",
  },
  {
    title: "ALL-NEW RANKING SYSTEM",
    text: "Announcement of our system for obtaining levels and influence from other users.announcement of our system for obtaining levels and influence from other users.",
  },
  {
    title: "UTILITY WIP#27",
    text: "27% availability of JINNS service.",
  },
  {
    title: "SOCIALS #2500",
    text: "To overcome the mark of 2,500 followers on Twitter.",
  },
  {
    title: "WHO ARE THE PIONEERS?",
    text: "Let's tell you why this role is needed and what those who manage to get it will do. A reason to be proud? - Yes, but that's not all.",
  },
  {
    title: "UTILITY WIP#49",
    text: "49% availability of the JINNS service.",
  },
  {
    title: "RAID RAID GRIND GRIND",
    text: "Everyone should know what we are cooking, but we cannot cope without your help. Use the opportunity to get +rep for raids on other collections.",
  },
  {
    title: "SOCIALS #5000",
    text: "To overcome the mark of 5,000 followers on Twitter.",
  },
  {
    title: "JINNS NOT JUST FOR ENTERTAINMENT",
    text: "What you can get by using our service.",
  },
  {
    title: "WHAT HOLDERS GET?",
    text: "Let's reveal the secret of what the most loyal investors will get.",
  },
  {
    title: "SUB BOOOST",
    text: "We fly into the stratosphere, hold contests, distribute special roles, collaborate with other projects and much more.",
  },
  {
    title: "SOCIALS #7500",
    text: "To overcome the mark of 7,500 followers on Twitter.",
  },
  {
    title: "ROADMAP 2 PART ANNOUNCEMENT",
    text: "We will open the second part of the roadmap for you.",
  },
  {
    title: "DATE AND PRICE ANNOUNCEMENT",
    text: "Let's move on to the finish line, and tell you about the date and mint price, as well as about supply.",
  },
  {
    title: "UTILITY WIP#76",
    text: "76% availability of JINNS service.",
  },
  {
    title: "SOCIALS #10000",
    text: "We are breaking the mark of 10,000 Twitter followers.",
  },
  {
    title: "MINT!!!",
  },
];

export const ModalContext = React.createContext<{
  isModalOpen: boolean;
  setIsModalOpen: (value: boolean) => void;
  image: string;
  setImage: (value: string) => void;
  description: string;
  setDescription: (value: string) => void;
}>({
  isModalOpen: false,
  setIsModalOpen: () => {},
  image: "",
  setImage: () => {},
  description: "",
  setDescription: () => {},
});

export const MainPage = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [image, setImage] = React.useState("");
  const [description, setDescription] = React.useState("");

  return (
    <ModalContext.Provider
      value={{
        isModalOpen,
        setIsModalOpen,
        image,
        setImage,
        description,
        setDescription,
      }}
    >
      <ModalNFT></ModalNFT>
      <div className="App">
        <div className="container">
          <Header></Header>
        </div>
        <Intro></Intro>

        <BlockTitle id="collection" value="COLLECTION"></BlockTitle>
        <Roulette></Roulette>

        <BlockTitle id="roadmap" value="ROADMAP"></BlockTitle>
        <div className="roadmap">
          <RoadmapItem
            firstPoint="start"
            secondPoint="mint"
            list={roadMapList}
          ></RoadmapItem>
          <RoadmapItem
            isDisabled={true}
            firstPoint="mint"
            secondPoint="long"
          ></RoadmapItem>
        </div>

        <BlockTitle value="PROJECT"></BlockTitle>
        <div className="justify-center">
          <div className="project-wrapper">
            <div className="project"></div>
            <img className="project__img" src={bigLock} alt="big lock" />
          </div>
        </div>

        <BlockTitle value="UNIQUE DISCORD BOT"></BlockTitle>
        <div className="container">
          <DiscordBotBlock></DiscordBotBlock>
        </div>

        <BlockTitle id="pre-register" value="PRE-REGISTER"></BlockTitle>
        <div className="pre-register">
          <p className="pre-register__text">
            Users who get to pre-registration will receive free boxes with
            prizes consisting of our secret collection, which we have not shown
            yet and prepared especially for @Pioneer in our discord 🎁 🎁 🎁
          </p>
          <Form></Form>
        </div>

        <InfoBlock></InfoBlock>
        <Footer></Footer>
      </div>
    </ModalContext.Provider>
  );
};
