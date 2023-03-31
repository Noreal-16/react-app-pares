import React from "react";
import { useState, useEffect } from 'react';
import '../App.css';
import { ContentComponent } from '../components/contentresult';
import { FormsComponent } from '../components/form';
import { HeadersComponent } from '../components/headers'
import APIURL from "../utils/API";
import TOKEN from "../utils/TOKEN";


export  const HomePage =()=> {
    const [dataPares, setDataPares] = useState([]);
    const GetPares = () => {
        fetch(APIURL, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${TOKEN}`,
                "Content-Type": "application/json",
            },
        })
            .then((response) => response.json())
            .then((data) => {
                setDataPares(data);
            })
            .catch((error) => console.error(error));
    }
    useEffect(() => {
        GetPares();
    }, []);
    return (
        <div className="App">
            <HeadersComponent />
            <div className='container-card-app'>
                <div className='container-form'>
                    <FormsComponent />
                </div>
                <div className='container-cards'>
                {dataPares && dataPares.map((dataPairs, index)=>(
                        <ContentComponent key={index} data={dataPairs} />
                ))}
                </div>
            </div>
        </div>
    );
}
