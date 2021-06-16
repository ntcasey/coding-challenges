var simplifyPath = function (path) {
  let parse = path.split("/");
  const result = [];
  for (let e of parse) {
    if (e === "." || e === "") {
      continue;
    } else if (e === "..") {
      result.pop();
    } else {
      result.push(e);
    }
  }

  let s = "";
  for (let e of result) {
    s += "/" + e;
  }

  return s === "" ? "/" : s;
};

let w = "/////////";
console.log(simplifyPath(w));
