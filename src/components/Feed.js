import React, {useState, useEffect} from 'react'
import {CalendarViewDay, EventNote, Subscriptions, Image, Create} from '@mui/icons-material'
import InputOption from './InputOption'
import Post from './Post'
import './Feed.css'
import firebase from 'firebase/compat/app'
import db from '../firebase'


const Feed  = () => {
    const [posts, setPosts] = useState([])
    const [input, setInput] = useState('')

    useEffect(() => {
        db.collection('posts').orderBy('timestamp', 'desc').
        onSnapshot(snapshot => {
        setPosts(snapshot.docs.map(doc => ({
        id: doc.id,
        data: doc.data()
    })))
    }) 
    }, [])

    const sendPost = e => {
        e.preventDefault()
        db.collection('posts').add({
            name:'denis kidagi',
            description: "javascript developer",
            message: input,
            photoUrl:"",
            timestamp: firebase.firestore.FieldValue.serverTimestamp()})
            setInput('')
    }
  return (
    <div className='feed'>
        <div className='feedInput__container'>
            <div className='feed__input'>
                <Create/>
                <form>
                    <input value={input} onChange={e => setInput(e.target.value)} type='text'/>
                    <button onClick={sendPost} type='submit'>send</button>
                </form>
            </div>
            <div className='feed__inputOptions'>
                <InputOption Icon={Image} title='photo' color='#70B5F9'/>
                <InputOption Icon={Subscriptions} title='video' color='#E7A33E'/>
                <InputOption Icon={EventNote} title='event' color='#COCBCD'/>
                <InputOption Icon={CalendarViewDay} title='Write Article' color='#7C15E'/>
            </div>
        </div>
        <Post name="denis kidagi" description="javascript developer" message="hello everyone"/>
        {posts.map(({id, data}) => (
            <Post 
                key={id}
                name={data.name}
                description={data.description}
                message={data.message}
                photoUrl={data.photoUrl}
            />
        ))}
    </div>
);
}
export default Feed