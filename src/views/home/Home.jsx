import Navigation from "../../components/layouts/Navigation";
import Video from "./components/Video";
import Submenu from "./components/Submenu";

function Home() {
  return (
    <Navigation>
      <section>
        <Video />
        <Submenu />
      </section>
    </Navigation>
  );
}

export default Home;
