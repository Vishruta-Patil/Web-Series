import "./styles.css";
import react, { useState } from "react";

const webSeriesDB = {
  Comedy: [
    {
      Title: "Friends ",
      Description:
        "This show is about 6 friends who go through every life experience imaginable together; love, marriage, divorce, children, heartbreaks, fights, new jobs and job losses and all sorts of drama.",
      Image:
        "https://upload.wikimedia.org/wikipedia/en/thumb/d/d6/Friends_season_one_cast.jpg/220px-Friends_season_one_cast.jpg",
      Rating: `8.9/10`
    },
    {
      Title: "The Big Bang Theory",
      Description:
        "This series is about brilliant physicists who don't know how to interact with people, especially women. All this begins to change when a free-spirited woman moves in next door.",
      Image:
        "https://upload.wikimedia.org/wikipedia/en/thumb/7/7b/The_Big_Bang_Theory_%28Official_Title_Card%29.png/250px-The_Big_Bang_Theory_%28Official_Title_Card%29.png",
      Rating: `8.1/10`
    },
    {
      Title: "Young Sheldon",
      Description:
        "This series is about a child genius named Sheldon Cooper and his family. Some unique challenges face Sheldon who seems socially impaired.",
      Image:
        "https://upload.wikimedia.org/wikipedia/en/thumb/6/68/Young_Sheldon_title_card.png/250px-Young_Sheldon_title_card.png",
      Rating: `7.4/10`
    }
  ],
  Drama: [
    {
      Title: "Kota Factory",
      Image:
        "https://upload.wikimedia.org/wikipedia/en/thumb/d/d9/Kota_Factory_poster.jpg/250px-Kota_Factory_poster.jpg",
      Description:
        "It is the first black and white web series in India. The show follows the life of 16-year-old Vaibhav who moves to Kota to get into IIT.",
      Rating: `9/10`
    },

    {
      Title: "Panchayat",
      Description:
        "This series chronicles the life of engineering graduate who joins as a Panchayat secretary in a remote village due to lack of better job options.",
      Image:
        "https://upload.wikimedia.org/wikipedia/en/thumb/1/1a/Panchayat_logo.jpg/250px-Panchayat_logo.jpg",
      Rating: `8.7/10`
    },

    {
      Title: "The Family Man",
      Description:
        "A working man from the National Investigation Agency tries to protect the nation from terrorism, but he also needs to keep his family safe from his secret job.",
      Image:
        "https://upload.wikimedia.org/wikipedia/en/thumb/d/dc/The_Family_Man.jpeg/250px-The_Family_Man.jpeg",
      Rating: `8.6/10`
    }
  ],

  Crime: [
    {
      Title: "Scam 1992,The Harshad Mehta Story",
      Image:
        "https://upload.wikimedia.org/wikipedia/en/thumb/c/c8/Scam_1992_poster.png/250px-Scam_1992_poster.png",
      Description:
        "Scam 1992 follows life of Harshad Mehta,stockbroker who single-handedly took the stock market to dizzying heights & his catastrophic downfall.",
      Rating: `9.5/10`
    },
    {
      Title: "Sacred Games",
      Description:
        "A link in their pasts leads an honest cop to a fugitive gang boss, whose cryptic warning spurs the officer on a quest to save Mumbai from cataclysm.",
      Image:
        "https://upload.wikimedia.org/wikipedia/en/thumb/7/7a/Sacred_Games_Title.png/250px-Sacred_Games_Title.png",
      Rating: `8.7/10`
    },
    {
      Title: "Mirzapur ",
      Image:
        "https://upload.wikimedia.org/wikipedia/en/thumb/3/3c/Poster_of_Mirzapur_2018.jpg/220px-Poster_of_Mirzapur_2018.jpg",
      Description:
        "A shocking incident at a wedding procession ignites a series of events entangling the lives of two families in the lawless city of Mirzapur.",
      Rating: `8.4/10`
    }
  ]
};

const webSeriesList = Object.keys(webSeriesDB);

export default function App() {
  const [selectedGenre, setGenre] = useState("Crime");
  function clickHandler(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <h1> <span>📺</span> Web Series</h1>
      <h2>Select the genre according to your interest</h2>

      {webSeriesList.map((genre) => (
        <button
          className="btn"
          onClick={() => {
            clickHandler(genre);
          }}
        >
          {genre}
        </button>
      ))}

      <ul>
        {webSeriesDB[selectedGenre].map((webSeries) => (
          <li>
            <div className="content">
              <div class="img">
                <img src={webSeries.Image} alt="web series poster" />
              </div>
              <div className="details">
                <h2> {webSeries.Title} </h2>
                <p> {webSeries.Description} </p>
                <p class = "rating"> {webSeries.Rating} </p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
