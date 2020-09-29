const os = () => {
  const userAgent = window.navigator.userAgent;
  const platform = window.navigator.platform;
  const macosPlatforms = ["Macintosh", "MacIntel", "MacPPC", "Mac68K"];
  const windowsPlatforms = ["Win32", "Win64", "Windows", "WinCE"];
  const iosPlatforms = ["iPhone", "iPad", "iPod"];

  // default to Mac
  let os = "MAC";

  if (macosPlatforms.indexOf(platform) !== -1) {
    os = "MAC";
  } else if (iosPlatforms.indexOf(platform) !== -1) {
    os = "IOS";
  } else if (windowsPlatforms.indexOf(platform) !== -1) {
    os = "WINDOWS";
  } else if (/Android/.test(userAgent)) {
    os = "ANDROID";
  } else if (!os && /Linux/.test(platform)) {
    os = "LINUX";
  }

  return os;
};

export const osControlKey = () => {
  if (["WINDOWS", "ANDROID", "LINUX"].includes(os())) {
    return "Ctrl";
  } else {
    return "⌘";
  }
};
