import React, {useState, useEffect} from 'react';

export default function Meme() {
    const [allMemes, setAllMemes] = useState([]);
    const [currentMeme, setCurrentMeme] = useState({
        url: '',
        topText: '',
        bottomText: ''
    });

    useEffect(() => {
        fetch('https://api.imgflip.com/get_memes')
            .then(res => res.json())
            .then(data => setAllMemes(data.data.memes));
    }, []);

    function newMeme(e) {
        e.preventDefault();
        const randomNumber = Math.floor(Math.random() * allMemes.length);
        const url = allMemes[randomNumber].url;
        
        setCurrentMeme(prev => ({...prev, url: url}));
    }

    function handleChange(e) {
        const {value, name} = e.target;

        setCurrentMeme(prev => ({...prev, [name]: value}));
    }

    return (
        <main>
            <form>
                <div className="meme-form--input-wrapper">
                    <input 
                        className="meme--input-top-text" 
                        type="text" 
                        placeholder="Top Text"
                        name="topText"
                        value={currentMeme.topText}
                        onChange={handleChange} 
                    />
                    <input 
                        className="meme--input-bot-text" 
                        type="text" 
                        placeholder="Bottom Text"
                        name="bottomText"
                        value={currentMeme.bottomText}
                        onChange={handleChange} 
                    />
                </div>
                <input 
                    className="generate-meme" 
                    type="button" 
                    value="Get a new meme image"
                    onClick={newMeme} 
                />
            </form>
            {
                currentMeme.url && 
                <div className="meme">
                    <img src={currentMeme.url} className="meme--image" />
                    <h2 className="meme--text top">{currentMeme.topText}</h2>
                    <h2 className="meme--text bottom">{currentMeme.bottomText}</h2>
                </div>
            }  
        </main>
    );
}