import React, { useState } from "react";
import AddWord from "./AddWord";
import MasterWordBank from "./MasterWordBank";
import GenerateAllCards from "./GenerateAllCards";
import { map } from "lodash";
import ArticleFetching from './ArticleFetching';
import DisplayingListedArticles from './DisplayingListedArticles';

function AddingToBankRoute() {
    // function generateQuote() {
    //     fetch("https://quotes15.p.rapidapi.com/quotes/random/", {
    //         "method": "GET",
    //         "headers": {
    //             "x-rapidapi-key": "a2ab389a75msh5b29f2793003f77p1f102ejsn36decbb7cdc5",
    //             "x-rapidapi-host": "quotes15.p.rapidapi.com"
    //         }
    //     })
    //     .then(response => {
    //         const data = response
    //         console.log(data);
    //     })
    //     .catch(err => {
    //         console.error(err);
    //     });
    // }
    
    // async function generateNewsArticles() {
    //    await fetch("https://newscatcher.p.rapidapi.com/v1/latest_headlines?lang=es", {
    //         "method": "GET",
    //         "headers": {
    //             "x-rapidapi-key": "a2ab389a75msh5b29f2793003f77p1f102ejsn36decbb7cdc5",
    //             "x-rapidapi-host": "newscatcher.p.rapidapi.com"
    //         }
    //     })
    //     .then(response => {
    //         return response.json()
    //     })
    //     .then(data => {
    //         console.log(data)
    //         {data.articles.map((article) => {
    //             <div key={article._id}>
    //                 <h1>{article.title}</h1>
    //                 <h4>{article.link}</h4>
    //             </div>
    //         })}
    //     })
    //     .catch(err => {
    //         console.error(err);
    //     });
    // }

    return (
        <div>
            <h1>Add Some Shit, Go Nuts With It</h1>

            <AddWord bank={MasterWordBank} />

            <br />

            <GenerateAllCards bank={MasterWordBank} />

            <ArticleFetching />
        </div>
    )

}

export default AddingToBankRoute;