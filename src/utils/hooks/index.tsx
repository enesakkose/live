import { io } from "socket.io-client";
import { useQuery } from "@tanstack/react-query";
import { Category } from "@/types";
import { QueryFunction } from "@tanstack/react-query";

//const socket  = io('http://localhost:5000')
const BASE_URL = 'https://sofascores.p.rapidapi.com'
const OPTIONS = {
	method: 'GET',
	headers: {
		'X-RapidAPI-key': '11003ffe37msh1ebfc217237d84bp1b8e38jsn1ded668c1a2b',
		'X-RapidAPI-Host': 'sofascores.p.rapidapi.com'
	}
};


const getCategory = async(id: string): Promise<Category[]> => {
  return await (await fetch(`${BASE_URL}/v1/categories?sport_id=${id}`, OPTIONS)).json()
}

export const useGetCategory = (id: string) => {
  return useQuery(['category', id], () => getCategory(id),{
    refetchOnWindowFocus: false
  })
}
