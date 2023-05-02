import Grid from "../components/layout/inner/grid";
import Pane from "../components/layout/inner/pane";
import Window from "../components/layout/window";
import WindowManager from "../components/layout/windowManager";
import Signup from "./signup";

export default function LandingPage() {
  return (
    <WindowManager center>
      <Window meant={960} title="eyou social">
        <Grid templateColumns="60% 40%">
          <Pane>
            <p>
              welcome to eyou, a retro-ish social platform for everyone (as long as you
              are nice)
            </p>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore disputandum putant. Sed ut iis bonis
              erigimur, quae expectamus, sic laetamur iis, quae.
            </p>

            <p>
              Dolore, sed in his rebus instructus semper est in Ceramico Chrysippi
              sedentis porrecta manu, quae manus significet illum in hae esse rogatiuncula
              delectatum: 'Numquidnam manus tua sic affecta, quem ad me de virtute
              misisti.
            </p>
          </Pane>
          <Pane>
            <Signup />
          </Pane>
        </Grid>
      </Window>
    </WindowManager>
  );
}
