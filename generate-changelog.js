const fs = require("fs");
const fetch = require("node-fetch");
const format = require("date-fns/format");
const formatDistanceToNowStrict = require("date-fns/formatDistanceToNowStrict");

const HEADER_PATH = "./docs/changelog/_header.mdx";
const CHANGELOG_PATH = "./docs/changelog/changelog.mdx";

const header = fs.readFileSync(HEADER_PATH, "utf8");

fetch("https://api.github.com/repos/rowyio/rowy/releases")
  .then((res) => res.json())
  .then((json) => {
    const items = json.map((release) => {
      const title = release.name.replace(/v[\d\.]+[^\w]*/, "");

      const heading =
        `## <span className="changelog-version">${release.tag_name}</span>` +
        (title
          ? `<span className="changelog-version-separator"> – </span><span>${title}</span>`
          : "");

      const releaseDate = `
<p className="changelog-date"><a href="${
        release.html_url
      }" target="_blank" rel="noopener noreferrer"><time datetime="${
        release.published_at
      }">${format(
        new Date(release.published_at),
        "d MMM yyyy"
      )}&nbsp;·&nbsp;${formatDistanceToNowStrict(
        new Date(release.published_at)
      )} ago</time></a></p>
`;

      const body =
        release.body
          .replace(/##.*/gm, "<ul>")
          .replace(/(- .*$)\r\n\r\n/gm, "$1\n\n</ul>\n\n")
          .replace("## ")
          .replace(
            /- \[([\w]+)\] (.*)$/gm,
            `<li><span className="changelog-tag" data-tag="$1">$1</span>\n\n$2\n\n</li>`
          )
          .replace(/#(\d+)/g, "[#$1](https://github.com/rowyio/rowy/issues/$1)")
          .replace(/@([a-zA-Z0-9\-]{1,39})/g, "[@$1](https://github.com/$1)") +
        (release.tag_name !== "v1.0.0" ? "\n\n</ul>" : "");

      return [heading, releaseDate, body].join("\n");
    });

    fs.writeFileSync(CHANGELOG_PATH, header + "\n" + items.join("\n\n"));
  })
  .catch((err) => console.log(err));
