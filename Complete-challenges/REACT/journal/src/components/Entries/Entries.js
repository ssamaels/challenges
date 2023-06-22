import "./Entries.css";
import Divider from "../Divider/Divider.js";
import Entry from "../Entry/Entry.js";
import Tabs from "../Tabs/Tabs.js";
import Tab from "../Tab/Tab.js";
import Badge from "../Badge/Badge.js";

export default function Entries({ entries }) {
  // Accept entries as a prop
  return (
    <section className="entries-section">
      <Tabs>
        <Tab active>
          All Entries <Badge isActive>3</Badge>
        </Tab>
        <Tab>
          Favorites <Badge>1</Badge>
        </Tab>
      </Tabs>
      <div className="entries-section__entries">
        {entries.map((entry, index) => (
          <div key={entry.id}>
            {index !== 0 && <Divider />}
            <Entry date={entry.date} motto={entry.motto} notes={entry.notes} />
          </div>
        ))}
      </div>
    </section>
  );
}
