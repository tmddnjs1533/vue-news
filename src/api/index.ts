import axios from "axios";
import type { IAsk, IJobs, INews } from "@/api/model";

const news = axios.create({
  baseURL: "https://api.hnpwa.com/v0/news",
});

const ask = axios.create({
  baseURL: "https://api.hnpwa.com/v0/ask",
});

const jobs = axios.create({
  baseURL: "https://api.hnpwa.com/v0/jobs",
});

function fetchNewsList() {
  return news.get<INews[]>("/1.json");
}

function fetchAskList() {
  return ask.get<IAsk[]>("/1.json");
}

function fetchJobsList() {
  return jobs.get<IJobs[]>("/1.json");
}

export { fetchNewsList, fetchAskList, fetchJobsList };
