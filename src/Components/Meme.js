export default function Meme() {
    return (
        <main>
            <form>
                <div className="meme-form--input-wrapper">
                    <input className="meme--input-top-text" type="text" placeholder="Top Text" />
                    <input className="meme--input-bot-text" type="text" placeholder="Bottom Text" />
                </div>
                <input 
                    className="generate-meme" 
                    type="submit" 
                    value="Get a new meme image" 
                />
            </form>
        </main>
    );
}