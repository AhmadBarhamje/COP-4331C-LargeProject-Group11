import React, { useState } from "react";
import api from "../api";

function CardUI() {
  var card = "";
  var search = "";

  const [message, setMessage] = useState("");
  const [searchResults, setResults] = useState("");
  const [cardList, setCardList] = useState("");

  var _ud = localStorage.getItem("user_data");
  var ud = JSON.parse(_ud);
  var userId = ud.id;
  var firstName = ud.firstName;
  var lastName = ud.lastName;
  
    window.onload = readCookie();
  function readCookie() {
  var user = -1;
  var data = document.cookie;
  var splits = data.split(",");
// if other data is wanted from the cookie, will be split in the tokens array. Here for future usage if required
  for (var i = 0; i < splits.length; i++) {
        var thisOne = splits[i].trim();
        var tokens = thisOne.split("=");
        if (tokens[0] == "user") {
            user = parseInt(tokens[1].trim());
        }
        if (user > 0) {
            return user;
        } else {
            window.location.href = '/';
        }
    }
}

  const app_name = "cop4331-group11-large";
  function buildPath(route) {
    if (process.env.NODE_ENV === "production") {
      return "https://" + app_name + ".herokuapp.com/" + route;
    } else {
      return "http://localhost:5000/" + route;
    }
  }

  const addCard = async (event) => {
    event.preventDefault();

    var obj = { userId: userId, card: card.value };
    var js = JSON.stringify(obj);

    try {
      const response = fetch(buildPath("api/addcard"), {
        method: "POST",
        body: js,
        headers: { "Content-Type": "application/json" },
      });
      setMessage("Card has been added");
    } catch (e) {
      setMessage(e.toString());
    }
  };

  // Testing middleware
  const searchCard = async (event) => {
    event.preventDefault();

    var obj = { userId: userId, search: search.value };
    var js = JSON.stringify(obj);

    try {
      const res = await api.protected();
      console.log(res);
      console.log(res.data);
    } catch (e) {
      alert(e.toString());
      setResults(e.toString());
    }
  };

  return (
    <div class='wrapper fadeIn first'>
      <div id='cardUIDiv'>
        <br />
        <br />
        <span
          id='menu'
          class='fadeIn third'
          onClick={(e) => {
            e.preventDefault();
            window.location = "/changepassword";
          }}
        >
          {" "}
          Change Password
        </span>
        <span
          id="menu"
          class='fadeIn third'>
          view schedule
        </span>
        <span
          id="menu"
          class='fadeIn third'>
          Update availability
        </span>
            <span class="floatingboat">
            <div class="waves background"></div>
            <div class="boat-wrapper">
          <div class="boat"></div>
         </div>
      <div class="waves foreground"></div>
    </span>
  </div>
</div>
  );
}

export default CardUI;
