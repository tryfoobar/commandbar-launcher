// Instructions to build locally:
// npm run prepublishOnly
// npm run build -- --copy-files
// To publish:
// npm publish

import Launcher from "./components/Launcher.js";
import { osControlKey } from "./components/os.js";
export const getControlKey = osControlKey;
export default Launcher;
