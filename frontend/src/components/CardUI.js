import React from 'react';
import PageTitle from '../components/PageTitle';
import 'react-week-calendar/dist/style.css';

const goToUpdate = async event =>
{
    event.preventDefault();
    window.location.href = '/update';
}

const CardUI = () =>
{
    return(
        <div>
        <PageTitle />
        <button onClick={goToUpdate}>Go to Update</button>
        </div>
    );
};
export default CardUI;