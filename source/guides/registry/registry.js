function th(tr, caption) {
  var th = document.createElement("th");
  th.innerHTML = caption;
  tr.appendChild(th);
}

function escapeHTML(s) {
  if (s == null) {
    return "";
  }
  return s.replace('//&', '&amp;').replace('//<', '&lt;').replace('/ />', '&gt;');
}

let url = 'https://fhir.github.io/ig-registry/fhir-ig-list.json';

function buildTable(data) {
  var e = document.getElementById('release-filter');
  var value = e.options[e.selectedIndex].value;
  e = document.getElementById('view-filter');
  if (e.checked)
    return buildTableNoDesc(data, value);
  else
    return buildTableDesc(data, value);
}

function hasVersion(varr, ver) {
  for (var i = 0; i < varr.length; i++) {
    var v = varr[i];
    if (v.startsWith(ver))
      return true;
  }
  return false;
}

function fv(varr) {
  if (hasVersion(varr, "5.0")) {
    return "R5";
  }
  if (hasVersion(varr, "4.0")) {
    return "R4";
  }
  if (hasVersion(varr, "4.3")) {
    return "R4B";
  }
  if (hasVersion(varr, "3.0")) {
    return "R3";
  }
  if (hasVersion(varr, "1.0")) {
    return "R2";
  }
  if (hasVersion(varr, "4.3")) {
    return "R4B";
  }
  if (hasVersion(varr, "5.0")) {
    return "R5";
  }
  return "";
}

function buildTableDesc(data, release) {
  var table = document.createElement("table");
  table.setAttribute('id', 'content');
  var tr = table.insertRow(-1);
  th(tr, "Specification");
  th(tr, "Category");
  th(tr, "Authority");
 // th(tr, "Editions");

  for (var i = 0; i < data.length; i++) {
    var g = data[i];

    if (g.editions != null || g['ci-build'] != null) {
      var l = "<br/>";
      var first = true;
      if (g.editions != null) {
        for (var ie = 0; ie < g.editions.length; ie++) {
            var e = g.editions[ie];
          if (release == 'any' || hasVersion(e['fhir-version'], release)) {
            if (first) { first = false; } else {  l = l + " | "; }
            if (release == 'any') {
              l = l + "<a href=\"" + e.url + "\">" + escapeHTML(e.name) + "<\/a> (" + e['ig-version'] + " "+fv(e['fhir-version'])+")";
            } else {
              l = l + "<a href=\"" + e.url + "\">" + escapeHTML(e.name) + "<\/a> (" + e['ig-version']+")";
            }
          }
        }
      }
      if (g['ci-build'] != null && release == 'any') {
        if (first) { first = false; } else {  l = l + " | "; }
        l = l + "<a href=\"" + g['ci-build'] + "\">CI Build<\/a>";
      }
    }

    if (g.implementations != null) {
      for (var ie = 0; ie < g.implementations.length; ie++) {
        if (first) { first = false; } else {  l = l + " | "; }
        var impl = g.implementations[ie];
        if (impl['type'] == 'server') {
          l = l + "<a href=\"" + g['url'] + "\"><img src=\"server.png\"/> "+impl.name+"<\/a>";
        } else if (impl['type'] == 'client') {
          l = l + "<a href=\"" + g['url'] + "\"><img src=\"app.png\"/> "+impl.name+"<\/a>";
        } else if (impl['url'].includes('source')) {
          l = l + "<a href=\"" + g['url'] + "\"><img src=\"github.png\"/> "+impl.name+"<\/a>";
        } else {
          l = l + "<a href=\"" + g['url'] + "\"><img src=\"source.png\"/> "+impl.name+"<\/a>";
        }
      }
    }
    tr = table.insertRow(-1);
    var tc = tr.insertCell(-1);
    if (g.history != null)
      tc.innerHTML = "<b><a href=\"" + g.canonical + "\" title=\"" + g['npm-name'] + "\">" + escapeHTML(g.name) + "<\/a><\/b> : " + escapeHTML(g.description)+l;
    else
      tc.innerHTML = "<b>" + escapeHTML(g.name) + "<\/b> : " + escapeHTML(g.description)+l;
    tc = tr.insertCell(-1);
    tc.innerHTML = escapeHTML(g.category);
    tc = tr.insertCell(-1);
    tc.innerHTML = escapeHTML(g.authority) + "\/" + escapeHTML(g.country);
    // tc = tr.insertCell(-1);
    // if (g.editions != null || g['ci-build'] != null) {
    //   var l = "<ul>";
    //   if (g.editions != null) {
    //     for (var ie = 0; ie < g.editions.length; ie++) {
    //         var e = g.editions[ie];
    //       if (release == 'any' || hasVersion(e['fhir-version'], release)) {
    //          l = l + "<li><a href=\"" + e.url + "\">" + escapeHTML(e.name) + "<\/a> (" + e['ig-version'] + " "+fv(e['fhir-version'])+")<\/li>";
    //       }
    //     }
    //   }
    //   if (g['ci-build'] != null && release == 'any') {
    //     l = l + "<li><a href=\"" + g['ci-build'] + "\">CI Build<\/a><\/li>";
    //   }
    //   tc.innerHTML = l + "<\/ul>";
    // }
  }

  return table;
}

function buildTableNoDesc(data, release) {
  var table = document.createElement("table");
  table.setAttribute('id', 'content');
  var tr = table.insertRow(-1);
  th(tr, "Specification");
  th(tr, "Category");
  th(tr, "Package Id");
  th(tr, "Authority");
  th(tr, "Country");
  th(tr, "Links");

  for (var i = 0; i < data.length; i++) {
    var g = data[i];
    tr = table.insertRow(-1);
    var tc = tr.insertCell(-1);
    tc.innerHTML = "<a href=\"" + g.canonical + "\">" + escapeHTML(g.name) + "<\/a>";
    tc = tr.insertCell(-1);
    tc.innerHTML = escapeHTML(g.category);
    tc = tr.insertCell(-1);
    tc.innerHTML = escapeHTML(g['npm-name']);
    tc = tr.insertCell(-1);
    tc.innerHTML = escapeHTML(g.authority);
    tc = tr.insertCell(-1);
    tc.innerHTML = escapeHTML(g.country);
    tc = tr.insertCell(-1);
    if (g.editions != null || g['ci-build'] != null || g['history'] != null) {
      var l = "";
      if (g['history'] != null && release == 'any') {
        l = l + "| <a href=\"" + g['history'] + "\">History<\/a> ";
      }
      if (g.editions != null) {
        for (var ie = 0; ie < g.editions.length; ie++) {
            var e = g.editions[ie];
          if (release == 'any' || hasVersion(e['fhir-version'], release)) {
            l = l + "| <a href=\"" + e.url + "\">" + escapeHTML(e['ig-version']) + "<\/a> ";
          }
        }
      }
      if (g['ci-build'] != null && release == 'any') {
        l = l + "| <a href=\"" + g['ci-build'] + "\">CI Build<\/a> ";
      }
      tc.innerHTML = l.substring(2);
    }
  }

  return table;
}

function applyFilter(list, ctrl, prop) {
  var e = document.getElementById(ctrl);
  var value = e.options[e.selectedIndex].value;
  if (value == 'any')
    return list;
  return list.filter(function(guide) {
    return guide[prop] === value;
  });
}

function applyReleaseFilter(list) {
  var e = document.getElementById('release-filter');
  var value = e.options[e.selectedIndex].value;
  if (value == 'any')
    return list;
  return list.filter(function(guide) {
    if (guide['editions'] == null) {
      return false;
    } else {
      return guide['editions'].filter(function(edition) {
        return hasVersion(edition['fhir-version'], value);
      }).length > 0;
    }
  });
}

function applyProductFilter(list) {
  var e = document.getElementById('product-filter');
  var value = e.options[e.selectedIndex].value;
  if (value == 'any')
    return list;
  return list.filter(function(guide) {
    if (guide['product'] == null) {
      return false;
    } else {
      return guide['product'].filter(function(edition) {
        return edition == value;
      }).length > 0;
    }
  });
}

function applyContentFilter(list) {
  var e = document.getElementById('content-filter');
  var value = e.options[e.selectedIndex].value;
  if (value == 'any')
    return list;
  return list.filter(function(guide) {
    if (guide['analysis'] == null) {
      return false;
    } else {
      var a = guide['analysis'];
      if (value == 'content') {
        return a['rest'] == null && a['messaging'] == null && a['documents'] == null;
      } else if (value == 'rest') {
        return a['rest'] != null;
      } else if (value == 'msg') {
        return a['messaging'] != null;
      } else if (value == 'document') {
        return a['documents'] != null;
      } else if (value == 'clincore') {
        return a['clinicalCore'] != null;
      } else if (value == 'patientAdmin') {
        return a['patientAdmin'] != null;
      } else if (value == 'carePlanning') {
        return a['carePlanning'] != null;
      } else if (value == 'financials') {
        return a['financials'] != null;
      } else if (value == 'medsMgmt') {
        return a['medsMgmt'] != null;
      } else if (value == 'scheduling') {
        return a['scheduling'] != null;
      } else if (value == 'diagnostics') {
        return a['diagnostics'] != null;
      } else if (value == 'medsReg') {
        return a['medsReg'] != null;
      } else if (value == 'measures') {
        return a['measures'] != null;
      } else if (value == 'ebm') {
        return a['ebm'] != null;
      } else if (value == 'questionnaire') {
        return a['questionnaire'] != null;
      } else if (value == 'trials') {
        return a['trials'] != null;
      } else {}
        return false;
    }
  });
}

function applyTextFilter(list) {
  var e = document.getElementById('search-filter');
  var searchWord = e.value.toLowerCase();
  if (searchWord.length < 2) {
    return list;
  }
  return list.filter(function(guide) {
    return guideNameContainsSearchTerm(guide, searchWord)
        || guideDescriptionContainsSearchTerm(guide, searchWord)
        || guideNpmNameContainsSearchTerm(guide, searchWord);
  });
}

/**
 * Returns true if the guide name contains the search term.
 * @param guide IG to check.
 * @param searchTerm String to search for.
 * @returns {boolean} True, if a match is found.
 */
function guideNameContainsSearchTerm(guide, searchTerm) {
  return guide.name.toLowerCase().indexOf(searchTerm) !== -1
}

/**
 * Returns true if the guide description contains the search term.
 * @param guide IG to check.
 * @param searchTerm String to search for.
 * @returns {boolean} True, if a match is found.
 */
function guideDescriptionContainsSearchTerm(guide, searchTerm) {
  return guide.description.toLowerCase().indexOf(searchTerm) !== -1
}

/**
 * Returns true if the guide npm-name contains the search term.
 * @param guide IG to check.
 * @param searchTerm String to search for.
 * @returns {boolean} True, if a match is found.
 */
function guideNpmNameContainsSearchTerm(guide, searchTerm) {
  // The npm-name can be null for some entries so we need to filter for that
  if (guide['npm-name'] != null) {
    return guide['npm-name'].toLowerCase().indexOf(searchTerm) !== -1;
  } else {
    return false
  }
}

function applyFilters() {
  var list = guides;
  list = applyFilter(list, 'category-filter', 'category');
  list = applyFilter(list, 'authority-filter', 'authority');
  list = applyFilter(list, 'country-filter', 'country');
  list = applyReleaseFilter(list);
  list = applyProductFilter(list);
  list = applyContentFilter(list);
  list = applyTextFilter(list);
  return list;
}

function replaceContent(replacement) {
  var oldContent = document.getElementById('content');
  oldContent.parentNode.replaceChild(replacement, oldContent);
}


function updateCount(guides) {
  var oldContent = document.getElementById('igcount');
  if (guides.length == 1) {
    oldContent.innerText = "1 Implementation Guide";
  } else {
    oldContent.innerText = guides.length+" Implementation Guides";
  }
}
var guides = null;

function sorted(obj) {
  return Object.keys(obj).sort(function(a, b) {
    return a.toLowerCase().localeCompare(b.toLowerCase());
  });
}

function loadRegistry() {
  fetch(url)
   .then(function(response) { return response.json() })
   .then(function(out) {
    var properties = {
      categories: {},
      authorities: {},
      countries: {}
    };
    guides = out.guides;
    for (var i = 0; i < guides.length; i++) {
      var guide = guides[i];
      properties.categories[guide.category] = guide.category;
      properties.countries[guide.country] = guide.country;
      properties.authorities[guide.authority] = guide.authority;
    }

    var categoryOptions = '<select id="category-filter"><option value="any">Any</option>';
    var authorityOptions = '<select id="authority-filter"><option value="any">Any</option>';
    var countryOptions = '<select id="country-filter"><option value="any">Any</option>';
    var natureOptions = '<select id="content-filter"><option value="any">Any</option>';
    var releaseOptions = '<select id="release-filter"><option value="any">Any</option><option value="5.0">R5</option><option value="4.3">R4B</option><option value="4.0">R4</option><option value="3.0">R3</option><option value="1.0">R2</option></select>';
    var productOptions = '<select id="product-filter"><option value="any">Any</option><option value="fhir">FHIR</option><option value="cda">CDA</option><option value="v2">V2</option></select>';

    // Add National Base category first
    categoryOptions += '<option value="National Base">National Base</option>';
    
    // Sort other categories alphabetically
    var sortedCategories = [];
    for (var category in properties.categories) {
      if (properties.categories.hasOwnProperty(category) && "National Base" != category) {
        sortedCategories.push(category);
      }
    }
    sortedCategories.sort(function(a, b) {
      return a.toLowerCase().localeCompare(b.toLowerCase());
    });
    
    // Add sorted categories to options
    for (var i = 0; i < sortedCategories.length; i++) {
      categoryOptions += '<option value="' + sortedCategories[i] + '">' + sortedCategories[i] + '</option>';
    }
    categoryOptions += '</select>';

    // Separate HL7 authorities from other authorities
    var hl7Authorities = [];
    var otherAuthorities = [];
    
    for (var authority in properties.authorities) {
      if (properties.authorities.hasOwnProperty(authority)) {
        if (authority.startsWith("HL7")) {
          hl7Authorities.push(authority);
        } else {
          otherAuthorities.push(authority);
        }
      }
    }
    
    // Sort HL7 authorities alphabetically
    hl7Authorities.sort(function(a, b) {
      return a.toLowerCase().localeCompare(b.toLowerCase());
    });
    
    // Sort other authorities alphabetically
    otherAuthorities.sort(function(a, b) {
      return a.toLowerCase().localeCompare(b.toLowerCase());
    });
    
    // Add HL7 authorities first
    for (var i = 0; i < hl7Authorities.length; i++) {
      authorityOptions += '<option value="' + hl7Authorities[i] + '">' + hl7Authorities[i] + '</option>';
    }
    
    // Then add other authorities
    for (var i = 0; i < otherAuthorities.length; i++) {
      authorityOptions += '<option value="' + otherAuthorities[i] + '">' + otherAuthorities[i] + '</option>';
    }
    authorityOptions += '</select>';

    // Predefined country options (keeping the original order for these specific countries)
    countryOptions += '<option value="uv">All</option>';
    countryOptions += '<option value="eu">European Union</option>';
    countryOptions += '<option value="us">USA</option>';
    countryOptions += '<option value="at">Austria (Österreich)</option>';
    countryOptions += '<option value="au">Australia</option>';
    countryOptions += '<option value="be">Belgium (België/Belgique)</option>';
    countryOptions += '<option value="br">Brasil</option>';
    countryOptions += '<option value="ca">Canada</option>';
    countryOptions += '<option value="ch">Switzerland (Schweiz/Suisse/Svizzera)</option>';
    countryOptions += '<option value="de">Germany (Deutschland)</option>';
    countryOptions += '<option value="dk">Denmark (Danmark)</option>';
    countryOptions += '<option value="fi">Finland (Suomi)</option>';
    countryOptions += '<option value="fr">France</option>';
    countryOptions += '<option value="gb">Great Britain</option>';
    countryOptions += '<option value="in">India</option>';
    countryOptions += '<option value="it">Italy (Italia)</option>';
    countryOptions += '<option value="jp">Japan (日本)</option>';
    countryOptions += '<option value="kr">Korea (한국)</option>';
    countryOptions += '<option value="nl">Netherlands (Nederland)</option>';
    countryOptions += '<option value="no">Norway (Norge)</option>';
    countryOptions += '<option value="nz">New Zealand</option>';
    countryOptions += '<option value="se">Sweden (Sverige)</option>';
    countryOptions += '<option value="tw">Taiwan (台灣)</option>';

    // Sort additional countries alphabetically
    const knownCountries = new Set(['uv', 'eu', 'us', 'at', 'au', 'be', 'br', 'ca', 'ch', 'de', 'dk', 'fi', 'fr', 'gb', 'in', 'it', 'jp', 'kr', 'nl', 'no', 'nz', 'se', 'tw']);
    var additionalCountries = [];
    for (var country in properties.countries) {
      if (properties.countries.hasOwnProperty(country) && !knownCountries.has(country)) {
        additionalCountries.push(country);
      }
    }
    additionalCountries.sort(function(a, b) {
      return a.toLowerCase().localeCompare(b.toLowerCase());
    });
    
    // Add sorted additional countries to options
    for (var i = 0; i < additionalCountries.length; i++) {
      countryOptions += '<option value="' + additionalCountries[i] + '">' + additionalCountries[i].toUpperCase() + '</option>';
    }
    countryOptions += '</select>';
    
    // Define nature options in alphabetical order (grouped by type first, then alphabetized within groups)
    // Exchange mechanism options
    natureOptions += '<option value="content">No Exchange</option>';
    natureOptions += '<option value="document">Document</option>';
    natureOptions += '<option value="msg">Messaging</option>';
    natureOptions += '<option value="rest">RestFul API</option>';
    
    // Content domain options (alphabetically sorted)
    var contentDomainOptions = [
      '<option value="carePlanning">Care Planning / Management</option>',
      '<option value="clincore">Clinical Core</option>',
      '<option value="diagnostics">Diagnostics / Imaging</option>',
      '<option value="ebm">Evidence Based Medicine</option>',
      '<option value="financials">Financials</option>',
      '<option value="measures">Quality Measures</option>',
      '<option value="medsMgmt">Medication Management</option>',
      '<option value="medsReg">Medication Registration</option>',
      '<option value="patientAdmin">Patient Administration</option>',
      '<option value="questionnaire">Questionnaires / Forms</option>',
      '<option value="scheduling">Scheduling</option>',
      '<option value="trials">Clinical Trial Management</option>'
    ];
    
    // Add sorted content domain options
    contentDomainOptions.sort();
    for (var i = 0; i < contentDomainOptions.length; i++) {
      natureOptions += contentDomainOptions[i];
    }
    natureOptions += '</select>';

    var div = document.getElementById("data");
    var filtersHtml = '';

    filtersHtml = '<div id="filters1">';
    filtersHtml += '<div class="form-element"><label for="search-filter">Search</label>';
    filtersHtml += '<input id="search-filter" type="text"/></div>';
    filtersHtml += '<div class="form-element"><label for="authority-filter">Authority</label>';
    filtersHtml += authorityOptions + '</div>';
    filtersHtml += '<div class="form-element"><label for="country-filter">Country</label>';
    filtersHtml += countryOptions + '</div>';
    filtersHtml += '</div><div id="filters2">';
    filtersHtml += '<div class="form-element"><label for="release-filter">Release</label>';
    filtersHtml += releaseOptions + '</div>';
    filtersHtml += '<div class="form-element"><label for="product-filter">Product</label>';
    filtersHtml += productOptions + '</div>';
    filtersHtml += '<div class="form-element"><label for="category-filter">Category</label>';
    filtersHtml += categoryOptions + '</div>';
    filtersHtml += '<div class="form-element"><label for="contents-filter">Contents</label>';
    filtersHtml += natureOptions + '</div>';
    filtersHtml += '<div id="view"><label for="view-filter">View</label><input id="view-filter" type="checkbox" name="desc"/> Hide Descriptions</div></div>';

    div.innerHTML = filtersHtml+"<p id=\"igcount\">"+guides.length+" Implementation Guides<p/>";

    var isFiltered = false;
    var filteredGuides = [];
    var allGuidesTable = buildTable(guides);
    div.appendChild(allGuidesTable);

    var searchFilter = document.getElementById('search-filter');
    searchFilter.addEventListener('input', function(event) {
      var selection = applyFilters();
      updateCount(selection);
      var table = buildTable(selection);
      replaceContent(table);
    })

    function dropdownFilterHandler(event) {
      var selection = applyFilters();
      updateCount(selection);
      var table = buildTable(selection);
      replaceContent(table);
    }

    var categoryFilter = document.getElementById('category-filter');
    categoryFilter.addEventListener('change', function(event) {
      dropdownFilterHandler(event);
    });

    var authorityFilter = document.getElementById('authority-filter');
    authorityFilter.addEventListener('change', function(event) {
      dropdownFilterHandler(event);
    });

    var countryFilter = document.getElementById('country-filter');
    countryFilter.addEventListener('change', function(event) {
      dropdownFilterHandler(event);
    });

    var releaseFilter = document.getElementById('release-filter');
    releaseFilter.addEventListener('change', function(event) {
      dropdownFilterHandler(event);
    });
    
    var productFilter = document.getElementById('product-filter');
    productFilter.addEventListener('change', function(event) {
      dropdownFilterHandler(event);
    });
    
    var contentFilter = document.getElementById('content-filter');
    contentFilter.addEventListener('change', function(event) {
      dropdownFilterHandler(event);
    });
    
    var viewFilter = document.getElementById('view-filter');
    viewFilter.addEventListener('change', function(event) {
      dropdownFilterHandler(event);
    })
    })
//    .catch(err => {
//      throw err
//    });
}