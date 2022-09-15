import axios from "axios";
import type { FeedItem, Item, User } from "@/api/model";

const news = axios.create({
  baseURL: "https://api.hnpwa.com/v0/news",
});

const ask = axios.create({
  baseURL: "https://api.hnpwa.com/v0/ask",
});

const jobs = axios.create({
  baseURL: "https://api.hnpwa.com/v0/jobs",
});

const user = axios.create({
  baseURL: "https://api.hnpwa.com/v0/user",
});

const item = axios.create({
  baseURL: "https://api.hnpwa.com/v0/item",
});

function fetchNewsList() {
  return news.get<FeedItem[]>("/1.json");
}

function fetchAskList() {
  return ask.get<FeedItem[]>("/1.json");
}

function fetchJobsList() {
  return jobs.get<FeedItem[]>("/1.json");
}

function fetchUser(id: string) {
  return user.get<User>(`/${id}.json`);
}

function fetchItem(id: string) {
  return item.get<Item>(`/${id}.json`);
}

export { fetchNewsList, fetchAskList, fetchJobsList, fetchUser, fetchItem };
