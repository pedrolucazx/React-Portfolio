import {useState, useEffect } from "react";
import PortfolioList from "../portfolioList/PortfolioList"
import "./portfolio.scss"
import{
    exemplo1,
    exemplo2,
    exemplo3,
    exemplo4,
    exemplo5,
} from "../../data";

export default function Portfolio() {
    const [selected, setSelected] = useState("exemplo1");
    const [data, setData] = useState([]);
    const list = [
        {
            id: "exemplo1",
            title: "Exemplo 1"
        },

        {
            id: "exemplo2",
            title: "Exemplo 2"
        },

        {
            id: "exemplo3",
            title: "Exemplo 3"
        },

        {
            id: "exemplo4",
            title: "Exemplo 4"
        },

        {
            id: "exemplo5",
            title: "Exemplo 5"
        },
    ];

    useEffect( () =>{

        switch(selected){
            case "exemplo1":
                setData(exemplo1);
                break
            case "exemplo2":
                setData(exemplo2);
                break
            case "exemplo3":
                setData(exemplo3);
                break
            case "exemplo4":
                setData(exemplo4);
                break
            case "exemplo5":
                setData(exemplo5);
                break
            default:
                setData(exemplo1);
        }

    },[selected]);

    return (
        <div className="portfolio" id="portfolio">
            <h1>Portfólio</h1>
            <ul>
                {list.map((item) => (
                    <PortfolioList 
                        title = {item.title} 
                        active = { selected === item.id} 
                        setSelected = {setSelected}
                        id = {item.id}
                    />
                ))}
            </ul>
            <div className="container">
                {data.map( (d) => (
                    <div className="item">
                        <img 
                            src={d.img} 
                            alt="" 
                        />
                        <h3>{d.title}</h3>
                    </div> 
                ))}  
            </div>
        </div>
    )
}
