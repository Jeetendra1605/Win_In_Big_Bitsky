import { useState } from "react"
import { FiHeart } from "react-icons/fi"
import { FaHeart } from "react-icons/fa"

import "../assets/css/popularGame.scss"
import Game1 from '../assets/images/games/Game_1.png'
import Game2 from '../assets/images/games/Game_2.png'
import Game3 from '../assets/images/games/Game_3.png'
import Game4 from '../assets/images/games/Game_4.png'
import Game5 from '../assets/images/games/Game_5.png'
import Game6 from '../assets/images/games/Game_6.png'
import Game7 from '../assets/images/games/Game_7.png'
import Game8 from '../assets/images/games/Game_8.png'
import Game9 from '../assets/images/games/Game_9.png'
import Game10 from '../assets/images/games/Game_10.png'


const data = [
  { id: 1, name: "game one", img: Game1 },
  { id: 2, name: "game two", img: Game2 },
  { id: 3, name: "game three", img: Game3 },
  { id: 4, name: "game four", img: Game4 },
  { id: 5, name: "game five", img: Game5 },
  { id: 6, name: "game six", img: Game6 },
  { id: 7, name: "game seven", img: Game7 },
  { id: 8, name: "game eight", img: Game8 },
  { id: 9, name: "game nine", img: Game9 },
  { id: 10, name: "game ten", img: Game10 },
]

export default function PopularGame() {
  const [favorites, setFavorites] = useState([])

  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((fid) => fid !== id) : [...prev, id]
    )
  }

  return (
    <section className="popularGame_section">
      <div className="main-head">
        <h2 className="head-5 heading text-center">Popular Games</h2>
      </div>

      <div className="games">
        {data.map((game) => (
          <div className="box" key={game.id}>
            <div className="mask">
              <img src={game.img} alt={game.name} loading="lazy" className="masked" />
              <div
                className="fav-icon"
                onClick={() => toggleFavorite(game.id)}
                title="Add to favorites"
              >
                {favorites.includes(game.id) ? (
                  <FaHeart className="filled" />
                ) : (
                  <FiHeart />
                )}
              </div>
            </div>

            <div className="btn-shadow">
              <div className="btn-wrapper">
                <button className="game-button" type="button">
                  <div className="content">
                    <span className="text">Play Now</span>
                  </div>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
