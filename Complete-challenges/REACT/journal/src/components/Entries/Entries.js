import "./Entries.css";
import Divider from "../Divider/Divider.js";
import Entry from "../Entry/Entry.js";
import Tabs from "../Tabs/Tabs.js";
import Tab from "../Tab/Tab.js";
import Badge from "../Badge/Badge.js";

export default function Entries({
  entries,
  onToggleFavorite,
  filter,
  onShowAllEntries,
  onShowFavoriteEntries,
  allEntriesCount,
  favoriteEntriesCount,
}) {
  const favoriteEntries = entries.filter((entry) => entry.isFavorite);

  const displayedEntries = filter === "favorites" ? favoriteEntries : entries;

  return (
    <section className="entries-section">
      <Tabs>
        <Tab active={filter === "all"} onClick={onShowAllEntries}>
          All Entries <Badge isActive>{allEntriesCount}</Badge>
        </Tab>
        <Tab active={filter === "favorites"} onClick={onShowFavoriteEntries}>
          Favorites <Badge>{favoriteEntriesCount}</Badge>
        </Tab>
      </Tabs>
      <div className="entries-section__entries">
        {displayedEntries.map((entry, index) => (
          <div key={entry.id}>
            {index !== 0 && <Divider />}
            <Entry
              date={entry.date}
              motto={entry.motto}
              notes={entry.notes}
              isFavorite={entry.isFavorite}
              id={entry.id}
              onToggleFavorite={onToggleFavorite}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
