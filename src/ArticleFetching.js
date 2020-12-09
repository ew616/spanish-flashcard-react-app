import React, { useState, useEffect } from "react";

function ArticleFetching() {
  const [articleData, setArticleData] = useState([]);

  useEffect(() => {
    async function fetchArticles() {
      fetch("https://newscatcher.p.rapidapi.com/v1/latest_headlines?lang=es", {
        method: "GET",
        headers: {
          "x-rapidapi-key":
            "a2ab389a75msh5b29f2793003f77p1f102ejsn36decbb7cdc5",
          "x-rapidapi-host": "newscatcher.p.rapidapi.com",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          const articleArray = data.articles;
          setArticleData(articleArray);
        });
    }

    fetchArticles();
  }, []);

  return (
    <div>
      {articleData.map((article) => {
        return (
          <div key={article._id}>
            <h4>{article.title}</h4>
            <a href={article.link}>{article.link}</a>
          </div>
        );
      })}
    </div>
  );
}

export default ArticleFetching;
