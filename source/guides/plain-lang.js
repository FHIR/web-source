

async function showPlainLanguage(id, ver) {
  var div = document.getElementById('plain-lang-box');
  if (div != null) {
    var json = await getJson();
    if (json == null) {
      div.innerHTML = '<p>No Json</p>';
      div.style = "display: none";
    } else {
      var vl = json[id];
      if (vl == null) {
        div.innerHTML = '<p>No IG Entry</p>';
        div.style = "display: none";
    } else {
        var v = vl.versions[ver];
        if (v == null) {
          vl = v;
        }
        if (vl.status = 'published') {
          div.style = "background-color: #edfafa; border: 2px solid navy; border-radius: 8px; padding: 5px;";
          div.innerHTML = header()+processMarkdown(vl.description)+footer();
        } else {
          div.innerHTML = '<p>Not published</p>';
          div.style = "display: none";
        }
      }
    }
  }
}

function togglePlainLangContent() { 
  if (localStorage.getItem('plain-lang') == 'no') {
    localStorage.setItem('plain-lang', 'yes');
    var div = document.getElementById('plain-lang-content'); 
    div.style = "";
    var div = document.getElementById('plain-lang-button'); 
    div.innerText = 'Hide';
  } else {
    localStorage.setItem('plain-lang', 'no');
    var div = document.getElementById('plain-lang-content'); 
    div.style = "display: none";
    var div = document.getElementById('plain-lang-button'); 
    div.innerText = 'Show';
  }
}

async function getJson() {
    const url = "/guides/plain-language-descriptions.json";
    try {
        const response = await fetch(url);
        if (response.ok) {
          return await response.json();
        } else {
          return null;
        }
    } catch (error) {
        return null;
    }
}

function header() {
  if (localStorage.getItem('plain-lang') == 'no') {
    return "<p style='color: navy; background-color: #dcfafa;'><b>Plain Language Description</b>  &nbsp; <button id='plain-lang-button' onclick='togglePlainLangContent()'>Show</button></p><div id='plain-lang-content' style='display: none'>";
  } else {
    return "<p style='color: navy; background-color: #dcfafa;'><b>Plain Language Description</b>  &nbsp; <button id='plain-lang-button' onclick='togglePlainLangContent()'>Hide</button></p><div id='plain-lang-content'>";
  }
} 

function footer() {
  return "</div>";
}

function processMarkdown(md) {
  var reader = new commonmark.Parser();
  var writer = new commonmark.HtmlRenderer();
  var parsed = reader.parse(md); 
  return writer.render(parsed); 
}
