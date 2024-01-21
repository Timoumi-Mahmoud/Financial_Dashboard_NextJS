'use client'

export default async function  Page(){
console.log("ffff");
console.log('Fetching revenue data...');
await new Promise((resolve) => setTimeout(resolve, 3000));
    return <p>Custormer Page</p>
}