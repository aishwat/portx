import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

import SubHeader from "./SubHeader";
import { Fragment } from "react";

import P1 from "../assets/p1.jpg";
import P2 from "../assets/p2.jpeg";
import P3 from "../assets/p3.jpg";
import P4 from "../assets/p4.png";
import P5 from "../assets/p5.jpg";
import P6 from "../assets/p6.jpg";
import P7 from "../assets/financialexpressimpactoneconomy.jpeg";
import P8 from "../assets/htauto.jpeg";
import P9 from "../assets/meta.jpeg";

const useStyles = makeStyles({
  card: {
    maxWidth: 450,
    margin: "auto",
  },
  media: {
    width: "100%",
    // opacity:"0.8"
  },
  descHover: {
    textAlign: "left",
    marginTop: "10px",
  },
  desc: {
    textAlign: "left",
    marginTop: "15px",
  },
  border: {
    // borderWidth: "thin",
    // border: "#666666",
    // borderStyle: "dashed",
    // backgroundColor: "#e1e1e1",
  },
  grid: {
    justifyContent: "space-around",
  },
  gridItem: {
    margin: "10px 10px 30px 10px",
    // borderWidth: "thin",
    // border: "#666666",
    // borderStyle: "dashed",
    // backgroundColor: "#e1e1e1",
  },
  cardContent: {
    // backgroundColor: "#e1e1e1",
  },
});

const writings = [
  
  {
    id: "p1",
    cover: P1,
    url:
      "https://www.financialexpress.com/industry/technology/start-re-imagining-your-cars-apple-is-here-to-disrupt-mobility/2219104/",
    title: "Start Re-imagining your cars - Apple is here to disrupt mobility",
    desc:
      "Financial Express - Apple changed the way we used mobile phones, the way we used to listen to music. It is a disruptive cash rich force which has changed many industries. It is all set to enter mobility in 2024 by launching cars.",
  },
  {
    id: "p2",
    cover: P2,
    url:
      "http://www.businessworld.in/article/Top-5-Trends-For-The-202x-Decade-In-Automobile-Industry-Disrupt-Or-Die-/19-01-2021-367100/",
    title: "Top 5 trends in 202x decade in Automobile industry: Disrupt or Die",
    desc:
      "Business world - Automobile is a legacy industry, which has yet not seen tectonic digital disruption. 202x decade will be a paradigm shift from internal combustion to EV's, ownership to subscription, human driven to self driven....",
  },
  {
    id: "p3",
    cover: P3,
    url:
      "http://www.businessworld.in/article/2020-for-Indian-Automobile-sector-A-Forgettable-Year-Which-Started-The-Build-Up-Of-The-Digital-Future-/06-01-2021-362187/",
    title: "How To Receive Constructive Feedback Effectively",

    desc:
      "Business world - Often, people confuse constructive feedback with criticism and that's when the negative emotions start to take the front seat and overleap the positive notations",
  },
  {
    id: "p4",
    cover: P4,
    url: "https://www.entrepreneur.com/article/361602",
    title: "How To Look For an Angel Investor For Your Startup",
    desc:
      "Entrepreneur.com - Ideas and practical on finding an investors for your startup when you are in the process of proving the idea.",
  },
  {
    id: "p5",
    cover: P5,
    url: "https://oasis.kr-asia.com/leadership-is-about-mentorship",
    title: "Leadership is about Mentorship",

    desc:
      "The role of mentorship is so propelling that it transforms individuals in every way possible. Role of a great leader is to identify the hidden talent in the team and create environment that allows people to perform beyond their potential.",
  },
  {
    id: "p6",
    cover: P6,
    url: "https://www.entrepreneur.com/article/360222",
    title: "Simple Tricks to Keep Yourself Motivated in tough times",
    desc:
      "Entrepreneur.com - Tough times do not last but tough people do. We all go through tough times, some we control and some we influence. Keeping yourself motivated is the key to navigate difficulties.",
  },
  {
    id: "p7",
    cover: P7,
    url: "https://www.financialexpress.com/economy/impact-on-indian-economy-after-the-covid-19-second-wave/2275353/",
    title: "Impact on Indian economy after the COVID-19 second wave",
    desc:
      "Financial Express - Agriculture will see a deeper cut from the second wave compared to the first wave where it grew.",
  },
  {
    id: "p8",
    cover: P8,
    url: "https://auto.hindustantimes.com/auto/news/opinion-curious-case-of-indian-car-market-where-david-wins-and-goliath-loses-41636947152901.html",
    title: "Curious case of Indian car market, where David wins and Goliath loses",
    desc:
      "Hindustan Times - Ford and GM have not succeeded in India while Kia and MG have seen runaway success. Why?",
  },
  {
    id: "p9",
    cover: P9,
    url: "https://www.financialexpress.com/industry/technology/from-meta-facebook-to-metaverse-real-world-problems-solved-by-the-virtual/2401692/",
    title: "From Meta (Facebook) to metaverse: Real world problems solved by the virtual",
    desc:
      "Financial Express - The metaverse has diverse use cases, far beyond gaming and entertainment...",
  },
];

const Writings = () => {
  const classes = useStyles();

  const [activeCard, setActiveCard] = React.useState(0);
  const onMouseEnterHandler = (i) => (e) => {
    console.log("enter handler", i);
    setActiveCard(i);
  };
  const onMouseLeaveHandler = (i) => (e) => {
    console.log("leave handler", i);
    setActiveCard(0);
  };

  const cardClickHandler = (writeup) => (e) => {
    console.log(writeup.title);
    const newWindow = window.open(writeup.url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };

  return (
    <Fragment>
      <SubHeader>Select Publications</SubHeader>
      <Grid container className={classes.grid}>
        {writings.map((writeup) => (
          <Grid
            key={writeup.id}
            item
            // xs={12}
            // sm={4}
            //
            className={classes.gridItem}
            onMouseEnter={onMouseEnterHandler(writeup.id)}
            onMouseLeave={onMouseLeaveHandler(writeup.id)}
          >
            <Card
              className={classes.card}
              elevation={activeCard === writeup.id ? 8 : 2}
            >
              <CardActionArea onClick={cardClickHandler(writeup)}>
                <CardMedia
                  component="img"
                  alt={writeup.title}
                  // height="100"
                  className={classes.media}
                  image={writeup.cover}
                  title={writeup.title}
                />
              </CardActionArea>
              <CardContent className={classes.cardContent}>
                <CardActionArea onClick={cardClickHandler(writeup)}>
                  <Typography variant="h5" component="h2" color="primary">
                    {writeup.title}
                  </Typography>
                </CardActionArea>

                <Typography
                  variant={activeCard === writeup.id ? "body1" : "body2"}
                  className={classes.desc}
                >
                  {writeup.desc}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Fragment>
  );
};

export default Writings;
