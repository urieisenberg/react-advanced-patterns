import { CompoundPattern } from "./Patterns/Compound";
import { ReusableStylesPattern } from "./Patterns/ReusableStyles";
import { ControlPropsPattern } from "./Patterns/ControlProps";
import { CustomHooksPattern } from "./Patterns/CustomHooks";
import { PropsCollectionPattern } from "./Patterns/PropsCollection";
import { PropsGettersPattern } from "./Patterns/PropsGetters";

function App() {
  return (
    <>
      <div>
        <h1>CompoundPattern</h1> <CompoundPattern />
      </div>
      <hr />
      <div>
        <h1>ReusableStylesPattern</h1> <ReusableStylesPattern />
      </div>
      <hr />
      <div>
        <h1>ControlPropsPattern</h1> <ControlPropsPattern />
      </div>
      <hr />
      <div>
        <h1>CustomHooksPattern</h1> <CustomHooksPattern />
      </div>
      <hr />
      <div>
        <h1>PropsCollectionPattern</h1> <PropsCollectionPattern />
      </div>
      <hr />
      <div>
        <h1>PropsGettersPattern</h1> <PropsGettersPattern />
      </div>
    </>
  );
}

export default App;
