import "./Entries.css";
import Divider from "../Divider/Divider.js";
import Entry from "../Entry/Entry.js";
import Tabs from "../Tabs/Tabs.js";
import Tab from "../Tab/Tab.js";
import Badge from "../Badge/Badge.js";

export default function Entries() {
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
        <Entry
          date="Jun 21, 2023"
          motto="Licks paws"
          notes="Cat ipsum dolor sit amet, hopped up on catnip. Adventure always bite nose of your human but no, you can't close the door, i haven't decided whether or not i wanna go out for do not try to mix old food with new one to fool me!"
        />
        <Divider />
        <Entry
          date="Jun 20, 2023"
          motto="Thoughts"
          notes="Nyan nyan goes the cat, scraaaaape scraaaape goes the walls when the cat murders them with its claws bite the neighbor's bratty kid i want to go outside let me go outside nevermind inside is better. Stretch out on bed mmmmmmmmmeeeeeeeeooooooooowwwwwwww sun bathe."
        />
        <Divider />
        <Entry
          date="Jun 19, 2023"
          motto="Cat banana"
          notes="Mew scream at teh bath scratch the postman wake up lick paw wake up owner meow meow munch, munch, chomp, chomp."
        />
        <Divider />
      </div>
    </section>
  );
}
