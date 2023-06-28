import "./main.css";
import EntryForm from "../Entry form/EntryForm.js";
import Entries from "../Entries/Entries.js";
import { uid } from "uid";
import { useState } from "react";

export default function Main() {
  const initialEntries = [
    {
      id: 1000,
      date: "Feb 5, 2025",
      motto: "We are in a state of chaos",
      notes:
        "Today I learned about React State. It was fun! I can't wait to learn more.",
      isFavorite: false,
    },
    {
      id: 999,
      date: "Feb 4, 2025",
      motto: "Props, Props, Props",
      notes:
        "Today I learned about React Props. Mad props to everyone who understands this!",
      isFavorite: false,
    },
    {
      id: 998,
      date: "Feb 3, 2025",
      motto: "How to nest components online fast",
      notes:
        "Today I learned about React Components and how to nest them like a pro. Application design is so much fun!",
      isFavorite: false,
    },
    {
      id: 997,
      date: "Feb 2, 2025",
      motto: "I'm a React Developer",
      notes: "My React-ion when I learned about React: 😍",
      isFavorite: false,
    },
  ];

  const [entries, setEntries] = useState(initialEntries);
  const [filter, setFilter] = useState("all");

  const handleAddEntry = (newEntry) => {
    const date = new Date().toLocaleDateString("en-us", {
      dateStyle: "medium",
    });
    const id = uid();
    newEntry = { ...newEntry, date, id, isFavorite: false };
    setEntries([newEntry, ...entries]);
  };

  const handleToggleFavorite = (id) => {
    setEntries((prevEntries) =>
      prevEntries.map((entry) => {
        if (entry.id === id) {
          return {
            ...entry,
            isFavorite: !entry.isFavorite,
          };
        }
        return entry;
      })
    );
  };

  const handleShowAllEntries = () => {
    setFilter("all");
  };

  const handleShowFavoriteEntries = () => {
    setFilter("favorites");
  };

  const favoriteEntries = entries.filter((entry) => entry.isFavorite);
  const displayedEntries = filter === "favorites" ? favoriteEntries : entries;

  return (
    <>
      <main>
        <EntryForm onAddEntry={handleAddEntry} />
        <Entries
          entries={displayedEntries}
          onToggleFavorite={handleToggleFavorite}
          filter={filter}
          onShowAllEntries={handleShowAllEntries}
          onShowFavoriteEntries={handleShowFavoriteEntries}
          allEntriesCount={entries.length}
          favoriteEntriesCount={favoriteEntries.length}
        />
      </main>
    </>
  );
}
