const fs = require("fs");
const path = require("path");

// Recursive func to get all the files from the subdir of routes dir
const getAllFilesInDir = (dirPath, Totalfiles) => {
  files = fs.readdirSync(dirPath);
  Totalfiles = Totalfiles || [];

  files.forEach((file) => {
    if (fs.statSync(dirPath + "/" + file).isDirectory()) {
      Totalfiles = getAllFilesInDir(dirPath + "/" + file, Totalfiles);
    } else {
      Totalfiles.push({ req: dirPath + "/", file: file });
    }
  });
  return Totalfiles;
};

exports = module.exports = (fn) => {
  try {
    //reading files from ./routes directory
    files = getAllFilesInDir(process.cwd() + "/routes");

    files.forEach((fileObj) => {
      let { req, file } = fileObj;
      if (file.endsWith(".js")) {
        if (file.slice(0, file.length - 3) === "index") {
          fn.use("/", require(req + file.slice(0, file.length - 3)));
        } else {
          fn.use(
            "/" + file.slice(0, file.length - 3),
            require(req + file.slice(0, file.length - 3))
          );
        }
      }
    });
    return fn;
  } catch (error) {
    console.error("routes directory doesn't exist!\n" + error);
    throw error;
  }
};
