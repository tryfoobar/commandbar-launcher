// Instructions to test
// nwb serve-react-demo

// Instructions to build and publish:
// npm run prepublishOnly
// npm run build -- --copy-files
// npm publish

import Launcher from "./components/Launcher.js";
import { osControlKey } from "./components/os.js";
export const getControlKey = osControlKey;
export default Launcher;
