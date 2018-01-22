import feedme from "./lib/feedme";
import axios from "axios";

var url =
  "http://b.hatena.ne.jp/entrylist.rss?sort=hot&threshold=60&url=http%3A%2F%2Fwww.slideshare.net%2F";
axios.get(url).then(res => {
  var parser = new feedme(true);
  parser.write(res.data);
  var json = parser.done();
  console.log(json);
});
