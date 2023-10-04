import React from 'react';
import MovieCard from "@/app/components/MovieCard";
import styles from "@/app/styles/common.module.css"

const Movie = async () => {

    await new Promise(resolve => setTimeout(resolve, 100));

    const url = 'https://netflix54.p.rapidapi.com/search/?query=stranger&offset=0&limit_titles=50&limit_suggestions=20&lang=en';
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'd029042de5mshfdf3702f71cf6c4p1084dfjsnf45cde1b7737',
        'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
      }
    };
    
    const res = await fetch(url, options);
    const data = await res.json();
    const maindata = data.titles;
    // console.log(main_data.jawSummary)

    return (
        <>
            <section className={styles.movieSection}>
                <div className={styles.container}>
                    <h1>Series & Movie</h1>
                    <div className={styles.card_section}>
                        {
                           maindata.map((curElem) => {
                                return <MovieCard key={curElem.id} {...curElem} />
                            })
                        }
                    </div>
                </div>
            </section>
        </>
    );
};

export default Movie;