import { useRouter } from "next/router";
import NewMeetupForm from "../../components/meetups/NewMeetupForm"
import { Fragment } from "react";
import Head from "next/head";


const NewMeetupPage = () => {

    const router = useRouter();

const addMeetupHandler = async (enteredMeetupData) => {
    const response = await fetch('/api/new-meetup',{
        method : 'POST', 
        body: JSON.stringify(enteredMeetupData),
        headers: {
            'Content-Type' :'application/json'
        }   
    });
    const data = await response.json();
    console.log(data);
    router.push('/');
}


return (

    <Fragment>
      <Head>
        <title>Add new Meetup</title>
        <meta   
          name='description'
          content='Aggiungi un meetup, per favore!!'
        />
      </Head>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </Fragment>
    
)
}

export default NewMeetupPage;