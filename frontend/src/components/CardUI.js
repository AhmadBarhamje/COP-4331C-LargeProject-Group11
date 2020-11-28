import React, {useState} from 'react';
import api from '../api';

function CardUI()
{
    var card = '';
    var search = '';

    const [message,setMessage] = useState('');
    const [searchResults,setResults] = useState('');
    const [cardList,setCardList] = useState('');

    var _ud = localStorage.getItem('user_data');
    var ud = JSON.parse(_ud);
    var userId = ud.id;
    var firstName = ud.firstName;
    var lastName = ud.lastName;
    
    
    const app_name = 'cop4331-group11-large'
    function buildPath(route)
    {
        if (process.env.NODE_ENV === 'production') 
        {
            return 'https://' + app_name +  '.herokuapp.com/' + route;
        }
        else
        {        
            return 'http://localhost:5000/' + route;
        }
    }

    const goUpdatePage = async event =>
    {
        event.preventDefault();
        window.location.href = '/update';
    }

    const addCard = async event => 
    {
	    event.preventDefault();

        var obj = {userId:userId,card:card.value};
        var js = JSON.stringify(obj);

        try
        {
            const response = fetch(buildPath('api/addcard'),
            {method:'POST',body:js,headers:{'Content-Type': 'application/json'}});
            setMessage('Card has been added');
        }
        catch(e)
        {
            setMessage(e.toString());
        }

	};

    // Testing middleware
    const searchCard = async event => 
    {
        event.preventDefault();
        		
        var obj = {userId:userId,search:search.value};
        var js = JSON.stringify(obj);

        try
        {
            const res = await api.protected();
            console.log(res);
            console.log(res.data);
        }
        catch(e)
        {
            alert(e.toString());
            setResults(e.toString());
        }
    };

    return(
      <div class="wrapper fadeIn first">
        <div id="cardUIDiv">
            <br /><br />
            <input type="text" id="searchText" class="fadeIn second" placeholder="Card To Search For"
                ref={(c) => search = c} />
            <button type="button" id="searchCardButton" class="buttons fadeIn third"
                onClick={searchCard}> Search Card</button>
            <span id="cardSearchResult">{searchResults}</span>
            <p id="cardList">{cardList}</p><br />
            <input type="text" id="cardText" class="fadeIn second" placeholder="Card To Add"
                ref={(c) => card = c} />
            <button type="button" id="addCardButton" class="buttons fadeIn third"
                onClick={addCard}> Add Card </button>
            <span id="cardAddResult">{message}</span>
       </div>
    </div>
    );
}

export default CardUI;