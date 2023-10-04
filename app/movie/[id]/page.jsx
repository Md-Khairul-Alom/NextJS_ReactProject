import React from 'react';
import styles from "@/app/styles/common.module.css"
import Image from "next/image";

const Page = async ({params}) => {
    const id = params.id;

const url = `https://netflix54.p.rapidapi.com/title/details/?ids=${id}&lang=en`;
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'd029042de5mshfdf3702f71cf6c4p1084dfjsnf45cde1b7737',
    'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
  }
};

    const res = await fetch(url, options);
    const data = await res.json();
    const maindata = data[0].details;

    return (

            <div className={styles.container}>
                <h2 className={styles.movie_title}>   Netflix \ <span> {maindata.type} </span> </h2>
                <div className={styles.card_section}>
                    <div>
                        <Image src={maindata.backgroundImage.url} alt={maindata.title} width={600} height={300} />
                    </div>
                    <div>
                        <h1>{maindata.title}</h1>
                        <p>{maindata.synopsis}</p>
                    </div>
                </div>
            </div>

    );
};

export default Page;