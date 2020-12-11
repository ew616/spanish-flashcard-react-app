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
        <h3 className='article-list-title'>In Today's Random News</h3>

        <ol>
      {articleData.map((article) => {
        return (
          <div key={article._id} className='article-list-item'>
                <li>
                    <h6><strong>{article.title}</strong></h6>
                    <a href={article.link}>{article.link}</a>
                </li>
          </div>
        );
      })}
      </ol>
    </div>
  );
}

export default ArticleFetching;
