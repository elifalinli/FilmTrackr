import { NextResponse } from "next/server";

const apiKEY = process.env.API_KEY;


export async function GET(request) {
    const {searchParams} = new URL(request.url)
    const query = searchParams.get('query')
    const includeAdult = searchParams.get('includeAdult')

    const url = `https://api.themoviedb.org/3/search?api_key=${apiKEY}&query=${query}&include_adult=${includeAdult}`;

    const response = await fetch(url);
    const data = await response.json();

    return NextResponse.json(data);
    

}